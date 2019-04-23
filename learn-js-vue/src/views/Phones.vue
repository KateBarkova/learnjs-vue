<template>
  <div>
    <h3>Телефонный справочник</h3>
    <div v-if="!items.length" class="alert alert-warning">
      Идет загрузка...
    </div>
    <user-list v-else :items="items">
      <template v-slot:table-header>
        <tr>
          <td>id</td>
          <td>FirstName</td>
          <td>LastName</td>
          <td>Phone</td>
        </tr>
      </template>
      <template v-slot:table-row="{ item }">
        <td>{{ item.id }}</td>
        <td>{{ item.firstName | toUpperCase(item.surname) }}</td>
        <td>{{ item.lastName | toUpperCase(item.surname) }}</td>
        <td>{{ item.phone }}</td>
      </template>
    </user-list>
  </div>
</template>

<script>
import axios from "@/axios.js";

export default {
  name: "PhonePage",
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
