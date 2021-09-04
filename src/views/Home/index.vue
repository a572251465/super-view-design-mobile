<template>
  <div class="wrap" :class="themeClass">
    <div class="home">
      <Header></Header>
      <div class="container">
        <router-view name="main"></router-view>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import Header from '@/components/Header/index.vue'

export default defineComponent({
  name: 'home',
  components: {
    Header
  },
  setup() {
    const store = useStore()
    const themeClass = computed<string>(
      () => `theme-${store.state.themeInfo.themeColor}`
    )

    return {
      themeClass
    }
  }
})
</script>

<style lang="scss" scoped>
.wrap {
  width: 100vw;
  height: 100vh;
}
.home {
  width: 100vw;
  height: 100vh;
  @include themeColor {
    background: get-Theme(background);
  }
}

.container {
  width: 100%;
  height: calc(100% - 120px);
  @include themeColor {
    background: get-Theme(background);
  }
  position: fixed;
  top: 120px;
  left: 0px;
  bottom: 0px;
}
</style>
