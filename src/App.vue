<template>
  <div id="app">
    <header class="is-hidden-tablet">
        <router-link :to="{name: 'front'}"><img src="./assets/logo.png" alt="Vue.js PWA"></router-link>
    </header>
    <main>
        <div class="left-sidebar is-hidden-mobile">
            <router-link :to="{name: 'front'}"><img src="./assets/logo.png" alt="Vue.js PWA"></router-link>
            <menu-main></menu-main>
        </div>
        <div class="center-area">
            <router-view></router-view>
        </div>
    </main>
  </div>
</template>

<script>
import MenuMain from '@/components/MenuMain.vue'
export default {
  name: 'app',
  components: {
    MenuMain
  }
}
</script>

<style lang="scss" scoped>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
    display: flex;
    flex-direction: row;
}
.center-area{
    padding: 0 10px;
    padding: 0;
    position: relative;
    left: 0;
    width: 100%;
    top:0;
    right: 0;

    @include tablet{
        left: 290px;
        width: calc(100% - 290px);
    }
}
.left-sidebar{
    position: fixed;
    width: 290px;
    top: 20px;
    padding: auto 20px;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @include tablet{
    }
}
header {
  margin: 0;
  height: 90px;
  padding: 0 16px 0 24px;
  background-color: darken($primary, 5);
  color: darken($primary, 30);
    display: flex;
    justify-content: center;
    padding-top: 10px;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
.is-full{
    margin: 0;
    padding-left: 0;
    padding-right: 0;
    width: 100%;
    max-width: 100vw;
}
</style>
