<template>
    <header>
        {{ title }}

        <div id="logo" v-if="logo">
            <img :src="logo" class="img-responsive" />
        </div>
    </header>
</template>

<script>
    export default {
        name: 'obs-header',
        props: [
            'title',
            'logo'
        ]
    }
</script>
