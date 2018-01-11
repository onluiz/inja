<template>
  <v-container>
    <i-label-title>Principais Eventos</i-label-title>
    <v-carousel class="c-carousel-banners">
      <v-carousel-item :src="images.rockImg"></v-carousel-item>
      <v-carousel-item :src="images.lollaImg"></v-carousel-item>
      <v-carousel-item :src="images.revImg"></v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script>
export default {
  name: 'SBanners',
  data () {
    return {
      images: {
        rockImg: 'https://onluiz.github.io/inja/static/img/events/rockinrio.jpg',
        lollaImg: 'https://onluiz.github.io/inja/static/img/events/lolla.jpg',
        revImg: 'https://onluiz.github.io/inja/static/img/events/rev.jpg'
      }
    }
  }
}
</script>

<style scoped>
  .c-carousel-banners {
    height: 350px;
  }
</style>
