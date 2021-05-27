<template>
  <div class="hello">
    <div>
      <el-button :loading="pageDataLoading" @click="getMan">getMan</el-button>
    </div>
    <div>pageDataLoading:{{ pageDataLoading }}</div>
    <div>pageDataMan:{{ pageDataMan }}</div>
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
  //
  @Action('getPerson', { namespace }) getMan!: () => Promise<void>
  @State((s: AppState) => s.person.loading) pageDataLoading: boolean | undefined
  @State((s: AppState) => s.person.man) pageDataMan: Man | undefined

  handleGetMan = async () => {
    await this.getMan()
  }
}
</script>

<style scoped lang="scss">
</style>
