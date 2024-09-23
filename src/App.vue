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
  font-family: SBAggroB;
}
</style>
