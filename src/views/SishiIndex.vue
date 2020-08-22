<template lang="pug">
#index
  header
    img(src="/images/home-header.jpg")
    p 党史·新中国史·改革开放史·社会主义发展史
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
    img(src="/images/home-footer.jpg")
</template>
<style lang="stylus" scoped>
header, section, footer
  img
    width 100%
  p
    margin 0
    font-size 16px
    text-align center
    margin-top -20px
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
  position fixed
  bottom 0
  line-height 0
</style>
