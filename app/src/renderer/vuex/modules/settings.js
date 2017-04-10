import * as types from '../mutation-types'
const settings = require('electron-settings');

const state = {
    ug: settings.get('ug', 'phpvigo'),
    ugs: [],
    meetup: {
        title: settings.get('meetup', '#PHPVigo #0'),
    },
    talks: {},
    dialog: false
}

const mutations = {
    [types.SET_UG] (state, ug) {
        state.ug = ug;
    },
    [types.SET_TALK] (state, talk) {
        state.talk = talk;
    },
    [types.SET_MEETUP] (state, meetup) {
        state.meetup = meetup;
    },
    [types.OPEN_SETTINGS_DIALOG] (state) {
        state.dialog = true;
    },
    [types.CLOSE_SETTINGS_DIALOG] (state) {
        state.dialog = false;
    }

}

const actions = {
    [types.SAVE_SETTINGS] (context) {
        settings.set('ug', context.state.ug);
        settings.set('meetup', context.state.meetup.title);
    }
}


export default {
    state,
    mutations,
    actions
}
