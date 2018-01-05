<template>
  <v-card class="event-card">
    <v-card-media :src="src" class="event-card-media"></v-card-media>
  </v-card>
</template>

<script>
export default {
  name: 'i-event-card',
  props: {
    src: {
      type: String
    }
  }
}
</script>

<style scoped>
  .event-card {
    /* display: flex; */
    flex: 0 0 auto;
    justify-content: center;
    align-items: center;
    height: 100% !important;
    width: 250px;
    margin-left: 5px; 
    background-color: purple;
  }

  .event-card-media {
    height: 100% !important;
  }
</style>
