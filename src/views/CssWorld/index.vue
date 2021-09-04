<template>
  <div class="css-world full-height full-width">
    <detail-template
      v-for="(item, key) in cssData"
      :key="key"
      :detail-info="item"
    ></detail-template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DetailTemplate from '@/components/DetailTemplate/index.vue'
import cssData from '@/views/CssWorld/data'

export default defineComponent({
  name: 'css-world',
  components: {
    DetailTemplate
  },
  setup() {
    return {
      cssData
    }
  }
})
</script>

<style lang="scss" scoped></style>
