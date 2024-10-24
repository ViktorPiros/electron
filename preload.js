const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  addUser: (user) => ipcRenderer.send('addUser', user),
  getUsers: () => ipcRenderer.invoke('getUsers'),
});
