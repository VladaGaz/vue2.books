
<template>
  <v-card max-width="700" tile class="favorites">
    <v-list flat>
      <header class="header">Favorites</header>
      <bookList
        v-if="favorites.length != 0"
        :list="favorites"
        :onDelete="deleteFavorit"
        :delete="true"
      />
      <div class="inform" v-else>No data</div>
    </v-list>
  </v-card>
</template>

<script>
import store from "@/store/index.js";
import bookList from "@/views/BookList.vue";

export default {
  components: {
    bookList,
  },
  data() {
    return {
      favorites: null,
    };
  },
  created() {
    this.favorites = this.$store.getters.getFavorites;
  },
  methods: {
    deleteFavorit(id) {
      store.commit("deleteFavorit", id);
    },
  },
};
</script>

<style>
.favorites {
  margin-right: 50%;
  width: 300px;
}
.inform {
  padding: 0 16px 0 16px;
  font-style: italic;
}
.header {
  font-size: 20px;
  text-align: center;
  font-style: italic;
  color: gray;
}
</style>