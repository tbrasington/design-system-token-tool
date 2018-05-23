// Basic init
const electron = require('electron')
const {app, BrowserWindow} = electron
// Let electron reloads by itself when webpack watches changes in ./app/
require('electron-reload')(__dirname)

// To avoid being garbage collected
let mainWindow

app.on('ready', () => {
    mainWindow = new BrowserWindow({width: 1024, height: 800, backgroundColor: '#1f1f1f',titleBarStyle: 'hiddenInset'})

    mainWindow.loadURL(`file://${__dirname}/app/index.html`)

})
