<template>
    <footer>
        {{ speaker }} - {{ title }}
    </footer>
</template>

<script>
    export default {
        name: 'obs-footer',
        props: [
            'speaker',
            'title'
        ]
    }
</script>
