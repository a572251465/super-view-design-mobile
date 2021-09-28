<template>
  <div class="vue-world auto-scroll full-height full-width">
    <detail-template
      v-for="(item, key) in vueData"
      :key="key"
      :detail-info="item"
    ></detail-template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DetailTemplate from '@/components/DetailTemplate/index.vue'
import vueData from '@/views/VueWorld/data'

export default defineComponent({
  name: 'css-world',
  components: {
    DetailTemplate
  },
  setup() {
    return {
      vueData
    }
  }
})
</script>

<style lang="scss" scoped></style>
