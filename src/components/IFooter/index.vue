<template>
  <v-footer :fixed="fixed" app>
    <span>Ingresso Rápido Ltda. 2017</span>
  </v-footer>
</template>

<script>
export default {
  name: 'IFooter',
  data () {
    return {
      fixed: false
    }
  }
}
</script>