<template>
  <aside class="blogger-wrapper card-box">
    <div class="avatar">
      <div class="blogger-top"></div>
      <img
        :src="blogger.avatar"
        alt="头像"
        title="我是一名勇敢的船长"
      />
    </div>
    <div class="blogger">
      <span class="name">{{blogger.name}}</span>
      <span class="slogan">{{blogger.slogan}}</span>
    </div>
    <div
      class="icons"
      v-if="social && social.icons && social.icons.length"
    >
      <a
        v-for="(item, index) in social.icons"
        :key="index"
        :href="item.link"
        :title="item.title"
        :class="['iconfont', item.iconClass]"
        :style="{width: 100/social.icons.length + '%'}"
        target="_blank"
      />
    </div>
  </aside>
</template>

<script>
export default {
  computed: {
    blogger () {
      return this.$themeConfig.blogger
    },
    social () {
      return this.$themeConfig.social
    }
  }
}
</script>

<style lang='stylus'>
.blogger-wrapper
  position relative
  height auto
  display inline-table
  padding-top 0!important
  overflow hidden
  .avatar
    width 100%
    // height 235px
    overflow hidden
    .blogger-top
      background url("https://cdn.jsdelivr.net/gh/MssText/learn@master/images/BrightonSnow_ZH-CN0309526170_1920x1080.58fhvngy1ww0.jpg")
      background-size:100%,100%;
      width 100%
      height 120px
    @media (max-width 900px)
      // width 205px
      // height 205px
    img
      position absolute
      display: block;
      width: 120px;
      height: 120px;
      margin-left: -68px
      border: 8px solid #fff;
      border-radius: 50%;
      top 50px
      left 50%
  .icons
    // border 1px solid var(--borderColor)
    border-top none
    height 35px
    line-height 35px
    a
      font-size 20px
      width 33%
      color var(--textColor)
      display block
      float left
      text-align center
      opacity 0.8
      &:hover
        color var(--accentColor)
  .blogger
    margin 4rem 0 0.4rem 0
    text-align center
    .name
      font-size 1.3rem
      display block
      margin-bottom 6px
    .slogan
      color var(--textColor)
</style>
