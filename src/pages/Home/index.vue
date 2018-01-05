<template>
  <v-layout column>
    <p-banners />
    <p-events />
  </v-layout>
</template>

<script>
import PCategories from './sections/PCategories'
import PBanners from './sections/PBanners'
import PMoreEvents from './sections/PMoreEvents'
import PEvents from './sections/PEvents'
export default {
  name: 'Home',
  components: {
    PCategories,
    PBanners,
    PMoreEvents,
    PEvents
  }
}
</script>
