import * as types from '../mutation-types'
const settings = require('electron-settings');

const state = {
    dialog: false
}

const mutations = {
    [types.OPEN_ABOUT_DIALOG] (state) {
        state.dialog = true;
    },
    [types.CLOSE_ABOUT_DIALOG] (state) {
        state.dialog = false;
    }

}

export default {
    state,
    mutations,
}
