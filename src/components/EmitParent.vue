<template>
  <div class="wrapper">
    <el-button @click="doSometh('button parameters')">doSometh</el-button>
    <el-button @click="resetCount(1943)">Reset</el-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Emit } from 'vue-property-decorator'
@Component
export default class EmitParent extends Vue {
  count = 10

  mounted() {
    this.$on('do-someth', function (val: string) {
      console.info('$on do-someth', val) // 🎃 输出: $on do-someth button parameters
    })

    this.$on('reset', function (num: number) {
      console.info('$on reset', num) // 🎃 输出: $on reset 1943
    })
  }

  /**
   * 🎃 点击按钮后,先触发 doSometh 方法本身
   * 🎃 再触发 this.$emit('emit-todo) 这个监听
   */

  // 🎃@Emit() 不带参数的话,相当于执行接跟着的方法的 小写形式, this.$emit('do-someth')
  @Emit()
  doSometh(val: string) {
    console.info('doSometh func', val) // 🎃 输出: doSometh func button parameters
  }

  // 🎃 如果是带参数的 @Emit('reset'): 相当于执行完 resetCount后执行 this.$emit('reset')
  @Emit('reset')
  resetCount(num: number) {
    console.info('num in resetCount', num) // 🎃 num in resetCount 1943
    this.count = 0
  }
}
</script>
