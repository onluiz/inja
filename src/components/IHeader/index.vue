<template>
  <v-toolbar class="l-header c-header">
    <div class="l-flexbox--start">
      <a href="#void">
        <img src="../../assets/img/logoir.png"/>
      </a>
    </div>
    <div class="l-header__items l-flexbox--center c-header__items">
      <a href="#void" class="o-header__item o-link subheading">Cinema</a>
      <a href="#void" class="subheading o-header__item">Clássicos</a>
      <a href="#void" class="subheading o-header__item">Shows</a>
      <a href="#void" class="subheading o-header__item">Futebol</a>
      <a href="#void" class="subheading o-header__item">Infantil</a>
    </div>
    <div class="l-flexbox--end c-header__actions">
      <a href="#void" class="o-link">
        <v-icon class="o-header__action">search</v-icon>
      </a>
      <a href="#void" class="o-link">
        <v-icon class="o-header__action">face</v-icon>
      </a>
      <a href="#void" class="o-link">
        <v-icon class="o-header__action">shopping_cart</v-icon>
      </a>
    </div>
  </v-toolbar>
</template>

<script>
export default {
  name: 'IHeader'
}
</script>