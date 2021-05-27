<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/stu">Student</router-link>
  </div>
  <router-view/>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 20px;
  background: #2c3e50;

  a {
    font-weight: bold;
    color: #b7c0bf;

    &.router-link-exact-active {
      color: #17c7e6;
    }
  }
}
</style>
