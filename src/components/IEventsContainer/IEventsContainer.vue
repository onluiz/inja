<template>
  <v-container fluid>
    <v-layout column>
      <i-label-title>{{title}}</i-label-title>
      <v-flex class="events-container">
        <slot></slot>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'IEventsContainer',
  props: {
    title: {
      type: String
    }
  }
}
</script>
