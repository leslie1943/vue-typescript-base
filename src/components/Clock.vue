<template>
  <div style="color: #42b983">{{ currentTime }}</div>
</template>

<script lang="ts">
import Vue from 'vue'
import dayjs from 'dayjs'
import { Component /** Emit */ } from 'vue-property-decorator'

@Component
export default class Clock extends Vue {
  // 定义 data
  currentTime = ''
  bundle = 0

  // 初始化时候执行 interval event
  created() {
    this.bundle = setInterval(() => {
      this.currentTime = dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss')
    }, 1000)
  }

  beforeDestroy() {
    clearInterval(this.bundle)
  }
}
</script>
