<template>
    <md-dialog ref="settingsDialog" @close="onClose" width="90%">
        <md-dialog-content>
            <md-tabs>
                <md-tab id="talks" md-label="Charlas">
                    <md-button class="md-primary md-raised md-dense" @click.native="addTalk()">
                        <i class="fa fa-plus"></i>
                    </md-button>
                    <div class="talks-list">
                        <md-layout v-for="(talk, index) in talks">
                            <md-layout md-flex="5">
                                <md-radio v-model="currentTalk" name="currentTalk" :md-value="index" @change="setCurrentTalk"></md-radio>
                            </md-layout>
                            <md-layout md-flex="30">
                                <md-input-container>
                                    <label>Título charla</label>
                                    <md-input v-model="talk.title" @change="updateTalk(talk)"></md-input>
                                </md-input-container>
                            </md-layout>
                            <md-layout md-flex="30">
                                <md-input-container>
                                    <label>Ponente</label>
                                    <md-input v-model="talk.speaker" @change="updateTalk(talk)"></md-input>
                                </md-input-container>
                            </md-layout>
                            <md-layout md-flex="25">
                                <md-switch v-model="talk.isLightning" @change="updateTalk(talk)">Lightning</md-switch>
                            </md-layout>

                            <md-layout md-flex="10">
                                <md-button class="md-icon-button md-raised md-dense md-accent" @click.native="removeTalk(talk)" v-show="talksLenght > 1">
                                    <i class="fa fa-trash"></i>
                                </md-button>
                            </md-layout>
                        </md-layout>
                    </div>
                </md-tab>

                <md-tab id="config" md-label="Configuración">
                    <md-input-container>
                        <label for="selectedUg">Grupo</label>
                        <md-select name="selectedUg" id="selectedUg" v-model="settings.ug">
                            <md-option v-for="ug in ugList" :value="ug">{{ ug }}</md-option>
                        </md-select>
                    </md-input-container>

                    <md-input-container>
                        <label>Título meetup</label>
                        <md-input v-model="settings.meetup.title"></md-input>
                    </md-input-container>

                    <md-layout>
                        <md-switch v-model="settings.showClock">Show clock</md-switch>
                    </md-layout>

                    <md-input-container>
                        <label>Lightning talk duration (MM:SS)</label>
                        <md-input v-model="settings.lightningDuration"></md-input>
                    </md-input-container>

                    <md-input-container>
                        <label>Window size</label>
                        <md-input v-model="settings.windowSize" ></md-input>
                        <span>ex. 1024x768</span>
                    </md-input-container>
                </md-tab>

            </md-tabs>

        </md-dialog-content>

        <md-dialog-actions>
            <md-button class="md-primary md-raised" @click.native="close()">Cerrar</md-button>
        </md-dialog-actions>
    </md-dialog>
</template>

<script>
    import * as types from '../../vuex/mutation-types'
    import { mapState } from 'vuex'
    export default {
        name: 'settings-dialog',
        props: ['ugList'],
        data() {
            return {
                settings: {
                    ug: null,
                    meetup: {},
                    showClock: false,
                    lightningDuration: 300,
                },
            }
        },
        computed: {
            dialogVisibility() {
                return this.$store.state.settings.dialog;
            },
            currentTalk() {
                return this.$store.state.talks.currentTalkIndex;
            },
            talks: {
                get: function () {
                    return this.$store.state.talks.talks;
                },
                set: function (newValue) {

                }
            },
            talksLenght() {
                return this.$store.getters.talksLenght;
            }
        },
        watch: {
            dialogVisibility: {
                handler(value) {
                    if (value) {
                        this.open();
                    } else {
                        this.close();
                    }
                },
                deep: true
            }
        },
        created() {
            this.settings = this.$store.state.settings
        },
        methods: {
            open()
            {
                this.$refs['settingsDialog'].open();
            }
            ,
            close()
            {
                this.$refs['settingsDialog'].close();
            },
            onClose() {
                this.save();
                this.$store.commit(types.CLOSE_SETTINGS_DIALOG)

            },
            save()
            {
                this.$store.commit(types.SET_UG, this.settings.ug);
                this.$store.commit(types.SET_MEETUP, this.settings.meetup);
                this.$store.commit(types.SET_SHOW_CLOCK, this.settings.showClock);
                this.$store.commit(types.SET_LIGHTNING_DURATION, this.settings.lightningDuration);
                this.$store.dispatch(types.ACTION_SAVE_SETTINGS);
            },
            addTalk() {
                this.$store.commit(types.ADD_TALK, {
                    title: null,
                    speaker: null,
                    isLightning: false,
                })
            },
            removeTalk(talk) {
                this.$store.commit(types.REMOVE_TALK, talk)
            },
            updateTalk(talk) {
                this.$store.commit(types.UPDATE_TALK, talk)
            },
            setCurrentTalk(index) {
                this.$store.dispatch(types.ACTION_SET_CURRENT_TALK, index);
            }

        }
    }
</script>

<style>
    .md-dialog {
        width: 80% !important;
    }
</style>
