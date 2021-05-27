<template>
  <div class="hello">
    <div>
      <el-button :loading="pageDataLoading" @click="getMan">getMan</el-button>
    </div>
    <div>pageDataLoading:{{ pageDataLoading }}</div>
    <div>pageDataMan:{{ pageDataMan }}</div>
    <div>allState:{{ allState }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Action, State } from 'vuex-class'
import { AppState } from '@/store'
import { personModuleName } from '@/store/modules/common/modulenames'
import { Man } from '@/store/modules/person'
const namespace = personModuleName

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
  @State((state: AppState) => state) allState: any

  handleGetMan = async () => {
    await this.getMan()
  }
}
</script>

<style scoped lang="scss">
</style>
