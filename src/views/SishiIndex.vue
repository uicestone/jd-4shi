<template lang="pug">
#index
  header
    img(src="/images/home-header.jpg")
  #page
    section
      router-link(to="route/hs")
        img(src="/images/route-hs.png")
    section
      router-link(to="route/fd")
        img(src="/images/route-fd.png")
    section
      router-link(to="route/qc")
        img(src="/images/route-qc.png")
  footer
    p 嘉定区委“四史”教育学习领导小组办公室
    p 二〇二〇年六月
</template>
<style lang="stylus" scoped>
header, section
  img
    width 100%
  p
    margin 0
    font-size 16px
    text-align center
    margin-top -10px
    font-weight bold
    color #c30d23
    margin-bottom 10px
section
  margin 0 7.5%
  line-height 0
  margin-bottom 10px
#page
  margin-bottom 60px
footer
  background url('/images/home-footer.jpg') center
  position fixed
  bottom 0
  height 75px
  width 100%
  background-size cover
  display flex
  flex-direction column
  justify-content center
  align-items center
  p
    color #595758
    margin 0
    font-weight bold
</style>
