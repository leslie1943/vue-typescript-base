<template>
  <div>
    <input type="checkbox" :checked="toggled" @change="changeHandle" />ss
  </div>
</template>

<script>
export default {
  model: {
    // prop:'checked', // 🎃 正常是这样
    // event: 'ttt' // 名字也是随便的, 只要在 $emit('ttt')对应上就可以
    prop: 'toggled', // 声明要使用的 属性名
    event: 'change'

  },
  props: {
    // checked: Boolean, // // 🎃 正常是这样
    toggled: Boolean // 重命名 使用toggled 取代 value 这个 prop
  },
  methods: {
    changeHandle($event) {
      // 这里的 原生事件和属性依然不变
      console.info('$event.target.checked', $event.target.checked)
      this.$emit('change', $event.target.checked)
    }
  }
}
</script>
