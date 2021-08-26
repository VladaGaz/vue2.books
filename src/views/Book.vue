
<template>
  <v-card max-width="374" class="book">
    <v-img
      height="250"
      alt="https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ANo-Image-Placeholder.svg&psig=AOvVaw2yF5naXG1C4OcK2Jl__h8m&ust=1628156058857000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOjE742Il_ICFQAAAAAdAAAAABAI"
      :src="book.image"
    ></v-img>
    <v-card-title>{{ book.title }}</v-card-title>
    <v-card-text>
      <v-row align="center">
        <v-rating length="5" size="18" :value="book.rating"></v-rating>
      </v-row>

      <div class="mt">
        {{ book.description }}
      </div>
    </v-card-text>
    <v-divider class="mx-4"></v-divider>
    <v-card-actions>
      <v-btn color="deep-purple lighten-2" @click="addFavorites" rounded>
        Add in favorites
      </v-btn>
      <v-snackbar v-model="snackbar" :multi-line="multiLine">
        {{ text }}
        <template v-slot:action="{ attrs }">
          <v-btn text v-bind="attrs" @click="snackbar = false"> Close </v-btn>
        </template>
      </v-snackbar>
    </v-card-actions>
  </v-card>
</template>

<script>
import store from "@/store/index.js";

export default {
  data() {
    return {
      book: null,
      multiLine: true,
      snackbar: false,
      text: `Book added to favorites list`,
    };
  },
  created() {
    const id = this.$route.params.id;
    this.book = this.$store.getters.getBook(id);
  },
  methods: {
    addFavorites() {
      this.snackbar = true;
      store.commit("addFavorites", this.book);
    },
  },
};
</script>

<style>
.book {
  margin-right: 50%;
}
.mt {
  margin-top: 13px;
}
</style>