import * as types from '../mutation-types'
const settings = require('electron-settings');


console.log(settings.file());

const state = {
    ug: settings.get('ug', 'phpvigo'),
    ugs: [],
    meetup: {
        title: settings.get('meetup', '#PHPVigo #0'),
    },
    dialog: false
}

const mutations = {
    [types.SET_UG] (state, ug) {
        state.ug = ug;
    },
    // [types.SET_TALK] (state, index, rootState) {
    //     state.talk = rootState.talks.talks[index];
    // },
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
    [types.ACTION_SAVE_SETTINGS] (context) {
        settings.set('ug', context.state.ug);
        settings.set('meetup', context.state.meetup.title);
        settings.set('talks', context.rootState.talks.talks);
        settings.set('currentTalkIndex', context.rootState.talks.currentTalkIndex);
    }
}


export default {
    state,
    mutations,
    actions
}
