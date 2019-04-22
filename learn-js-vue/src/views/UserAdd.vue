<template>
  <div>
    <h3>Добавить нового пользователя</h3>
    <user-form v-model="user" />
    <button type="button" class="btn btn-primary" @click="createUser">
      Сохранить
    </button>
    <button type="button" class="btn btn-primary" @click="exit">
      Вернуться без сохранения
    </button>
  </div>
</template>

<script>
import axios from "@/axios.js";

export default {
  name: "UserAdd",
  components: {
    UserForm: () => import("@/components/UserForm.vue")
  },
  data: () => ({
    user: {},
    url: `/users/`
  }),
  methods: {
    createUser() {
      axios
        .post(this.url, this.user)
        .then(() => {
          this.$router.push("/users");
        })
        .catch(error => {
          console.error(error);
        });
    },
    exit() {
      this.$router.push("/users");
    }
  }
};
</script>

<style lang="scss" scoped>
.btn-primary {
  margin: 15px;
}
</style>
