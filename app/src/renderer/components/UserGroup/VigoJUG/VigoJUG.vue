<template>
    <div id="vigojug">
        <obs-header
                :title="meetup.title"
                :logo="true"
        ></obs-header>

        <obs-aside :isLightning="currentTalk.isLightning"></obs-aside>

        <obs-footer :speaker="currentTalk.speaker" :title="currentTalk.title"></obs-footer>
    </div>
</template>

<script>
    import * as types from '../../../vuex/mutation-types'
    import UserGroup from '../UserGroup';
    export default {
        name: 'vigojug',
        mixins: [UserGroup],
    }
</script>

<style src="./assets/fonts/lato.css" scoped></style>
<style src="./assets/css/vigojug.css"></style>
