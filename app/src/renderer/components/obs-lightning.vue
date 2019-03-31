<template>
  <div id="lightning">
    <div class="lightning-logo"></div>
    <obs-timer :time="time"></obs-timer>
  </div>
</template>

<script>
  import moment from 'moment';

  export default {
    name: 'obs-lightning',
    computed: {
      time() {
        let duration = moment.duration('00:' + this.$store.state.settings.lightningDuration).asSeconds()
        if (duration == undefined) {
          duration = 300;
        }
        return duration;
      }
    }
  }
</script>
