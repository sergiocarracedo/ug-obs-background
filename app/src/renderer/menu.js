const { Menu } = require('electron').remote;
import {ipcRenderer}  from 'electron'
import store from './vuex/store'
import * as types from './vuex/mutation-types'
const path = require('path')

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
        label: 'Talks',
        submenu: [
            {
                label: 'Next talk',
                accelerator: 'CmdOrCtrl+Right',
                click: function () {
                    store.dispatch(types.NEXT_TALK);
                }
            },
            {
                label: 'Previous talk',
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
            {
                label: 'Force window size',
                accelerator: 'CmdOrCtrl+F',
                click: function (item, focusedWindow) {
                    if (focusedWindow) {
                        let size = store.state.settings.windowSize;
                        let dimensions = size.split('x');

                        if (dimensions[0] > 0 && dimensions[1] > 0) {
                            focusedWindow.setContentSize(Number(dimensions[0]), Number(dimensions[1]), true);
                        }
                    }
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
    },
    {
        label: 'About',
        submenu: [
            {
                label: 'About',
                accelerator: 'CmdOrCtrl+U',
                click: function () {
                    store.commit(types.OPEN_ABOUT_DIALOG);
                }
            }
        ],
    }
];

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);


ipcRenderer.on('systemtray' , function(event , data){
    switch (data.action) {
        case 'dispatch':
            store.dispatch(data.event);
            break;
        case 'commit' :
            store.commit(data.event);
            break;
    }

});
