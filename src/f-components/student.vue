<template>
  <div class="hello">
    <h1>This is one of vuex usage: @Module</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Action, State } from 'vuex-class'
import { AppState } from '@/store'
import { MODULE_NAMES } from '@/store/modules/common/enum_modules'
import { Man } from '@/store/modules/person'

const namespace = MODULE_NAMES.PERSON

@Component
export default class Person extends Vue {
  // namespace: 指定 module
  // getPerson 是这个 module 下的 action
  // getMan 是映射到 组件上的方法
  @Action('getPerson', { namespace }) getMan!: () => Promise<void>

  // state是全局的 state, 可以调用到各个模块下的 state
  @State((state: AppState) => state.person.loading) pageDataLoading:
    | boolean
    | undefined

  @State((state: AppState) => state.person.man) pageDataMan: Man | undefined
  @State((state: AppState) => state.errors) errors: any

  handleGetMan = async () => {
    await this.getMan()
  }
}
</script>

<style scoped lang="scss">
</style>
