import * as types from '../../vuex/mutation-types'

export default {
    computed: {
        meetup() {
            return this.$store.state.settings.meetup;
        },
        currentTalk() {
            return this.$store.state.talks.currentTalk;
        }

    },
    mounted() {
        this.$store.dispatch(types.ACTION_SET_CURRENT_TALK);
    }
};