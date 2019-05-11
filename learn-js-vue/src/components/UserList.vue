<template>
  <div>
    <p>Количество пользователей - {{ getNumberOfUsers }}</p>
    <div class="form-group">
      <div class="col-md-2">
        <list-per-page v-model.number="rowsPerPage" />
      </div>
      <div class="col-md-4">
        <p class="form-control-static">
          Элементов на странице {{ rowsPerPage }}
        </p>
      </div>
    </div>
    <table class="table table-srriped">
      <thead>
        <slot name="table-header">
          <tr>
            <td>id</td>
            <td>FirstName</td>
            <td>LastName</td>
            <td>Company</td>
            <td>Email</td>
            <td>Phone</td>
            <td>Edit</td>
          </tr>
        </slot>
      </thead>
      <tr v-for="item in filteredRows" :key="item.id">
        <slot name="table-row" :item="item">
          <td>{{ item.id }}</td>
          <td>{{ item.firstName | toUpperCase(item.surname) }}</td>
          <td>{{ item.lastName | toUpperCase(item.surname) }}</td>
          <td>{{ item.company }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.phone }}</td>
          <td>
            <button type="button">
              <router-link :to="`/edit/${item.id}`">Edit user</router-link>
            </button>
          </td>
        </slot>
      </tr>
    </table>

    <pagination
      v-model.number="selectedPage"
      :per-page="rowsPerPage"
      :total="totalItems"
    />
  </div>
</template>

<script>
import axios from "@/axios.js";

export default {
  name: "UserList",
  components: {
    Pagination: () => import("@/components/Pagination.vue"),
    ListPerPage: () => import("@/components/ListPerPage.vue")
  },
  filters: {
    toUpperCase(value) {
      if (value) {
        value = value.toString();
        return value.toUpperCase();
      }
      return value;
    }
  },
  data: () => ({
    list: [],
    rowsPerPage: 5,
    selectedPage: 1,
    loading: false
  }),
  computed: {
    totalItems() {
      return this.list.length;
    },
    filteredRows() {
      return this.list.filter((item, index) => {
        const startIndex = (this.selectedPage - 1) * this.rowsPerPage;
        const finalIndex = startIndex + this.rowsPerPage;

        return startIndex <= index && index < finalIndex;
      });
    },
    getNumberOfUsers() {
      let numberOfUsers = this.list ? this.list.length : "";
      return numberOfUsers;
    },
    getUrl() {
      let url = `/users`;
      if (this.selectedPage && this.rowsPerPage) {
       url =  `${url}?_page=${this.selectedPage}&_limit=${this.rowsPerPage}`
      }
      return url
    }
  },
  watch: {
    rowsPerPage() {
      this.selectedPage = 1;
    }
  },
  created() {
    this.loadData();
  },
  methods: {
    loadData() {
      axios.get("/users").then(response => {
        this.list = response.data;
      });
      axios.get(this.getUrl).then(response => {
        console.log(response.data);
      });
    },

  }
};
</script>
