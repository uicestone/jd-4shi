<template lang="pug">
#route
  header(:class="routeName")
    img(:src="'/images/title-'+routeName+'.png'")
  #slogan
    img(:src="'/images/slogan-'+routeName+'.png'")
  #content(v-html="content")
  #list
    ul(:class="routeName")
      li(v-for="site in sites") {{ site.title }}
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
    this.sites = await getPosts({ category: `route-${this.routeName}` });
  },
});
</script>
>
<style lang="stylus" scoped>
header
  height: 50px;
  display: flex;
  &.hs
    background-color #a50000
  &.fd
    background-color #b18855
  &.qc
    background-color #215eaa
  img
    width 70px
    margin auto
#slogan
  display flex
  height 70px
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
  padding 0 7.5%
  ul
    margin: 0;
    padding: 0;
    li
      list-style none
      font-size 16px
      text-align center
      height 40px
      border 2px solid #ddd
      border-radius 15px
      display flex
      justify-content center
      align-items center
      color #3e3a39
    &.hs li
      border-color #a50000
    &.fd li
      border-color #b18855
    &.qc li
      border-color #215eaa
</style>
