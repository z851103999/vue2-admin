export default {
  computed: {
    device() {
      return this.$store.state.app.device
    }
  },
  mounted() {
    // 为了修复在ios设备上点击菜单会触发鼠标离开错误
    this.fixBugInIOS()
  },
  methods: {
    fixBugInIOS() {
      const $subMenu = this.$refs.subMenu
      if ($subMenu) {
        const handleMouseleave = $subMenu.handleMouseleave
        $subMenu.handleMouseleave = (e) => {
          if (this.device === 'mobile') {
            return
          }
          handleMouseleave(e)
        }
      }
    }
  }
}
