<template>
    <div id="timer">
        <div class="countdown">
            <i class="fa fa-clock-o"></i> {{ countdown }}
        </div>
        <div class="buttonset">
            <md-button v-show="!interval" class="md-icon-button md-dense" @click.native="start()">
                <i class="fa fa-play"></i>
            </md-button>
            <md-button v-show="interval" class="md-icon-button md-dense" @click.native="pause()">
                <i class="fa fa-pause"></i>
            </md-button>
            <md-button class="md-icon-button md-dense" @click.native="reset()">
                <i class="fa fa-refresh"></i>
            </md-button>

            <md-button v-show="seconds == 0" class="md-icon-button md-dense" @click.native="extended()">
                <i class="fa fa-expand"></i>
            </md-button>
        </div>

        <div v-if="isExtended" class="extended">
            <i class="fa fa-plus"></i> {{ extendedTime }}
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
                extendedSeconds: 0,
                extendedInterval: null,
                interval: null,
                isExtended: false
            }
        },
        computed: {
            countdown() {
                let date = new Date(null);
                date.setSeconds(this.seconds)
                return date.toISOString().substr(14, 5);
            },
            extendedTime() {
                let date = new Date(null);
                date.setSeconds(this.extendedSeconds)
                return date.toISOString().substr(14, 5);
            }
        },
        methods: {
            reset() {
                this.pause();
                this.seconds = this.time;
                this.isExtended = false;
                clearInterval(this.intervalExtended);

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
                this.interval = null;
            },
            startExtended() {
                this.intervalExtended = setInterval(this.updateExtended, 1000);
            },
            updateExtended() {
                this.extendSeconds++;
            },
            extended() {
                this.isExtended = true;
                this.startExtended();
            }
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
