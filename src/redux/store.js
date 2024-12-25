import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // используем localStorage для хранения данных
import rootReducer from './index'; // Все редьюсеры
import authMiddleware from '../middleware/authMiddleware'; // Подключаем ваше middleware

// Конфигурация Redux Persist
const persistConfig = {
  key: 'root', // Основной ключ для хранения данных
  storage, // Указываем, что храним в localStorage
  whitelist: ['profile', 'auth', 'register', 'nav'], // Храним только те редьюсеры, которые хотим
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Настройка store
const store = configureStore({
  reducer: persistedReducer, // Используем persistReducer
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'], // Игнорируем ошибку сериализации с redux-persist
      },
    }).concat(authMiddleware), // Добавляем ваше middleware
  devTools: process.env.NODE_ENV !== 'production', // Включаем devTools только в разработке
});

const persistor = persistStore(store);

export { store, persistor };
