<template>
    <md-layout md-gutter>
        <md-layout md-flex="5">
            <md-radio v-model="currentTalk" name="currentTalk" :md-value="index"></md-radio>
        </md-layout>
        <md-layout md-flex="30">
            <md-input-container>
                <label>Título charla</label>
                <md-input v-model="title"></md-input>
            </md-input-container>
        </md-layout>
        <md-layout md-flex="30">
            <md-input-container>
                <label>Ponente</label>
                <md-input v-model="speaker"></md-input>
            </md-input-container>
        </md-layout>
        <md-layout md-flex="30">
            <md-switch v-model="isLightning">Lightning</md-switch>
            <md-button class="md-icon-button md-raised md-dense">
                <i class="fa fa-trash"></i>
            </md-button>
        </md-layout>
    </md-layout>
</template>


<script>
    export default {
        name: 'settings-talk',
        props: ['index'],
        data() {
            return {
                title: '',
                speaker: '',
                isLightning: false,
                currentTalk: 2
            }
        }

    }
</script>

