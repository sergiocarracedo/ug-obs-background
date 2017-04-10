<template>
    <div id="app-wrapper">
        <settings-dialog :ugList="ugList"></settings-dialog>
        <component
                v-bind:is="ug"
        ></component>
    </div>
</template>

<script>
    export default {
        name: 'app',
        template: '<App/>',
        computed: {
            ug() {
              return this.$store.state.settings.ug;
            }
        },
    }
</script>


