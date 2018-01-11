<template>
  <div>
    <i-events-container title="As Pessoas Estão Falando!">
      <i-event-card :src="images.lollaImg"></i-event-card>
      <i-event-card :src="images.lollaImg"></i-event-card>
      <i-event-card :src="images.lollaImg"></i-event-card>
      <i-event-card :src="images.lollaImg"></i-event-card>
      <i-event-card :src="images.lollaImg"></i-event-card>
    </i-events-container>

    <i-events-container title="Carnaval 2018">
      <i-event-card :src="images.rockImg"></i-event-card>
      <i-event-card :src="images.rockImg"></i-event-card>
      <i-event-card :src="images.rockImg"></i-event-card>
      <i-event-card :src="images.rockImg"></i-event-card>
      <i-event-card :src="images.rockImg"></i-event-card>
    </i-events-container>

    <i-events-container title="Teatro!">
      <i-event-card :src="images.revImg"></i-event-card>
      <i-event-card :src="images.revImg"></i-event-card>
      <i-event-card :src="images.revImg"></i-event-card>
      <i-event-card :src="images.revImg"></i-event-card>
      <i-event-card :src="images.revImg"></i-event-card>
    </i-events-container>
  </div>
</template>

<script>
export default {
  name: 'SEvents',
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

