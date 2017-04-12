<template>
    <footer>
        <span class="talk">{{ speaker }}</span> - <span class="speaker">{{ title }}</span>
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
