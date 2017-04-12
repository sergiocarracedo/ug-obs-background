<template>
    <div id="timer">
        <div class="countdown">
            <i class="fa fa-clock-o"></i> {{ countdown }}
        </div>
        <div class="buttonset">
            <md-button class="md-icon-button md-dense" @click.native="start()">
                <i class="fa fa-play"></i>
            </md-button>
            <md-button class="md-icon-button md-dense" @click.native="pause()">
                <i class="fa fa-pause"></i>
            </md-button>
            <md-button class="md-icon-button md-dense" @click.native="reset()">
                <i class="fa fa-refresh"></i>
            </md-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'obs-timer',
        props: ['time'],
        data() {
            return {
                seconds: 0,
                interval: null
            }
        },
        computed: {
            countdown() {
                let date = new Date(null);
                date.setSeconds(this.seconds)
                return date.toISOString().substr(14, 5);
            }
        },
        methods: {
            reset() {
                this.pause();
                 this.seconds = this.time;

            },
            start() {
                this.interval = setInterval(this.update, 1000);
            },
            update() {
                this.seconds--;
                if (this.seconds < 0) {
                    this.seconds = 0;
                    this.pause();
                }
            },
            pause() {
                clearInterval(this.interval);
            },
        },
        mounted() {
            this.reset();
        }
    }
</script>


<style scoped>
    .countdown {
        text-align: center;
        color: #000;
        padding: 5px 10px;
        font-size: 28px
    }
    .buttonset {
        text-align: center;
    }
</style>
