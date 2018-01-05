<template>
  <v-container>
    <i-label-title>Principais Eventos</i-label-title>
    <v-carousel class="carousel-banners">
      <v-carousel-item src="/static/events/rockinrio.jpg"></v-carousel-item>
      <v-carousel-item src="/static/events/lolla.jpg"></v-carousel-item>
      <v-carousel-item src="/static/events/rev.jpg"></v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script>
export default {
  name: 'p-banners'
}
</script>

<style scoped>
  .carousel-banners {
    height: 350px;
  }
</style>
