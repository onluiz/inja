<template>
  <v-toolbar class="l-header c-header">
    <img src="../../assets/img/logoir.png"/>
    <div class="l-header__items c-header__items">
      <a href="#void" class="subheading o-header__item">Cinema</a>
      <a href="#void" class="subheading o-header__item">Clássicos</a>
      <a href="#void" class="subheading o-header__item">Shows</a>
      <a href="#void" class="subheading o-header__item">Futebol</a>
      <a href="#void" class="subheading o-header__item">Infantil</a>
    </div>
    <div class="c-header__actions l-header__actions">
      <v-icon class="o-header__action">search</v-icon>
      <v-icon class="o-header__action">face</v-icon>
      <v-icon class="o-header__action">shopping_cart</v-icon>
    </div>
  </v-toolbar>
</template>

<script>
export default {
  name: 'IHeader'
}
</script>