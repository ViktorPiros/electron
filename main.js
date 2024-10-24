const { app, BrowserWindow, ipcMain } = require('electron');
const fs = require('fs');
const path = require('path');

let users = [];
const filePath = path.join(app.getPath('userData'), 'users.json');

function loadUsers() {
    if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath);
        users = JSON.parse(data);
    }
}

function saveUsers() {
    fs.writeFileSync(filePath, JSON.stringify(users));
}

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: __dirname + '/renderer.js',
            contextIsolation: true,
            enableRemoteModule: false,
            nodeIntegration: false,
        },
    });

    win.loadFile('index.html');
}

app.whenReady().then(() => {
    loadUsers();
    createWindow();
});

ipcMain.on('addUser', (event, user) => {
    users.push(user);
    saveUsers();
    event.sender.send('users-updated', users);
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});