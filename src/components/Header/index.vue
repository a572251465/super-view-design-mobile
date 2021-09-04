<template>
  <div class="header">
    <span></span>
    <span>{{ selecteddLabel }}</span>
    <span @click="switchClassify">
      <van-icon name="bars" size=".7rem" />
    </span>
  </div>
  <div class="fill"></div>

  <van-action-sheet
    v-model:show="classifyVisible"
    :actions="navDetail"
    @select="selectHandle"
    cancel-text="取消"
    close-on-click-action
  />
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { INavDetail } from '@/store/modules/navInfo'

export default defineComponent({
  name: 'header',
  setup() {
    const store = useStore()
    const { navDetail } = store.state.navInfo as INavDetail
    const classifyVisible = ref<boolean>(false)
    const selectedValue = ref<string>('')
    const router = useRouter()
    const selecteddLabel = computed<string>(() => {
      if (!selectedValue.value) {
        return ''
      }
      const detail = navDetail.find(
        (item) => item.value === selectedValue.value
      )
      return detail ? detail.name : ''
    })

    const switchClassify = () => {
      classifyVisible.value = !classifyVisible.value
    }

    const selectHandle = (val: { name: string; value: string }) => {
      selectedValue.value = val.value
      router.push({ path: `/${val.value}` })
    }

    onMounted(() => {
      selectedValue.value = navDetail[0].value
      selectHandle(navDetail[0])
    })

    return {
      navDetail,
      classifyVisible,
      switchClassify,
      selectHandle,
      selecteddLabel
    }
  }
})
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 100px;
  background: $bk;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 30px;
  box-sizing: border-box;
  font-size: 40px;
  font-style: italic;
  position: fixed;
  top: 0px;
  left: 0px;
}
.fill {
  width: 100%;
  height: 20px;
  background: #fff;
  position: fixed;
  top: 100px;
  left: 0px;
}
</style>
