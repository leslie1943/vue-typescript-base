<template>
  <div class="about">
    <h1>This is an about {{ userNumber }} users</h1>
    <h2>{{ loginInfo }}</h2>
    <h3>username: {{ username }}</h3>
    <h3>password: {{ password }}</h3>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { PassengerStoreModule, PassengerUser } from '@/store/modules/passenger'

@Component
export default class About extends Vue {
  loginInfo: PassengerUser[] = []
  userNumber = 0
  username = ''
  password = ''

  async mounted() {
    console.info('PassengerStoreModule', PassengerStoreModule)
    PassengerStoreModule.addOne()
    PassengerStoreModule.addTwo()
    console.log(PassengerStoreModule.loginInfo) // state
    console.log(PassengerStoreModule.userNumber) // getter
    PassengerStoreModule.setCompany()

    this.$nextTick(() => {
      setTimeout(() => {
        this.loginInfo = PassengerStoreModule.loginInfo
        this.userNumber = PassengerStoreModule.userNumber
        this.username = PassengerStoreModule.username
        this.password = PassengerStoreModule.password
      }, 3000)
    })
  }
}
</script>
