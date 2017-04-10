<template>
    <md-dialog ref="settingsDialog" @close="onClose" width="90%">
        <md-dialog-title>Configuración</md-dialog-title>

        <md-dialog-content>

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

            <hr/>


            <h3>Charlas</h3>

            <md-button class="md-fab md-fab-top-right md-dense" @click.native="addTalk()">
                <i class="fa fa-plus"></i>
            </md-button>
            <settings-talk v-for="talk in settings.talks"></settings-talk>
        </md-dialog-content>

        <md-dialog-actions>
            <md-button class="md-primary" @click.native="close()">Cancelar</md-button>
            <md-button class="md-primary md-raised" @click.native="save()">Guardar</md-button>
        </md-dialog-actions>
    </md-dialog>
</template>

<script>
    import * as types from '../../vuex/mutation-types'
    export default {
        name: 'settings-dialog',
        props: ['ugList'],
        data() {
            return {
                settings: {
                    ug: null,
                    meetup: {},
                    talks: []
                }
            }
        },
        computed: {
            dialogVisibility() {
                return this.$store.state.settings.dialog;
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
            this.settings.ug = this.$store.state.settings.ug;
            this.settings.meetup = this.$store.state.settings.meetup;
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
                this.$store.commit(types.CLOSE_SETTINGS_DIALOG)
            },
            save()
            {
                this.$store.commit(types.SET_UG, this.settings.ug);
                this.$store.commit(types.SET_MEETUP, this.settings.meetup);
                this.$store.dispatch(types.SAVE_SETTINGS);


                this.close();
            },
            addTalk() {
                this.settings.talks.push({
                    title: null,
                    speaker: null,
                    isLightning: false,
                })
            }

        }
    }
</script>

<style>
    .md-dialog {
        width: 80% !important;
    }
</style>