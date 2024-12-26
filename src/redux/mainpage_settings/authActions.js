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
    data: {
      main_page_theme: 'default_theme',
      show_first_books: false,
      show_only_free_books: false,
      restricted_mode: false,
      view_mode: 'horizontal',
    },
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
      // Загрузка настроек
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
      })
      // Сохранение настроек
      .addCase(saveUserSettings.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(saveUserSettings.fulfilled, (state, action) => {
        state.status = 'success';
        state.data = action.payload;
      })
      .addCase(saveUserSettings.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { setViewMode } = userSettingsSlice.actions;
export default userSettingsSlice.reducer;
