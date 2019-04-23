<template>
  <div>
    <h3>Редактирование данных пользователя {{ id }}</h3>
    <div v-if="!user" class="alert alert-warning">
      Идет загрузка данных...
    </div>
    <user-form v-else v-model="user" />
    <button type="button" class="btn btn-primary" @click="saveUser">
      Сохранить
    </button>
    <button type="button" class="btn btn-primary" @click="deleteUser">
      Удалить
    </button>
  </div>
</template>

<script>
import axios from "@/axios.js";

export default {
  name: "UserEdit",
  components: {
    UserForm: () => import("@/components/UserForm.vue")
  },
  data: () => ({
    user: null
  }),
  computed: {
    id() {
      return this.$route.params.id;
    },
    url() {
      return `/users/${this.id}`;
    }
  },
  mounted() {
    this.loadUser();
  },
  methods: {
    loadUser() {
      axios
        .get(this.url)
        .then(response => {
          this.user = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
    saveUser() {
      this.$validator.validateAll();
      if (this.errors.any()) {
        alert("Problems");
        return;
      }
      axios
        .patch(this.url, this.user)
        .then(() => {
          this.$router.push("/users");
        })
        .catch(error => {
          console.error(error);
        });
    },
    deleteUser() {
      axios
        .delete(this.url, this.user)
        .then(() => {
          this.$router.push("/users");
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.btn-primary {
  margin: 15px;
}
</style>
