<template>
  <div>
    <h3>Телефонный справочник</h3>
    <user-list>
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
};
</script>
