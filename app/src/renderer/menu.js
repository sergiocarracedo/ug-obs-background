const {Menu} = require('electron').remote;
import {ipcRenderer}  from 'electron'
import store from './vuex/store'
import * as types from './vuex/mutation-types'

var template = [
    {
        label: 'Configuración',
        submenu: [
            {
                label: 'Configuración',
                accelerator: 'CmdOrCtrl+S',
                click: function () {
                    store.commit(types.OPEN_SETTINGS_DIALOG);
                }
            }
        ],
    },
    {
        label: 'Acciones',
        submenu: [
            {
                label: 'Siguente Charla',
                accelerator: 'CmdOrCtrl+Right',
                click: function () {
                    store.dispatch(types.NEXT_TALK);
                }
            },
            {
                label: 'Anterior Charla',
                accelerator: 'CmdOrCtrl+Left',
                click: function () {
                    store.dispatch(types.PREV_TALK);
                }
            },
        ]
    },
    {
        label: 'View',
        submenu: [
            {
                label: 'Reload',
                accelerator: 'CmdOrCtrl+R',
                click: function (item, focusedWindow) {
                    if (focusedWindow)
                        focusedWindow.reload();
                }
            },
        ]
    },
    {
        label: "Edit",
        submenu: [
            {label: "Undo", accelerator: "CmdOrCtrl+Z", selector: "undo:"},
            {label: "Redo", accelerator: "Shift+CmdOrCtrl+Z", selector: "redo:"},
            {type: "separator"},
            {label: "Cut", accelerator: "CmdOrCtrl+X", selector: "cut:"},
            {label: "Copy", accelerator: "CmdOrCtrl+C", selector: "copy:"},
            {label: "Paste", accelerator: "CmdOrCtrl+V", selector: "paste:"},
            {label: "Select All", accelerator: "CmdOrCtrl+A", selector: "selectAll:"}
        ]
    }
];

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);