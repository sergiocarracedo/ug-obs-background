<template>
    <aside>

        <obs-lightning v-if="isLightning"></obs-lightning>
    </aside>
</template>

<script>
    export default {
        name: 'obs-aside',
        props: [
            'isLightning',
        ]
    }
</script>
