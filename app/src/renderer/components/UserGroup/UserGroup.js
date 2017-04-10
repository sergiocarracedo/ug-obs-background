import * as types from '../../vuex/mutation-types'

export default {
    methods : {
        openDialog() {
            this.$store.commit(types.OPEN_SETTINGS_DIALOG);
        },
    },
    computed: {
        speaker() {
            return this.$store.state.settings.speaker;
        },
        talk() {
            return this.$store.state.settings.talk;
        },
        meetup() {
            return this.$store.state.settings.meetup;
        }
    }
};