<template>
  <div>
    <h3>Редактирование данных пользователя {{ id }}</h3>
    <div v-if="!user" class="alert alert-warning">
      Идет загрузка данных...
    </div>
    <user-form v-else v-model="user" />
    <button type="button" @click="saveUser" class="btn btn-primary">
      Сохранить
    </button>
    <button type="button" @click="deleteUser" class="btn btn-primary">
      Удалить
    </button>
  </div>
</template>

<style lang="scss" scoped>
.btn-primary {
  margin: 15px;
}
</style>

<script>
import axios from "@/axios.js";

export default {
  name: "UserEdit",
  data: () => ({
    user: null
  }),
  components: {
    UserForm: () => import("@/components/UserForm.vue")
  },
  mounted() {
    this.loadUser();
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    url() {
      return `/users/${this.id}`;
    }
  },
  methods: {
    loadUser() {
      axios
        .get(this.url)
        .then(response => {
          this.user = response.data;
        })
        .catch(error => {
          console.err(error);
        });
    },
    saveUser() {
      axios
        .patch(this.url, this.user)
        .then(() => {
          this.$router.push("/users");
        })
        .catch(error => {
          console.err(error);
        });
    },
    deleteUser() {
      axios
        .delete(this.url, this.user)
        .then(() => {
          this.$router.push("/users");
        })
        .catch(error => {
          console.err(error);
        });
    }
  }
};
</script>
