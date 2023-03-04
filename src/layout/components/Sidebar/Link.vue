<template>
  <Component :is="type" v-bind="linkProps(to)">
    <slot></slot>
  </Component>
</template>

<script>
import {isExternal} from "@/utils/validate";

export default {
  props: {
    to: {
      type: [String, Object],
      required: true
    },
  },
  computed: {
    isExternal() {
      return isExternal(this.to)
    },
    type() {
      if (this.isExternal) {
        return 'a'
      }
      return 'router-link'
    }
  },
  methods: {
    linkProps(to) {
      if (this.isExternal) {
        return {
          href: to,
          target: '_blank',
          // 该属性指定了目标对象到链接对象的关系。该值是空格分隔的列表类型值。
          rel: 'noopener'
        }
      }
      return {
        to: to
      }
    }
  }
}
</script>
