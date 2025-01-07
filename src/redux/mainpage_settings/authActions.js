import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchMainpageSettings, updateMainpageSettings } from '../../services/profile';

export const loadUserSettings = createAsyncThunk(
  'userSettings/load',
  async (_, { rejectWithValue }) => {
    try {
      return await fetchMainpageSettings();
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  },
);

export const saveUserSettings = createAsyncThunk(
  'userSettings/save',
  async (settings, { rejectWithValue }) => {
    try {
      return await updateMainpageSettings(settings);
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  },
);

const userSettingsSlice = createSlice({
  name: 'userSettings',
  initialState: {
    data: {},
    status: 'idle',
    error: null,
  },
  reducers: {
    setViewMode: (state, action) => {
      state.data.view_mode = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadUserSettings.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loadUserSettings.fulfilled, (state, action) => {
        state.status = 'success';
        state.data = action.payload;
      })
      .addCase(loadUserSettings.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
        console.error('Ошибка загрузки настроек:', action.payload);
      })
      .addCase(saveUserSettings.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(saveUserSettings.fulfilled, (state, action) => {
        state.status = 'success';
        state.data = { ...state.data, ...action.payload }; // Обновляем только изменённые поля
      })
      .addCase(saveUserSettings.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
        console.error('Ошибка сохранения настроек:', action.payload);
      });
  },
});

export const { setViewMode } = userSettingsSlice.actions;
export default userSettingsSlice.reducer;
