<template>
  <div class="search">
    <v-container>
      <v-row>
        <v-col class="flex">
          <v-text-field
            v-model="search"
            placeholder="Author name/Book name"
            append-icon="mdi-magnify"
            @click:append="getBook"
            @keyup="keyupGetBook"
            @input="deleteBooks"
            outlined
          >
          </v-text-field>
        </v-col>
      </v-row>
    </v-container>
    <div>
      <bookList :list="books" />
      <div v-if="loading" class="loader">
        <v-progress-circular indeterminate color="purple"></v-progress-circular>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import bookList from "@/views/BookList.vue";
import store from "@/store/index.js";

export default {
  components: {
    bookList,
  },
  data() {
    return {
      search: "",
      loading: false,
    };
  },
  computed: {
    books: () => {
      return store.getters.allBooks;
    },
  },
  methods: {
    keyupGetBook({ code }) {
      if (code === "Enter") {
        this.getBook();
      }
    },
    async getBook() {
      this.loading = true;

      await axios
        .get(`https://www.googleapis.com/books/v1/volumes?q=${this.search}`)
        .then((res) => {
          const obj = res.data;

          if (obj.totalItems === 0) {
            this.loading = false;
            return;
          }

          const books = [];
          let link = "";

          for (let item of Object.values(obj.items)) {
            if (item.volumeInfo.imageLinks) {
              link = Object.values(item.volumeInfo.imageLinks)[0];
            }

            const book = {
              id: item.id,
              title: item.volumeInfo.title,
              image: link,
              description: item.volumeInfo.description,
              rating: item.volumeInfo.averageRating || 0,
            };

            books.push(book);
          }

          store.commit("addBooks", books);
        });

      this.loading = false;
    },
    deleteBooks() {
      store.commit("deleteBooks");
    },
  },
};
</script>

<style  scoped>
.search {
  margin-right: 35%;
  width: 500px;
}
.flex {
  display: flex;
  height: 80px;
}
.btn {
  height: 60px;
}

.v-progress-circular {
  margin: 1rem;
}
.loader {
  text-align: center;
}
</style>