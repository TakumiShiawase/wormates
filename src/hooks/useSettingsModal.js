import { useState, useEffect } from 'react';
import { fetchSettings, updateSettings } from '../services/reader';

const useSettingsModal = () => {
  const [textSize, setTextSize] = useState(16);
  const [textWidth, setTextWidth] = useState(600);
  const [rowHeight, setRowHeight] = useState(1.5);
  const [font, setFont] = useState('Arial');
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const getSettings = async () => {
      try {
        const settings = await fetchSettings();
        setTextSize(settings.font_size); // Преобразуем в пиксели
        setTextWidth(settings.text_position); // Преобразуем в пиксели
        setRowHeight(settings.line_height);
        setFont(['Arial', 'Times New Roman', 'Courier New'][settings.font - 1]); // Преобразуем в строку
        setTheme(settings.theme);
      } catch (error) {
        console.error('Ошибка получения настроек:', error);
      }
    };

    getSettings();
  }, []);

  const saveSettings = async (updatedSettings) => {
    const settings = {
      theme: updatedSettings.theme || theme,
      font_size: Math.round(updatedSettings.textSize || textSize), // Преобразуем обратно в единицы и округляем до целого числа
      line_height: Math.round(updatedSettings.rowHeight || rowHeight), // Округляем до целого числа
      text_position: Math.round(updatedSettings.textWidth || textWidth), // Преобразуем обратно в единицы и округляем до целого числа
      font_weight: 1, // Пример, можно сделать динамическим
      font: ['Arial', 'Times New Roman', 'Courier New'].indexOf(updatedSettings.font || font) + 1, // Преобразуем обратно в число
    };

    try {
      await updateSettings(settings);
    } catch (error) {
      console.error('Ошибка сохранения настроек:', error);
    }
  };

  return {
    textSize,
    setTextSize,
    textWidth,
    setTextWidth,
    rowHeight,
    setRowHeight,
    font,
    setFont,
    theme,
    setTheme,
    saveSettings,
  };
};

export default useSettingsModal;
