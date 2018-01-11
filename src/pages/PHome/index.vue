<template>
  <v-layout column>
    <s-banners />
    <s-events />
  </v-layout>
</template>

<script>
import SBanners from './sections/SBanners'
import SEvents from './sections/SEvents'
export default {
  name: 'PHome',
  components: {
    SBanners,
    SEvents
  }
}
</script>
