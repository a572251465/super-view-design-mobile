<template>
  <div class="auto-scroll full-height full-width">
    <detail-template
      v-for="(item, key) in javascriptData"
      :key="key"
      :detail-info="item"
    ></detail-template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DetailTemplate from '@/components/DetailTemplate/index.vue'
import javascriptData from '@/views/JavascriptWorld/data'

export default defineComponent({
  name: 'javascript-world',
  components: {
    DetailTemplate
  },
  setup() {
    return {
      javascriptData
    }
  }
})
</script>

<style lang="scss" scoped></style>
