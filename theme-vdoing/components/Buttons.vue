<template>
  <div class="buttons">
    <transition name="fade">
      <div
        title="返回顶部"
        class="button blur go-to-top iconfont icon-fanhuidingbu"
        v-show="showToTop"
        @click="scrollToTop"
      />
    </transition>
    <div
      title="去评论"
      class="button blur go-to-comment iconfont icon-pinglun"
      v-show="showCommentBut"
      @click="scrollToComment"
    />
    <div
      title="主题模式"
      class="button blur theme-mode-but iconfont icon-zhuti"
      @mouseenter="showModeBox = true"
      @mouseleave="showModeBox = false"
      @click="showModeBox = true"
    >
      <transition name="mode">
        <ul
          class="select-box"
          ref="modeBox"
          v-show="showModeBox"
          @click.stop
          @touchstart.stop
        >
          <li
            v-for="item in modeList"
            :key="item.KEY"
            class="iconfont"
            :class="[item.icon, {active: item.KEY === currentMode}]"
            @click="toggleMode(item.KEY)"
          >{{item.name}}</li>
        </ul>
      </transition>
    </div>
    <div
        title="选择主题色"
        class="button blur theme-mode-but iconfont icon-qiehuan"
        @mouseenter="showThemeColorBox = true"
        @mouseleave="showThemeColorBox = false"
        @click="showThemeColorBox = true"
    >
      <transition name="mode">
        <ul
            class="select-box"
            ref="modeBox"
            v-show="showThemeColorBox"
            @click.stop
            @touchstart.stop
        >
          <li
              v-for="item in themeColorList"
              :key="item.KEY"
              class="iconfont"
              :class="[{active: item.KEY === currentThemeColor}]"
              @click="toggleThemeColor(item.KEY)"
          >
            <sub :style="{ backgroundColor: item.color }" class="theme-select-block"></sub>
            <span>{{item.name}}</span>
          </li>
        </ul>
      </transition>
    </div>
  </div>
</template>

<script>
import debounce from 'lodash.debounce'
import storage from 'good-storage' // 本地存储
const MOBILE_DESKTOP_BREAKPOINT = 719 // refer to config.styl

