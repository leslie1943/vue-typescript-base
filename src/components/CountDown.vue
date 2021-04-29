<template>
  <div>
    {{ leftSeconds }}
    <div style="color: #42b983">{{ showTime }}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop /** Emit */ } from 'vue-property-decorator'

@Component
export default class Clock extends Vue {
  @Prop() private endDate!: string

  // 设置显示时间
  get showTime() {
    if (this.leftSeconds <= 0) {
      return '已结束'
    } else {
      const day = Math.floor(this.leftSeconds / 86400)
      const hour = Math.floor((this.leftSeconds % 86400) / 3600)
      const min = Math.floor(((this.leftSeconds % 86400) % 3600) / 60)
      const sec = Math.floor(((this.leftSeconds % 86400) % 3600) % 60)
      return (
        day +
        '天  ' +
        (hour < 10 ? '0' : '') +
        hour +
        ': ' +
        (min < 10 ? '0' : '') +
        min +
        ': ' +
        (sec < 10 ? '0' : '') +
        sec
      )
    }
  }

  // 定义 data
  leftSeconds = 0
  bundle = 0

  // 初始化剩余秒数
  getLeftSeconds() {
    const currentDate = new Date()
    const endDateArray = this.endDate.split(/[- : /]/)
    const newEndDate = new Date(
      parseInt(endDateArray[0]),
      parseInt(endDateArray[1]) - 1,
      parseInt(endDateArray[2]),
      parseInt(endDateArray[3]),
      parseInt(endDateArray[4]),
      parseInt(endDateArray[5])
    )

    if (newEndDate > currentDate) {
      this.leftSeconds = Math.floor(
        (newEndDate.getTime() - currentDate.getTime()) / 1000
      )
    } else {
      this.leftSeconds = 0
    }
  }

  // 间隔事件
  intervalEvent() {
    if (this.leftSeconds > 0) {
      this.leftSeconds--
    } else {
      this.leftSeconds = 0
      clearInterval(this.bundle)
    }
  }

  // 初始化时候执行计算剩余 seconds
  created() {
    // 传入时间和当前时间比较: 获取剩余的秒数
    this.getLeftSeconds()
  }

  mounted() {
    this.bundle = setInterval(() => {
      // interval 事件执行的方法: 剩余秒数自减直到为0,并清空事件
      // 显示文字: computed的属性根据剩余秒数计算得出
      this.intervalEvent()
    }, 1000)
  }

  beforeDestroy() {
    clearInterval(this.bundle)
  }
}
</script>
