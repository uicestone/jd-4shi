<template lang="pug">
#route(:class="routeName")
  header
    img(:src="'/images/title-' + routeName + '.png'")
  #slogan
    img(:src="'/images/slogan-' + routeName + '.png'")
  #content(v-html="content")
  #list
    ul
      li(v-for="site in sites")
        router-link(:to="`/post/${site.id}?route=${routeName}`") {{ site.title }}
</template>
<script>
import Vue from "vue";
import { getPostDetail, getPosts } from "../helpers/resource";

export default Vue.extend({
  data() {
    return {
      routeName: "",
      content: "",
      sites: [],
    };
  },
  async created() {
    this.routeName = this.$route.params.name;
    const routePost = await getPostDetail(`route-${this.routeName}`);
    this.content = routePost.content;
    this.sites = await getPosts({
      category: `route-${this.routeName}`,
      limit: -1,
    });
  },
});
</script>
>
<style lang="stylus" scoped>
#route
  display flex
  flex-direction column
  height 100vh
  &.hs
    header
      background-color #a50000
    #list ul li
      border-color #a50000
  &.fd
    header
      background-color #b18855
    #list ul li
      border-color #b18855
  &.qc
    header
      background-color #215eaa
    #slogan img
      width 200px
    #list ul li
      border-color #215eaa
header
  height 50px
  flex 0 0 50px
  display flex
  img
    width 70px
    margin auto
#slogan
  display flex
  height 70px
  flex 0 0 70
  img
    width 150px
    margin auto
#content
  padding 0 7.5%
  >>> p
    text-indent 2em
    margin 0 0 1em
    font-size 12px
    font-weight 300
    text-align justify
    line-height 2
#list
  flex 1
  overflow-y auto
  padding 0 7.5%
  ul
    li
      list-style none
      font-size 16px
      text-align center
      height 40px
      border 2px solid #ddd
      border-radius 15px
      margin-bottom 8px
      a
        display flex
        justify-content center
        align-items center
        text-decoration none
        height 100%
</style>
