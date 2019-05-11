<template>
  <div>
    <div class="form-group">
      <label>Имя</label>
      <input
        v-model="localUser.firstName"
        v-validate="'required'"
        type="text"
        :class="{ 'is-invalid': errors.has('firstName') }"
        class="form-control"
        name="firstName"
      />
      <div v-show="errors.has('firstName')" class="invalid-feedback">
        {{ errors.first("firstName") }}
      </div>
    </div>

    <div class="form-group">
      <label>Фамилия</label>
      <input
        v-model="localUser.lastName"
        type="text"
        v-validate="'required'"
        :class="{ 'is-invalid': errors.has('lastName') }"
        class="form-control"
        name="lastName"
      />
      <div v-show="errors.has('lastName')" class="invalid-feedback">
        {{ errors.first("lastName") }}
      </div>
    </div>

    <div class="form-group">
      <label>Возраст</label>
      <input v-model="localUser.age" type="number" class="form-control" />
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
      <input v-model="localUser.phone" type="phone" class="form-control" />
    </div>

    <div class="form-group">
      <label>Email</label>
      <input
        v-model="localUser.email"
        type="email"
        v-validate="'required'"
        :class="{ 'is-invalid': errors.has('email') }"
        class="form-control"
        name="email"
      />
      <div v-show="errors.has('email')" class="invalid-feedback">
        {{ errors.first("email") }}
      </div>
    </div>

    <div class="form-group">
      <label>Адрес</label>
      <input v-model="localUser.address" type="text" class="form-control" />
    </div>

    <avatar-uploader v-model="localUser.picture" />

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
  inject: ["$validator"],
  components: {
    Datepicker: () => import("@/components/Datepicker.vue"),
    AvatarUploader: () => import("@/components/AvatarUploader")
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

