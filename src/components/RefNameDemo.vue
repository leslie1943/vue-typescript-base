<template>
  <div>
    <el-form ref="registerFormRef" :model="form" label-width="80px">
      <el-form-item label="姓名">
        <el-input v-model="form.name"></el-input
      ></el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password"></el-input
      ></el-form-item>
    </el-form>
    <el-row>
      <el-button @click="onHandle">Get ref instance</el-button>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Form } from 'node_modules/element-ui/types'
import { Component, Ref, Vue } from 'vue-property-decorator'
@Component
export default class RefDemo extends Vue {
  @Ref('registerFormRef') readonly loginForm!: Form // 🎃 把模板上 ref="registerFormRef"的元素赋给 this.loginForm
  private form = {
    name: '',
    password: ''
  }

  public onHandle() {
    console.info('this.loginForm', this.loginForm)
    this.loginForm.validate((valid) => {
      console.info('valid', valid)
    })
  }
}
</script>

<style>
</style>
