<template>
  <div style="text-align: left">
    <el-row>
      <el-col :span="24">person.name:{{ person.name }}</el-col>
      <el-col :span="24">person.age:{{ person.age }}</el-col>
      <el-col :span="24">person.company:{{ person.company }}</el-col>
    </el-row>
    <el-row>watch single name: {{ name }}</el-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Watch, Prop } from 'vue-property-decorator'

interface Person {
  name: string
  age: number
  company: string
}

@Component
export default class WatchDemo extends Vue {
  // 定义属性
  @Prop(String) readonly name!: string
  @Prop(Object) readonly person!: Person

  // 普通函数
  onChange() {
    console.info('onchange')
  }

  mounted() {
    console.info('watch demo normal mounted')
  }

  // watch 基本类型
  @Watch('name')
  onNameChange(newVal: string, oldVal: string) {
    console.info('watch oldVal', oldVal)
    console.info('watch newVal', newVal)
  }

  // watch 对象
  @Watch('person', { immediate: true, deep: true })
  onPeronChange(newPeron: Person, oldPerson: Person) {
    console.info('watch oldPerson', oldPerson)
    console.info('watch newPeron', newPeron)
  }
}
</script>
