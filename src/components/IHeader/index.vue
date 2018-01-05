<template>
  <v-toolbar class="toolbar">
    <img src="/static/img/logoir.png"/>
    <div class="toolbar-itens">
      <a href="#void" class="subheading toolbar-item">Cinema</a>
      <a href="#void" class="subheading toolbar-item">Clássicos</a>
      <a href="#void" class="subheading toolbar-item">Shows</a>
      <a href="#void" class="subheading toolbar-item">Futebol</a>
      <a href="#void" class="subheading toolbar-item">Infantil</a>
    </div>
    <div class="toolbar-actions">
      <v-icon class="search-icon">search</v-icon>
      <v-icon class="search-icon">face</v-icon>
      <v-icon class="search-icon">shopping_cart</v-icon>
    </div>
  </v-toolbar>
</template>

<script>
export default {
  name: 'i-header'
}
</script>

<style scoped>
  .toolbar {
    /* background-color: #2979ff !important; */
    /* color: white; */
    height: 126px;
    display: flex;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-right: 20px;
  }
  .toolbar-itens {
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
  }
  .toolbar-item {
    font-size: 72px;
    background: linear-gradient(to right, #0095da, #0d5e93);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-left: 20px;
    text-transform: uppercase;
  }
  .toolbar-actions {
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: flex-end;
    padding: 20px;
  }
  .search-icon {
    background: linear-gradient(to right, #0095da, #0d5e93);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-left: 5px;
  }
</style>
