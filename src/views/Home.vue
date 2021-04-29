<template>
  <div class="home">
    <el-divider>🍀</el-divider>
    <HelloWorld msg="TypeScript" :count="1943" name="Leslie name from parent" />
    <el-divider>🍀</el-divider>
    <Count />
    <el-divider>🍀</el-divider>
    <Clock />
    <el-divider>🍀</el-divider>
    <CountDown endDate="2021-04-28 23:59:22" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import Clock from '@/components/Clock.vue' // @ is an alias to /src
import Count from '@/components/Count.vue' // @ is an alias to /src
import CountDown from '@/components/CountDown.vue' // @ is an alias to /src

import { Route, NavigationGuardNext } from 'vue-router'

@Component({
  components: {
    HelloWorld,
    Clock,
    Count,
    CountDown
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
export default class Home extends Vue {}
</script>
