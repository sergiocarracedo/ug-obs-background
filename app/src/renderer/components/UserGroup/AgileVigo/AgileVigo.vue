<template>
    <div id="agilevigo">
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
        name: 'agilevigo',
        mixins: [UserGroup],
    }
</script>

<style src="./assets/fonts/source-sans-pro.css" scoped></style>
<style src="./assets/css/agilevigo.css"></style>
