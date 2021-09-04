<template>
  <div class="home">
    <Header></Header>
    <div class="container">
      <router-view name="main"></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '@/components/Header/index.vue'

export default defineComponent({
  name: 'home',
  components: {
    Header
  }
})
</script>

<style lang="scss" scoped>
.home {
  width: 100vw;
  height: 100vh;
  background: $bk;
}

.container {
  width: 100%;
  height: calc(100% - 120px);
  background: $bk;
  position: fixed;
  top: 120px;
  left: 0px;
  bottom: 0px;
}
</style>
