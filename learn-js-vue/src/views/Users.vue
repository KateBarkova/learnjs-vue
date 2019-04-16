<template>
  <div>
    <h3>Список пользователей</h3>
    <p>Количество пользователей - {{ getNumberOfUsers }}</p>
    <div v-if="!items.length" class="alert alert-warning">Идет загрузка...</div>
    <user-list v-else :items="items"></user-list>
  </div>
</template>

<script>
import axios from '@/axios.js';

export default {
  name: "UserPage",
  data: () => ({
    items: []
  }),
  components: {
    UserList: () => import('@/components/UserList.vue')
  },
  computed: {
    getNumberOfUsers() {
      if (this.items) {
        return this.items.length;
      }
      return "";
    }
  },
  created() {
    this.loadData();
  },
  watch: {
    items(newValue) {
      console.log("Данные загружены");
      console.log(newValue);
    }
	},
	methods: {
    loadData() {
			axios.get('/users')
				.then(response => {
        this.items = response.data;
      })
    }
  }
};
</script>
