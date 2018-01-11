<template>
  <v-card class="event-card">
    <v-card-media :src="src" class="event__card-media"></v-card-media>
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