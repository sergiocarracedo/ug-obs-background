<template>
    <md-dialog ref="aboutDialog" @close="onClose" width="60%">
        <md-dialog-content>
            /**<br />
            *<br />
            * This file is part of ug-obs-background project<br />
            * ug-obs-background is free software: you can redistribute it and/or modify it under<br />
            * the terms of the GNU Lesser General Public License as published by the Free<br />
            * Software Foundation, either version 3 of the License, or (at your option)<br />
            * any later version.<br />
            * ug-obs-background is distributed in the hope that it will be useful, but WITHOUT ANY<br />
            * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS<br />
            * FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for<br />
            * more details.<br />
            *
            * You should have received a copy of the GNU Lesser General Public License<br />
            * along with ug-obs-background. If not, see &lt;http://www.gnu.org/licenses/&gt;.<br />
            *<br />
            * @author      Sergio Carracedo Martinez &lt;info@sergiocarracedo.es&gt;<br />
            * @copyright   2017 Sergio Carracedo Martinez<br />
            * @license     http://www.gnu.org/licenses/lgpl-3.0.txt GNU LGPL 3.0<br />
            *<br />
            */<br />
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
        name: 'about-dialog',
        props: ['ugList'],
        data() {
            return {
                settings: {
                    ug: null,
                    meetup: {},
                },

            }
        },
        computed: {
            dialogVisibility() {
                return this.$store.state.about.dialog;
            },
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
        methods: {
            open()
            {
                this.$refs['aboutDialog'].open();
            }
            ,
            close()
            {
                this.$refs['aboutDialog'].close();
            },
            onClose() {
                this.$store.commit(types.CLOSE_ABOUT_DIALOG)

            },
        }
    }
</script>

<style>
    .md-dialog {
        width: 80% !important;
    }
</style>
