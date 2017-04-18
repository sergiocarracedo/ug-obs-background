import * as types from '../mutation-types'
const settings = require('electron-settings');


const default_talks = [{
    title: 'Charla',
    speaker: 'Ponente',
    isLightning: false,
}];


const state = {
    talks: settings.get('talks', default_talks),
    currentTalk: {},
    currentTalkIndex: settings.get('currentTalkIndex', 0)
}

const mutations = {
    [types.ADD_TALK] (state, talk) {
        state.talks.push(talk);
    },
    [types.REMOVE_TALK] (state, talk) {
        var talks = state.talks
        talks.splice(talks.indexOf(talk), 1)
    },
    [types.UPDATE_TALK] (state, talk) {
        var talks = state.talks
        talks[talks.indexOf(talk)] = talk
    },

    [types.SET_CURRENT_TALK_INDEX] (state, index) {
        state.currentTalkIndex = index;
    },

    [types.SET_CURRENT_TALK] (state, talk) {
        state.currentTalk = talk;
    },
}


const actions = {
    [types.ACTION_SET_CURRENT_TALK] (context, index) {
        if (index == undefined) {
            index = context.state.currentTalkIndex;
        }

        context.commit(types.SET_CURRENT_TALK_INDEX, index);
        context.commit(types.SET_CURRENT_TALK, context.state.talks[index]);
    },
    [types.NEXT_TALK] (context, index) {
        if (index == undefined) {
            index = context.state.currentTalkIndex;
        }
        index++;
        if (index > (context.getters.talksLenght - 1)) {
            index = 0;
        }
        context.commit(types.SET_CURRENT_TALK_INDEX, index);
        context.commit(types.SET_CURRENT_TALK, context.state.talks[index]);
    },
    [types.PREV_TALK] (context, index) {
        if (index == undefined) {
            index = context.state.currentTalkIndex;
        }
        index--;
        if (index < 0) {
            index = context.getters.talksLenght - 1;
        }
        context.commit(types.SET_CURRENT_TALK_INDEX, index);
        context.commit(types.SET_CURRENT_TALK, context.state.talks[index]);
    },

}

const getters = {
    talksLenght: state => {
        return state.talks.length
    }
}


export default {
    state,
    mutations,
    actions,
    getters
}