export default {
  data () {
    return {
      threshold: 100,
      scrollTop: null,
      showCommentBut: false,
      commentTop: null,
      currentMode: null,
      showModeBox: false,
      currentThemeColor: null,
      showThemeColorBox: false,
      modeList: [
        {
          name: '跟随系统',
          icon: 'icon-zidong',
          KEY: 'auto'
        },
        {
          name: '浅色模式',
          icon: 'icon-rijianmoshi',
          KEY: 'light'
        },
        {
          name: '深色模式',
          icon: 'icon-yejianmoshi',
          KEY: 'dark'
        },
        {
          name: '阅读模式',
          icon: 'icon-yuedu',
          KEY: 'read'
        }
      ],
      themeColorList: [
        {
          name: '生命绿',
          icon: 'icon-zidong',
          KEY: 'green',
          color: '#3eaf7c'
        },
        {
          name: '收获黄',
          icon: 'icon-rijianmoshi',
          KEY: 'yellow',
          color: '#D59C12'
        },
        {
          name: '天空蓝',
          icon: 'icon-yejianmoshi',
          KEY: 'blue',
          color: '#3498DB'
        },
        {
          name: '激情红',
          icon: 'icon-yuedu',
          KEY: 'red',
          color: '#E74C3C'
        }
      ],
      _scrollTimer: null,
      _textareaEl: null,
      _recordScrollTop: null,
      COMMENT_SELECTOR_1: '#vuepress-plugin-comment', // 评论区元素的选择器1
      COMMENT_SELECTOR_2: '#valine-vuepress-comment', // 评论区元素的选择器2
      COMMENT_SELECTOR_3: '.vssue' // 评论区元素的选择器3
    }
  },
  mounted () {
    this.currentMode = storage.get('mode') || 'auto'

    this.scrollTop = this.getScrollTop()
    window.addEventListener('scroll', debounce(() => {
      this.scrollTop = this.getScrollTop()
    }, 100))

    window.addEventListener('load', () => {
      this.getCommentTop()
    })

    // 小屏时选择主题模式后关闭选择框
    if (document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT) {
      const modeBox = this.$refs.modeBox
      modeBox.onclick = () => {
        this.showModeBox = false
      }
      window.addEventListener('scroll', debounce(() => {
        if (this.showModeBox) {
          this.showModeBox = false
        }
      }, 100))
    }


    // 移动端对类似:hover效果的处理
    const buttons = document.querySelectorAll('.buttons .button')
    for (let i = 0; i < buttons.length; i++) {
      const button = buttons[i]
      button.addEventListener('touchstart', function () {
        button.classList.add('hover')
      })
      button.addEventListener('touchend', function () {
        setTimeout(() => {
          button.classList.remove('hover')
        }, 150)
      })
    }

  },
  computed: {
    showToTop () {
      return this.scrollTop > this.threshold
    }
  },
  methods: {
    toggleThemeColor (key) {
      // const appId = document.querySelector('#app')
      this.currentThemeColor = key
      this.$emit('toggle-theme-color', key)
      // appId.className = 'theme-mode-' + key
    },
    toggleMode (key) {
      this.currentMode = key
      this.$emit('toggle-theme-mode', key)
    },
    getScrollTop () {
      return window.pageYOffset
        || document.documentElement.scrollTop
        || document.body.scrollTop || 0
    },

    scrollToTop () {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      this.scrollTop = 0
    },

    getCommentTop () {
      setTimeout(() => {
        let commentEl = document.querySelector(this.COMMENT_SELECTOR_1) || document.querySelector(this.COMMENT_SELECTOR_2) || document.querySelector(this.COMMENT_SELECTOR_3)
        if (commentEl) {
          this.showCommentBut = this.$frontmatter.comment !== false && this.$frontmatter.home !== true
          this.commentTop = commentEl.offsetTop - 58
        }
      }, 500)
    },


    scrollToComment () {
      window.scrollTo({ top: this.commentTop, behavior: 'smooth' })
      this._textareaEl = document.querySelector(this.COMMENT_SELECTOR_1 + ' textarea') || document.querySelector(this.COMMENT_SELECTOR_2 + ' input') || document.querySelector(this.COMMENT_SELECTOR_3 + ' textarea')
      if (this._textareaEl && this.getScrollTop() !== this._recordScrollTop) {
        document.addEventListener("scroll", this._handleListener)
      } else if (this._textareaEl && this.getScrollTop() === this._recordScrollTop) {
        this._handleFocus()
      }
    },

    _handleListener () {
      clearTimeout(this._scrollTimer)
      this._scrollTimer = setTimeout(() => {
        document.removeEventListener('scroll', this._handleListener)
        this._recordScrollTop = this.getScrollTop()
        this._handleFocus()
      }, 30)
    },

    _handleFocus () {
      this._textareaEl.focus()
      this._textareaEl.classList.add('yellowBorder')
      setTimeout(() => {
        this._textareaEl.classList.remove('yellowBorder')
      }, 500)
    }
  },
  watch: {
    '$route.path' () {
      this.showCommentBut = false
      this.getCommentTop()
    }
  }
}
</script>

<style lang='stylus'>
.yellowBorder
  // border: #FFE089 1px solid!important
  border-radius 5px
  box-shadow 0 0 15px #FFE089 !important
.buttons
  position fixed
  right 2rem
  bottom 2.5rem
  z-index 11
  @media (max-width $MQNarrow)
    right 1rem
    bottom 1.5rem
  .button
    width 2.2rem
    height 2.2rem
    line-height 2.2rem
    border-radius 50%
    box-shadow 0 2px 6px rgba(0, 0, 0, 0.15)
    margin-top 0.9rem
    text-align center
    cursor pointer
    transition all 0.5s
    background var(--blurBg)
    &.hover
      background var(--accentColor)
      box-shadow 0 0 15px var(--accentColor)
      &:before
        color #fff
    @media (any-hover hover)
      &:hover
        background var(--accentColor)
        box-shadow 0 0 15px var(--accentColor)
        &:before
          color #fff
    .select-box
      margin 0
      padding 0.8rem 0
      position absolute
      bottom 0rem
      right 1.5rem
      background var(--mainBg)
      border 1px solid var(--borderColor)
      width 120px
      border-radius 6px
      box-shadow 0 0 15px rgba(255, 255, 255, 0.2)
      li
        list-style none
        line-height 2rem
        font-size 0.95rem
        &:hover
          color var(--accentColor)
        &.active
          background-color rgba(150, 150, 150, 0.2)
          color var(--accentColor)
      .theme-select-block
        vertical-align: middle;
        display:inline-block;
        width: 15px;
        height: 15px;
        margin-right: 2px;
        border-radius: 2px;
.mode-enter-active, .mode-leave-active
  transition all 0.3s
.mode-enter, .mode-leave-to
  opacity 0
  transform scale(0.8)
.fade-enter-active, .fade-leave-active
  transition opacity 0.2s
.fade-enter, .fade-leave-to
  opacity 0
</style>
