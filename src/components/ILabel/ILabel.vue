<template>
  <div><v-icon>{{icon}}</v-icon><slot></slot></div>
</template>

<script>
export default {
  name: 'i-label',
  props: {
      icon: {
          type: String
      }
  }
}
</script>