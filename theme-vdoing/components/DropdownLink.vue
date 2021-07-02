<template>
  <div
    class="dropdown-wrapper"
    :class="{ open }"
  >
    <button
      class="dropdown-title"
      type="button"
      :aria-label="dropdownAriaLabel"
      @click="toggle"
    >
      <router-link
        v-if="item.link"
        :to="item.link"
        class="link-title"
      >{{ item.text }}</router-link>
      <span
        class="title"
        v-show="!item.link"
      >{{ item.text }}</span>
      <span
        class="arrow"
        :class="open ? 'down' : 'right'"
      ></span>
    </button>

    <DropdownTransition>
      <ul
        class="nav-dropdown"
        v-show="open"
      >
        <li
          class="dropdown-item"
          :key="subItem.link || index"
          v-for="(subItem, index) in item.items"
        >
          <h4 v-if="subItem.type === 'links'">{{ subItem.text }}</h4>

          <ul
            class="dropdown-subitem-wrapper"
            v-if="subItem.type === 'links'"
          >
            <li
              class="dropdown-subitem"
              :key="childSubItem.link"
              v-for="childSubItem in subItem.items"
            >
              <NavLink
                @focusout="
                  isLastItemOfArray(childSubItem, subItem.items) &&
                  isLastItemOfArray(subItem, item.items) &&
                  toggle()
                "
                :item="childSubItem"
              />
            </li>
          </ul>

          <NavLink
            v-else
            @focusout="isLastItemOfArray(subItem, item.items) && toggle()"
            :item="subItem"
          />
        </li>
      </ul>
    </DropdownTransition>
  </div>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue'
import DropdownTransition from '@theme/components/DropdownTransition.vue'
import last from 'lodash/last'

export default {
  components: { NavLink, DropdownTransition },

  data () {
    return {
      open: false,
      isMQMobile: false
    }
  },

  props: {
    item: {
      required: true
    }
  },

  computed: {
    dropdownAriaLabel () {
      return this.item.ariaLabel || this.item.text
    }
  },
  beforeMount () {
    this.isMQMobile = window.innerWidth < 720 ? true : false;

    window.addEventListener('resize', () => {
      this.isMQMobile = window.innerWidth < 720 ? true : false;
    })
  },
  methods: {
    toggle () {
      if (this.isMQMobile) {
        this.open = !this.open
      }
    },

    isLastItemOfArray (item, array) {
      return last(array) === item
    }
  },

  watch: {
    $route () {
      this.open = false
    }
  }
}
</script>

<style lang="stylus">
.dropdown-wrapper
  cursor pointer
  .dropdown-title
    display block
    font-size 0.9rem
    font-family inherit
    cursor inherit
    padding inherit
    line-height 1.4rem
    background transparent
    border none
    font-weight 500
    color var(--textColor)
    &:hover
      border-color transparent
    .arrow
      vertical-align middle
      margin-top -1px
      margin-left 0.4rem

  .nav-dropdown
    box-shadow: 2px 2px 10px rgba(0,0,0,0.15)
  .dropdown-item
      color inherit
      line-height 1.7rem
      h4
        margin 0.45rem 0 0
        border-top 1px solid var(--borderColor)
        padding 0.45rem 1.5rem 0 1.25rem
      .dropdown-subitem-wrapper
        padding 0
        list-style none
        .dropdown-subitem
          font-size 0.9em
      a
        display block
        line-height 1.7rem
        position relative
        border-bottom none
        font-weight 400
        margin-bottom 0
        padding 0 1.5rem 0 1.25rem
        &:hover
          color var(--accentColor)
        &.router-link-active
          color var(--accentColor)
          &::after
            content ''
            width 0
            height 0
            border-left 5px solid var(--accentColor)
            border-top 3px solid transparent
            border-bottom 3px solid transparent
            position absolute
            top calc(50% - 2px)
            left 9px
      &:first-child h4
        margin-top 0
        padding-top 0
        border-top 0
@media (max-width $MQMobile)
  .dropdown-wrapper
    &.open .dropdown-title
      margin-bottom 0.5rem
    .dropdown-title
      font-weight 600
      font-size inherit
      &:hover
        color var(--accentColor)
      .link-title
        display none
      .title
        display inline-block !important
    .nav-dropdown
      transition height 0.1s ease-out
      box-shadow: 2px 2px 10px transparent
      overflow hidden
      .dropdown-item
        h4
          border-top 0
          margin-top 0
          padding-top 0
        h4, & > a
          font-size 15px
          line-height 2rem
        .dropdown-subitem
          font-size 14px
          padding-left 1rem
@media (min-width $MQMobile)
  .dropdown-wrapper
    height 1.8rem
    &:hover .nav-dropdown, &.open .nav-dropdown
      // override the inline style.
      display block !important
    &.open:blur
      display none
    .dropdown-title .arrow
      // make the arrow always down at desktop
      border-left 4px solid transparent
      border-right 4px solid transparent
      border-top 6px solid $arrowBgColor
      border-bottom 0
    &:hover
      .arrow
        transform: rotate(-180deg)
        transition: all .3s
    .nav-dropdown
      display none
      // Avoid height shaked by clicking
      height auto !important
      box-sizing border-box
      max-height calc(100vh - 2.7rem)
      overflow-y auto
      position absolute
      top 100%
      right 0
      background-color var(--mainBg)
      padding 0.6rem 0
      //border 1px solid var(--borderColor)
      border-bottom-color var(--borderColor)
      text-align left
      border-radius 0.25rem
      white-space nowrap
      margin 0
  .nav-item .dropdown-title .link-title
    &.router-link-active
      margin-bottom -2px
      border-bottom 2px solid var(--accent-color-l10)
      color var(--accentColor)
    &:after
      content: "";
      width: 0;
      height: 2px;
      background: var(--accent-color-l10);
      position: absolute;
      top: 100%;
      left: 50%;
      transition: all .4s;
    &:hover:after{
      left: 0%;
      width: 100%;
    }
    &:active{
      left: 0%;
      width: 100%;
    }
  .nav-item .dropdown-title a
    position: relative;
    &:hover
      margin-bottom -2px
      // border-bottom 2px solid lighten($accentColor, 8%)
      //border-bottom 2px solid var(--accent-color-l10)
</style>
