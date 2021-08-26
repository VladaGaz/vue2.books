<template>
  <div class="flex">
    <div>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-navigation-drawer v-model="drawer" absolute bottom temporary>
        <v-list-item>
          <router-link title="Search" to="/">Search</router-link>
        </v-list-item>
        <v-list-item>
          <router-link title="Favorites" to="/favorites">Favorites</router-link>
        </v-list-item>
      </v-navigation-drawer>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: space-between;
}
</style>