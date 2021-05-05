<template>
  <div>
    <div>Provide person: {{ person }}</div>
    <div>
      <el-button @click="changeName">Change name</el-button>
    </div>
    <InjectDemo />
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'vue-property-decorator'
import InjectDemo from './InjectDemo.vue'

@Component({
  components: { InjectDemo }
})
export default class ProvideDemo extends Vue {
  person = {
    name: 'suzhen'
  }

  changeName() {
    this.person.name = this.person.name === 'suzhen' ? 'moon' : 'suzhen'
  }

  // @Provide() private man = this.person
  @Provide('man') readonly man = this.person
}
</script>
