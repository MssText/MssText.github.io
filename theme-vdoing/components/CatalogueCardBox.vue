<template>
  <div>
    <section class="catalogue-card-box">
      <div class="card-cover"></div>
      <div class="card-text">
        <h1 class="card-text-title">{{ pageData.title }}</h1>
        <p v-html="pageData.description"></p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    pageData: {
      type: Object,
      default: {}
    }
  },

}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.catalogue-card-box
  position relative
  border-radius: 16px
  padding: 0rem 1.4rem 0rem
  overflow: hidden
  border-radius: 16px
  background-color: #f5f8fa
  box-shadow: 4px 4px 8px var(--theme-bg-shadow), -4px -4px 8px var(--theme-bg-high)

.card-cover
  position: absolute
  top: 0
  right: 0
  bottom: 0
  left: 0
  background-repeat: no-repeat
  background-position: center
  background-size: cover
  background-image: var(--gradientColor-l15)
  background-image: linear-gradient(135deg, var(--gradientColor-l10) 10%, var(--gradientColor-l15) 100%)
  &::after
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.3;
    background-image: linear-gradient(234deg, #394245 0%, #000 100%);
.card-text
  position relative
  color #ffffff
  font-size 22px
  font-weight bolder
  transition: color .3s ease-out
  p
    font-size 16px
</style>
