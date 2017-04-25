import * as types from '../mutation-types'
const settings = require('electron-settings');

const state = {
    ug: settings.get('ug', 'phpvigo'),
    ugs: [],
    meetup: {
        title: settings.get('meetup', '#PHPVigo #0'),
    },
    dialog: false,
    showClock: settings.get('showClock', false),
    lightningDuration: settings.get('lightningDuration', '5:00')
}

const mutations = {
    [types.SET_UG] (state, ug) {
        state.ug = ug;
    },
    [types.SET_MEETUP] (state, meetup) {
        state.meetup = meetup;
    },
    [types.SET_SHOW_CLOCK] (state, showClock) {
        state.showClock = showClock;
    },
    [types.OPEN_SETTINGS_DIALOG] (state) {
        state.dialog = true;
    },
    [types.CLOSE_SETTINGS_DIALOG] (state) {
        state.dialog = false;
    },
    [types.SET_LIGHTNING_DURATION] (state, duration) {
        state.lightningDuration = duration;
    }

}

const actions = {
    [types.ACTION_SAVE_SETTINGS] (context) {
        settings.set('ug', context.state.ug);
        settings.set('meetup', context.state.meetup.title);
        settings.set('showClock', context.state.showClock);
        settings.set('talks', context.rootState.talks.talks);
        settings.set('currentTalkIndex', context.rootState.talks.currentTalkIndex);
        settings.set('lightningDuration', context.state.lightningDuration);
    }
}


export default {
    state,
    mutations,
    actions
}
