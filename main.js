const path = require('path');
const { app, BrowserWindow } = require('electron');

if (process.env.NODE_ENV !== 'production') {
    require('electron-reloader')(module);
}

function createMainWindow() {
    const mainWindow = new BrowserWindow({
        title: 'Smart-Room Dashboard',
        width: 800,
        height: 800,
    });

    mainWindow.loadFile(path.join(__dirname, 'renderer/index.html')).then(r =>{

    });
}

app.whenReady().then(() => {
    createMainWindow();

    app.on('activate',  () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
});
