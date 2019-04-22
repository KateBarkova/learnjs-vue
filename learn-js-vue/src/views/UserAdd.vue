<template>
  <div>
    <h3>Добавить нового пользователя</h3>
    <user-form v-model="user" />
    <button type="button" @click="createUser" class="btn btn-primary">
      Сохранить
    </button>
    <button type="button" @click="exit" class="btn btn-primary">
      Вернуться без сохранения
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
  name: "UserAdd",
  props: {},
  data: () => ({
    user: {}
  }),
  components: {
    UserForm: () => import("@/components/UserForm.vue")
  },
  computed: {
    url() {
      return `/users/`;
    }
  },
  methods: {
    createUser() {
      axios
        .post(this.url, this.user)
        .then(() => {
          this.$router.push("/users");
        })
        .catch(error => {
          console.err(error);
        });
    },
    exit() {
      this.$router.push("/users");
    }
  }
};
</script>
