<template>
  <div class="home">
    <el-divider>🍀</el-divider>
    <HelloWorld msg="TypeScript" :count="1943" name="Leslie name from parent" />
    <el-divider>🍀</el-divider>
    <Count />
    <el-divider>🍀</el-divider>
    <Clock />
    <el-divider>🍀</el-divider>
    <CountDown endDate="2021-06-28 23:59:22" />
    <el-divider>🍀</el-divider>
    <WatchDemo :name="watchName" :person="watchPerson" />
    <el-divider>🍀</el-divider>
    <VModelDemo :toggled="parentChecked" />
    <el-divider>🍀</el-divider>
    <EmitParent @mock="handleMock" />
    <el-divider>🍀</el-divider>
    <ProvideDemo />
    <el-divider>🍀</el-divider>
    <RefDefaultDemo />
    <el-divider>🍀</el-divider>
    <RefNameDemo />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue'
import Clock from '@/components/Clock.vue'
import Count from '@/components/Count.vue'
import CountDown from '@/components/CountDown.vue'
import WatchDemo from '@/components/WatchDemo.vue'
import VModelDemo from '@/components/VModel.vue'
import EmitParent from '@/components/EmitParent.vue'
import ProvideDemo from '@/components/ProvideDemo.vue'
import RefDefaultDemo from '@/components/RefDefaultDemo.vue'
import RefNameDemo from '@/components/RefNameDemo.vue'

import { Route, NavigationGuardNext } from 'vue-router'

import { PassengerStoreModule } from '@/store/modules/passenger'

@Component({
  components: {
    HelloWorld,
    Clock,
    Count,
    CountDown,
    WatchDemo,
    VModelDemo,
    EmitParent,
    ProvideDemo,
    RefDefaultDemo,
    RefNameDemo
  },
  beforeRouteEnter(to: Route, from: Route, next: NavigationGuardNext) {
    console.info('beforeRouteEnter to.path', to.path)
    console.info('beforeRouteEnter from.path', from.path)
    console.info('Home beforeRouteEnter')
    next()
  },
  beforeRouteLeave(to: any, from: any, next: any) {
    console.info('beforeRouteLeave to.path', to.path)
    console.info('beforeRouteLeave from.path', from.path)
    console.info('Home beforeRouteLeave')
    next()
  }
})
export default class Home extends Vue {
  parentChecked = true
  watchName = 'suzhen for watching'
  watchPerson = {
    name: 'person name',
    age: 22,
    company: 'facebook'
  }

  // 父组件接收执行子组件的事件
  handleMock(val: string) {
    console.info('mock run in parent')
    console.info('handleMock', val)
  }

  mounted() {
    console.info('this.$store', this.$store)
    console.info('PassengerStoreModule', PassengerStoreModule)
    setInterval(() => {
      this.watchName = new Date().getTime() + '-' + 'suzhen watch name'
      this.watchPerson = {
        name: new Date().getTime() + '-' + 'watchPerson  name',
        age: new Date().getTime(),
        company: new Date().getTime() + '-' + 'watchPerson  company'
      }
    }, 2000)
  }
}
</script>
