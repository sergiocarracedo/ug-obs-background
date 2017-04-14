<template>
    <div id="obs-clock">
        <span class="date">{{ date }}</span>
        <span class="time">{{ time }}</span>
    </div>
</template>

<script>
    export default {
        name: 'obs-clock',
        data() {
            return {
                interval: null,
                date: '',
                time: ''
            }
        },
        mounted() {
            this.updateClock();
            this.interval = setInterval(this.updateClock, 5000)
        },
        beforeDestroy() {
            clearInterval(this.interval);
        },
        methods: {
            updateClock() {
                let now = new Date()
                this.date = now.toLocaleDateString('es-ES');
                this.time = now.toLocaleTimeString('es-ES', {
                    hour: '2-digit',
                    minute:'2-digit'
                });
            }
        }
    }

</script>