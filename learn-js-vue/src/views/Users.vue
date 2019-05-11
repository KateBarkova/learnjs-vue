<template>
  <div>
    <h3>Список пользователей</h3>
    <user-list/>
  </div>
</template>

<script>
export default {
  name: "UserPage",
  components: {
    UserList: () => import("@/components/UserList.vue")
  },
}
</script>
