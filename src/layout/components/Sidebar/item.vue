<script>
export default {
  name: 'MenuItem',
  // 使组件无状态 (没有 data ) 和无实例 (没有 this 上下文)。他们用一个简单的 render 函数返回虚拟节点使他们更容易渲染。
  functional: true,
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  render(h, context) {
    const {icon, title} = context.props;
    const vnode = []

    if (icon) {
      vnode.push(<svg-icon icon-class={icon}/>)
    }

    if (title) {
      if (title.length > 5) {
        vnodes.push(<span slot='title' title={(title)}>{(title)}</span>)
      } else {
        vnodes.push(<span slot='title'>{(title)}</span>)
      }
    }
    return vnodes
  }
}
</script>
