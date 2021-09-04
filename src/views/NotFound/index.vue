<template>
  <div class="not-found">
    <img :src="working" alt="" />
    <p>疯狂码字中 ......</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import working from '@/assets/images/working.png'

export default defineComponent({
  name: 'not-fount',
  setup() {
    return {
      working
    }
  }
})
</script>

<style lang="scss" scoped>
.not-found {
  width: 100%;
  height: 100%;

  img {
    width: 300px;
    height: 400px;
    margin: 30% auto 0px auto;
    display: block;
  }

  p {
    margin-top: 20px;
    color: red;
    font-size: 40px;
    text-align: center;
    font-weight: bold;
    font-style: italic;
  }
}
</style>
