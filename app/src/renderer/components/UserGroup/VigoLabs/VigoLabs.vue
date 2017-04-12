<template>
    <div id="vigolabs">
        <obs-header
                :title="meetup.title"
                :logo="true"
        ></obs-header>

        <obs-aside :isLightning="currentTalk.isLightning"></obs-aside>

        <obs-footer :speaker="currentTalk.speaker" :title="currentTalk.title"></obs-footer>
        <div id="bg"></div>
    </div>
</template>

<script>
    import * as types from '../../../vuex/mutation-types'
    import UserGroup from '../UserGroup';
    export default {
        name: 'vigolabs',
        mixins: [UserGroup],
    }
</script>

<style src="./assets/fonts/raleway.css" scoped></style>
<style src="./assets/css/vigolabs.css"></style>
