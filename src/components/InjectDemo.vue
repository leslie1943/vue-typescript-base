<template>
  <div>Inject man: {{ man }}</div>
</template>

<script lang="ts">
import { Component, Inject, Vue } from 'vue-property-decorator'

interface Man {
  name: string
}

@Component
export default class InjectDemo extends Vue {
  @Inject('man') man!: Man
}
</script>
