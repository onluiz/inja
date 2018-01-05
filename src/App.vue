<template>
  <v-app>
    <i-header />
    <v-container>
      <router-view />
    </v-container>
    <i-footer />
  </v-app>
</template>

<script>
  import IHeader from '@/components/IHeader'
  import IFooter from '@/components/IFooter'
  export default {
    components: {
      IHeader,
      IFooter
    }
  }
</script>