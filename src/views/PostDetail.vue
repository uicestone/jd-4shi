<template lang="pug">
div(:class="routeName")
  header {{ post.title }}
  #content(v-html="post.content")
</template>

<script>
import { getPostDetail } from "@/helpers/resource";

export default {
  data() {
    return { routeName: "", id: null, post: { categories: [{}] } };
  },
  async mounted() {
    this.routeName = this.$route.query.route;
    this.id = this.$route.params.id;
    this.post = await getPostDetail(this.id);
  },
};
</script>

<style lang="stylus" scoped>
header
  height 70px
  display flex
  justify-content center
  align-items center
  color white
  font-weight bold
  font-size 22px
.hs
  header
    background-color #a50000
  >>> ul
    border-color #a50000 !important
.fd header
  background-color #b18855
  >>> ul
    border-color #b18855 !important
.qc header
  background-color #215eaa
  >>> ul
    border-color #215eaa !important
#content
  padding 0 7.5%
  >>> p
    text-align justify
    text-indent 2em
    line-height 1.75
    img
      width 100%
      height auto
      margin-left -2em
  >>> ul
    line-height 2
    border-top 2px solid
    border-bottom 2px solid
    padding 5px 0
</style>
