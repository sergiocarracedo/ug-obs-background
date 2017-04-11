const { Menu } = require('electron').remote;
import { ipcRenderer }  from 'electron'
import store from './vuex/store'
import * as types from './vuex/mutation-types'

var template = [
    {
        label: 'Settings',
        submenu: [
            {
                label: 'Settings',
                accelerator: 'CmdOrCtrl+S',
                click: function () {
                    store.commit(types.OPEN_SETTINGS_DIALOG);
                }
            }
        ],
    },
    {
        label: 'View',
        submenu: [
            {
                label: 'Reload',
                accelerator: 'CmdOrCtrl+R',
                click: function(item, focusedWindow) {
                    if (focusedWindow)
                        focusedWindow.reload();
                }
            },
        ]
    }
];

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);