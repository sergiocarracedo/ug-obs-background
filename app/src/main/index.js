'use strict'
import {app, BrowserWindow, Tray, Menu, ipcMain} from 'electron'
let mainWindow
let tray = null;
import * as types from '../renderer/vuex/mutation-types'



const mainWinURL = process.env.NODE_ENV === 'development'
    ? `http://localhost:${require('../../../config').port}`
    : `file://${__dirname}/index.html`

function createWindows() {
    /**
     * Initial window options
     */
    mainWindow = new BrowserWindow({
        height: 600,
        width: 800,
        title: "Ug OBS Background",
        icon: __dirname + '/../../icons/256x256.png',
    })

    mainWindow.loadURL(mainWinURL)

    mainWindow.on('closed', () => {
        mainWindow = null
    })

    // eslint-disable-next-line no-console
    console.log('mainWindow opened')

}

app.on('ready', () => {
    createWindows();

    tray = new Tray(__dirname + '/../../icons/256x256.png');
    const contextMenu = Menu.buildFromTemplate([
        {
            label: 'Next talk',
            accelerator: 'CmdOrCtrl+Right',
            click: function () {
                mainWindow.webContents.send('systemtray', {
                    action: 'dispatch',
                    event: types.NEXT_TALK
                })

            }
        },
        {
            label: 'Previous talk',
            accelerator: 'CmdOrCtrl+Left',
            click: function () {
                mainWindow.webContents.send('systemtray', {
                    action: 'dispatch',
                    event: types.PREV_TALK
                })
            }
        },
        {
            label: 'Settings',
            accelerator: 'CmdOrCtrl+S',
            click: function () {
                mainWindow.webContents.send('systemtray', {
                    action: 'commit',
                    event: types.OPEN_SETTINGS_DIALOG
                })
            }
        }
    ])
    tray.setToolTip('UG OBS Background')
    tray.setContextMenu(contextMenu)

})

app.on('window-all-closed', () => {
   app.quit()
})

app.on('activate', () => {
    if (mainWindow === null) {
        createWindows()
    }
})
