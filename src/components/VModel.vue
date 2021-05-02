<template>
  <div>
    <input type="checkbox" :checked="toggled" @change="onChangeCheck" />ss
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Model, Emit } from 'vue-property-decorator'

@Component
export default class Clock extends Vue {
  // 重点在这里 🎃 toggled 取代了 value 作为默认 prop
  @Model('leslie', { type: Boolean }) toggled!: boolean

  @Emit('leslie') // 🎃 @Emit事件是定义时候的事件名称 重点在这里
  onChangeCheck() {
    console.info('onChangeCheck')
  }
}
</script>
