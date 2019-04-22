<template>
  <div>
    <h3>Список пользователей</h3>
    <p>Количество пользователей - {{ getNumberOfUsers }}</p>
    <div v-if="!items.length" class="alert alert-warning">
      Идет загрузка...
    </div>
    <user-list v-else :items="items" />
  </div>
</template>

<script>
import axios from "@/axios.js";

export default {
  name: "UserPage",
  components: {
    UserList: () => import("@/components/UserList.vue")
  },
  data: () => ({
    items: []
  }),
  computed: {
    getNumberOfUsers() {
      let numberOfUsers = this.items ? this.items.length : "";
      return numberOfUsers;
    }
  },
  watch: {
    items() {
      console.log("Данные загружены");
      console.log(this.items);
    }
  },
  created() {
    this.loadData();
  },
  methods: {
    loadData() {
      axios.get("/users").then(response => {
        this.items = response.data;
      });
    }
  }
};
</script>
