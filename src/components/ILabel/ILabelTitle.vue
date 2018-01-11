<template>
  <h3 class="o-label title mb-3"><v-icon>{{icon}}</v-icon><slot></slot></h3>
</template>

<script>
export default {
  name: 'ILabelTitle',
  props: {
      icon: {
          type: String
      }
  }
}
</script>