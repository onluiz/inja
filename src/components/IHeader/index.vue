<template>
  <v-toolbar class="l-header c-header">
    <div class="l-flexbox--start">
      <a href="#void">
        <img src="../../assets/img/logoir.png"/>
      </a>
    </div>
    <div class="l-header__items l-flexbox--center c-header__items">
      <a href="#void" class="l-header__item o-link subheading">Cinema</a>
      <a href="#void" class="l-header__item o-link subheading">Clássicos</a>
      <a href="#void" class="l-header__item o-link subheading">Shows</a>
      <a href="#void" class="l-header__item o-link subheading">Futebol</a>
      <a href="#void" class="l-header__item o-link subheading">Infantil</a>
    </div>
    <div class="l-flexbox--end l-header__actions">
      <a href="#void" class="o-link">
        <v-icon class="o-label l-header__action">search</v-icon>
      </a>
      <a href="#void" class="o-link">
        <v-icon class="o-label l-header__action">face</v-icon>
      </a>
      <a href="#void" class="o-link">
        <v-icon class="o-label l-header__action">shopping_cart</v-icon>
      </a>
    </div>
  </v-toolbar>
</template>

<script>
export default {
  name: 'IHeader'
}
</script>