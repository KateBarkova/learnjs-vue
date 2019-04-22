<template>
  <div>
    <div class="form-group">
      <label>Имя</label>
      <input v-model="localUser.firstName" type="text" class="form-control" />
    </div>

    <div class="form-group">
      <label>Фамилия</label>
      <input v-model="localUser.lastName" type="text" class="form-control" />
    </div>

    <div class="form-group">
      <label>Возраст</label>
      <input v-model="localUser.age" type="text" class="form-control" />
    </div>

    <div class="form-group">
      <label>Компания</label>
      <input v-model="localUser.company" type="text" class="form-control" />
    </div>

    <div class="form-group">
      <label>Баланс</label>
      <input v-model="localUser.balance" type="text" class="form-control" />
    </div>

    <div class="form-group">
      <label>Телефон</label>
      <input v-model="localUser.phone" type="text" class="form-control" />
    </div>

    <div class="form-group">
      <label>Email</label>
      <input v-model="localUser.email" type="text" class="form-control" />
    </div>

    <div class="form-group">
      <label>Адрес</label>
      <input v-model="localUser.address" type="text" class="form-control" />
    </div>

    <div class="form__image-container">
      <p v-if="!localUser.picture">Нет фото</p>
      <img
        v-else
        :src="localUser.picture"
        width="128px"
        height="128px"
        alt="Фото"
      />
    </div>

    <div class="form-group">
      <label>Url фото</label>
      <input v-model="localUser.picture" type="text" class="form-control" />
    </div>

    <div class="form-group">
      <label>О пользователе</label>
      <input v-model="localUser.about" type="textarea" class="form-control" />
    </div>

    <div class="form-group">
      <label>Дата регистрации</label>
      <datepicker v-model="localUser.registered" />
    </div>

    <div class="form-group">
      <input v-model="localUser.isActive" type="checkbox" />
      <label>Активный пользователь</label>
    </div>

    <div class="form-group">
      <label>Уровень доступа</label>
      <select v-model="localUser.accessLevel" type="text" class="form-control">
        <option>guest</option>
        <option>user</option>
        <option>admin</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserForm",
  components: {
    Datepicker: () => import("@/components/Datepicker.vue")
  },
  model: {
    prop: "user"
  },
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    localUser: null
  }),
  watch: {
    localUser: {
      deep: true,
      handler() {
        this.$emit("input", this.localUser);
      }
    }
  },
  created() {
    this.localUser = Object.assign({}, this.user);
  }
};
</script>

<style lang="scss">
.form__image-container {
  width: 128px;
  height: 128px;
  background-color: #828282;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
</style>
