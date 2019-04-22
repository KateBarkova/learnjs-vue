<template>
  <div>
    <div class="form-group">
      <label>Имя</label>
      <input type="text" class="form-control" v-model="localUser.firstName" />
    </div>

    <div class="form-group">
      <label>Фамилия</label>
      <input type="text" class="form-control" v-model="localUser.lastName" />
    </div>

    <div class="form-group">
      <label>Возраст</label>
      <input type="text" class="form-control" v-model="localUser.age" />
    </div>

    <div class="form-group">
      <label>Компания</label>
      <input type="text" class="form-control" v-model="localUser.company" />
    </div>

    <div class="form-group">
      <label>Баланс</label>
      <input type="text" class="form-control" v-model="localUser.balance" />
    </div>

    <div class="form-group">
      <label>Телефон</label>
      <input type="text" class="form-control" v-model="localUser.phone" />
    </div>

    <div class="form-group">
      <label>Email</label>
      <input type="text" class="form-control" v-model="localUser.email" />
    </div>

    <div class="form-group">
      <label>Адрес</label>
      <input type="text" class="form-control" v-model="localUser.address" />
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
      <input type="text" class="form-control" v-model="localUser.picture" />
    </div>

    <div class="form-group">
      <label>О пользователе</label>
      <input type="textarea" class="form-control" v-model="localUser.about" />
    </div>

    <div class="form-group">
      <label>Дата регистрации</label>
      <input type="text" class="form-control" v-model="localUser.registered" />
    </div>

    <div class="form-group">
      <input type="checkbox" v-model="localUser.isActive" />
      <label>Активный пользователь</label>
    </div>

    <div class="form-group">
      <label>Уровень доступа</label>
      <select type="text" class="form-control" v-model="localUser.accessLevel">
        <option>guest</option>
        <option>user</option>
        <option>admin</option>
      </select>
    </div>
  </div>
</template>

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

<script>
export default {
  name: "UserForm",
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
