<template>
  <div>
    <div class="mx-auto" max-width="500" tile>
      <v-list>
        <v-list-item-group>
          <v-list-item v-for="(item, i) in list" :key="i">
            <v-list-item-content>
              <v-list-item-title>
                <router-link :to="/book/ + item.id">
                  {{ item.title }}
                </router-link>
              </v-list-item-title>
            </v-list-item-content>
            <v-list-item-icon v-if="close" @click="onDelete(item.id)">
              ❌
            </v-list-item-icon>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: [],
    onDelete: {
      default() {},
    },
    delete: Boolean,
  },
  data() {
    return {
      close: this.delete,
    };
  },
};
</script>