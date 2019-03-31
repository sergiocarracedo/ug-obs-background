<template>
  <header>
    {{ title }}
    <div id="logo" v-if="logo"></div>
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
