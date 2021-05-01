<template>
  <div class="about">
    <h1>This is an v-model page</h1>
    <base-checkbox v-model="lovingVue" />
  </div>
</template>

<script>
import BaseCheckbox from '@/components/base-checkbox.vue'

export default {
  components: { BaseCheckbox },
  data() {
    return {
      lovingVue: true
    }
  }
}
</script>
