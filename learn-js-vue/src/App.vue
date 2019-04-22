<template>
  <div id="app">
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div id="navbarCollapse" class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <router-link
            to="/"
            tag="li"
            class="nav-item"
            active-class="active"
            exact
          >
            <a class="nav-link">Home</a>
          </router-link>
          <router-link
            to="/users"
            tag="li"
            class="nav-item"
            active-class="active"
          >
            <a class="nav-link">Users</a>
          </router-link>
          <router-link
            to="/add"
            tag="li"
            class="nav-item"
            active-class="active"
          >
            <a class="nav-link">Add users</a>
          </router-link>
        </ul>
      </div>
    </nav>

    <main role="main" class="container">
      <router-view />
    </main>
  </div>
</template>

<style lang="scss">
#app {
  margin-top: 100px;
}
</style>

<script></script>
