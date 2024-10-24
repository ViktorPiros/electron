// preload.js
const { contextBridge } = require('electron');

// Создаем глобальный объект window.electronAPI
contextBridge.exposeInMainWorld('electronAPI', {
  addUser: (user) => ipcRenderer.send('addUser', user), // Отправка данных нового пользователя
  getUsers: () => ipcRenderer.invoke('getUsers'), // Получение списка пользователей
});
