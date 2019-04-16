<template>
  <div>
    <table class="table">
      <tr>
        <td>
          <b>id</b>
        </td>
        <td>
          <b>FirstName</b>
        </td>
        <td>
          <b>LastName</b>
        </td>
        <td>
          <b>Company</b>
        </td>
        <td>
          <b>Email</b>
        </td>
        <td>
          <b>Phone</b>
        </td>
        <td>
          <b>Edit</b>
        </td>
      </tr>
      <tr v-for="item in items" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.firstName | toUpperCase(item.surname) }}</td>
        <td>{{ item.lastName  | toUpperCase(item.surname) }}</td>
        <td>{{ item.company }}</td>
        <td>{{ item.email }}</td>
        <td>{{ item.phone }}</td>
        <td>
          <button type="button"><router-link :to="`/edit/${item.id}`">Edit user</router-link></button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "UserList",
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data: () => ({
  }),
  filters: {
    toUpperCase(value) {
      if (value) {
        value = value.toString();
        return value.toUpperCase();
      }
      return value;
    }
  },
  methods: {
 
  }
}
</script>
