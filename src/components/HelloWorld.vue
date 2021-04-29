<template>
  <div class="hello">
    <h4>[{{ msg }}] - [{{ count }}] - [{{ name }}]</h4>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string
  @Prop(Number) readonly count?: number | undefined
  @Prop({ default: 'suzhen' }) readonly name?: string
  @Prop([String, Boolean]) readonly isTrue?: string | boolean | undefined
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
