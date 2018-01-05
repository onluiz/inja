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
  name: 'i-events-container',
  props: {
    title: {
      type: String
    }
  }
}
</script>

<style scoped>
  .events-container {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    overflow: auto;
    flex: 0 0 auto;
    height: 150px;
  }

  .events-container::-webkit-scrollbar {
    width: 1px;
    height: 10px;
  }
  
  .events-container::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  }
  
  .events-container::-webkit-scrollbar-thumb {
    background-color: #0d5e93;
    outline: 1px solid slategrey;
  }
</style>
