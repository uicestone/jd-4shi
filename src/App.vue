<template>
  <keep-alive>
    <router-view :key="$route.fullPath" />
  </keep-alive>
</template>

<style lang="stylus">
body
  margin 0
  padding 0
  background #f9fbfb
  color #3e3a39
  font-size 14px
ul
  margin 0
  padding 0
  li
    list-style none
a
  color inherit
  text-decoration none
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
#nav
  padding 30px
#nav a
  font-weight bold
  color #2c3e50
#nav a.router-link-exact-active
  color #42b983
</style>
