<template>
  <div :class="themeClass">
    <div class="header">
      <span @click="openThemeHandle"
        ><van-icon name="setting-o" size=".6rem"
      /></span>
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

    <van-popup
      v-model:show="themeVisible"
      position="bottom"
      :style="{ height: '15%' }"
    >
      <ul class="theme-popup">
        <li
          v-for="item in themeColors"
          :key="item.color"
          @click="selectThemeHandle(item.label)"
          :class="[item.label === activeThemeColor ? 'active' : '']"
          :style="{ background: item.color }"
        ></li>
      </ul>
    </van-popup>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  computed,
  onMounted,
  reactive,
  toRefs
} from 'vue'
import { Notify } from 'vant'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { INavDetail } from '@/store/modules/navInfo'
import { SETTING_THEME_COLOR } from '@/store/modules/themeInfo/method-types'

export default defineComponent({
  name: 'header',
  setup() {
    const store = useStore()
    const { navDetail } = store.state.navInfo as INavDetail
    const classifyVisible = ref<boolean>(false)
    const themeVisible = ref<boolean>(false)
    const selectedValue = ref<string>('')
    const router = useRouter()
    const state = reactive({
      themeColors: [
        { color: '#100c2a', label: 'black' },
        { color: 'red', label: 'red' },
        { color: 'green', label: 'green' },
        { color: 'blue', label: 'blue' },
        { color: 'orange', label: 'orange' },
        { color: 'purple', label: 'purple' }
      ]
    })
    const activeThemeColor = computed<string>(
      () => store.state.themeInfo.themeColor as string
    )
    const themeClass = computed<string>(() => `theme-${activeThemeColor.value}`)
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

    const openThemeHandle = () => {
      Notify({ type: 'success', message: '切换主题, 点击朦层关闭' })
      themeVisible.value = true
    }

    const selectThemeHandle = (color: string) => {
      store.dispatch(`themeInfo/${SETTING_THEME_COLOR}`, color)
      themeVisible.value = false
    }

    onMounted(() => {
      selectedValue.value = navDetail[0].value
      selectHandle(navDetail[0])
    })

    return {
      ...toRefs(state),
      navDetail,
      classifyVisible,
      switchClassify,
      selectHandle,
      selecteddLabel,
      themeVisible,
      openThemeHandle,
      activeThemeColor,
      selectThemeHandle,
      themeClass
    }
  }
})
</script>

<style lang="scss" scoped>
.theme-popup {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;

  li {
    width: 50px;
    height: 50px;
  }

  .active {
    border: 10px solid yellow;
  }
}
.header {
  width: 100%;
  height: 100px;
  @include themeColor {
    background: get-Theme(background);
  }
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
