<template>
  <agile>
    <div v-for="n in 6" class="slide" :class="'slide--' + n" :key="n">{{ n }}</div>
  </agile>
</template>

<script>
  export default {
    name: 'Carousel'
  }
</script>

<style lang="sass">
      
</style>