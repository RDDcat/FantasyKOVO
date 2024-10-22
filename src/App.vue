<template>
  <NavigationMenu v-show="isNav" />
  <router-view />
  <FooterComponent />
</template>

<script>
import NavigationMenu from "@/components/layout/NavigationMenu.vue";
import FooterComponent from "@/components/common/FooterComponent";

export default {
  name: "App",
  components: {
    NavigationMenu,
    FooterComponent,
  },
};
</script>

<style>
#app {
  font-family: ONE-Mobile-Title;
}
</style>
