<template>
  <h3 class="title mb-3"><v-icon>{{icon}}</v-icon><slot></slot></h3>
</template>

<script>
export default {
  name: 'i-label-title',
  props: {
      icon: {
          type: String
      }
  }
}
</script>

<style scoped>
  .title {
    background: linear-gradient(to right, #0095da, #0d5e93);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
</style>
