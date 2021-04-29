<template>
  <div>
    <el-row>
      <el-button @click="add">+</el-button>
      <span style="padding: 10px">{{ count }}</span>
      <el-button @click="reduce">-</el-button>
    </el-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Emit } from 'vue-property-decorator'

@Component
export default class Clock extends Vue {
  get currentYear() {
    return new Date().getFullYear()
  }

  count = 0

  @Emit()
  add() {
    this.count++
  }

  reduce() {
    this.count--
  }
}
</script>
