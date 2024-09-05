<template>
  <NavigationMenu v-show="isNav" />
  <router-view />
</template>

<script>
import NavigationMenu from '@/components/layout/NavigationMenu.vue'

export default {
  name: 'App',
  components: {
    NavigationMenu,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
