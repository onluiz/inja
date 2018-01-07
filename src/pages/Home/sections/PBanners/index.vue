<template>
  <v-container>
    <i-label-title>Principais Eventos</i-label-title>
    <v-carousel class="carousel-banners">
      <v-carousel-item :src="images.rockImg"></v-carousel-item>
      <v-carousel-item :src="images.lollaImg"></v-carousel-item>
      <v-carousel-item :src="images.revImg"></v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script>
import rockImg from '../../../../../static/img/events/rockinrio.jpg'
import lollaImg from '../../../../../static/img/events/lolla.jpg'
import revImg from '../../../../../static/img/events/rev.jpg'
export default {
  name: 'p-banners',
  computed: {
    images () {
      return {
        rockImg,
        lollaImg,
        revImg
      }
    }
  }
}
</script>

<style scoped>
  .carousel-banners {
    height: 350px;
  }
</style>
