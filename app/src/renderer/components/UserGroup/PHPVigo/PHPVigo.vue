<template>
    <div id="phpvigo">
        <obs-header
                :title="meetup.title"
                logo=""
        ></obs-header>

        <obs-footer :speaker="speaker" :title="talk"></obs-footer>
    </div>
</template>

<script>
    import * as types from '../../../vuex/mutation-types'
    import UserGroup from '../UserGroup';
    export default {
        name: 'phpvigo',
        mixins: [UserGroup],
    }
</script>

<style src="./assets/fonts/dosis.css" scoped></style>
<style src="./assets/css/phpvigo.css" scoped></style>
