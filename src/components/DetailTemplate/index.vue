<template>
  <ul class="detail-template">
    <li
      class="detail-template-li"
      @click="skipLinkOpen"
      :class="[detailInfo.isOwn ? 'active' : '']"
      :style="{ width: computedWidth() }"
    >
      {{ detailInfo.title }}
    </li>
  </ul>

  <van-popup
    v-model:show="skipVisible"
    position="bottom"
    :style="{ height: '30%' }"
  >
    <ul class="skip-popup">
      <li v-for="item in detailInfo.children" :key="item.url">
        <span>{{ item.title }}</span>
        <span @click="choosedReadUrl(item.url)">前往👉</span>
      </li>
    </ul>
  </van-popup>

  <van-popup
    v-model:show="articleVisible"
    position="right"
    :style="{ height: '100vh', width: '100vw', background: '#fff' }"
  >
    <div class="article-container" :class="themeClass">
      <header class="article-container-header">
        <span @click="copyUrlHandle">复制地址</span>
        <span @click="articleVisible = false">关闭</span>
      </header>
      <div class="article-container-body">
        <iframe :src="readUrl" frameborder="0"></iframe>
      </div>
    </div>
  </van-popup>
  <input type="input" ref="copyInput" class="copyInput" />
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  getCurrentInstance,
  PropType,
  ref,
  watch
} from 'vue'
import { useStore } from 'vuex'
import { Toast } from 'vant'
import { IDetailTemplate } from '@/components/DetailTemplate/types'
import copyTxt from '@/assets/js/copyTxt'

export default defineComponent({
  name: 'detail-tempmlate',
  props: {
    detailInfo: {
      type: Object as PropType<IDetailTemplate>,
      required: true
    }
  },
  setup(props) {
    const store = useStore()
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const { proxy } = getCurrentInstance()!

    const skipVisible = ref<boolean>(false)
    const articleVisible = ref<boolean>(false)
    const activeThemeColor = computed<string>(
      () => store.state.themeInfo.themeColor as string
    )
    const themeClass = computed<string>(() => `theme-${activeThemeColor.value}`)
    const readUrl = ref<string>('')

    watch(articleVisible, (val) => {
      if (val) {
        Toast.loading({ message: '文章加载中...', duration: 3000 })
      }
    })

    const computedWidth = (): string => {
      const range: number[] = [60, 70, 80, 90]
      const value = range[Math.floor(Math.random() * range.length)]
      return `${value}%`
    }

    const choosedReadUrl = (url: string) => {
      articleVisible.value = true
      readUrl.value = url
      skipVisible.value = false
    }

    const skipLinkOpen = () => {
      if (props.detailInfo.children.length === 1) {
        choosedReadUrl(props.detailInfo.children[0].url)
        return
      }
      skipVisible.value = true
    }

    const copyUrlHandle = () => {
      const inputDom: HTMLInputElement = proxy?.$refs
        .copyInput as HTMLInputElement
      copyTxt(inputDom, readUrl.value)
        .then(() => {
          Toast.success('复制成功')
        })
        .catch(() => {
          Toast.fail('复制失败,为了更好的体验请更换Chrome浏览器')
        })
    }
    return {
      computedWidth,
      skipVisible,
      skipLinkOpen,
      choosedReadUrl,
      articleVisible,
      themeClass,
      readUrl,
      copyUrlHandle
    }
  }
})
</script>

<style lang="scss" scoped>
.copyInput {
  opacity: 0;
  height: 0;
}

.article-container {
  width: 100%;
  height: 100%;

  &-header {
    width: 100%;
    height: 80px;
    line-height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0px 30px;
    box-sizing: border-box;
    @include themeColor {
      background: get-Theme(background);
    }

    span {
      font-size: 30px;
      color: #fff;
      font-style: initial;
    }
  }

  &-body {
    width: 100%;
    height: calc(100% - 80px);

    iframe {
      width: 100%;
      height: 100%;
    }
  }
}
.skip-popup {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;

  li {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px dashed #ccc;
    padding: 10px 0px;

    span {
      font-size: 30px;
      color: #47a1ff;
      font-style: italic;
      text-decoration: underline;
    }
  }
}
.detail-template {
  display: flex;
  height: auto;
  width: 100%;
  align-items: flex-end;
  flex-direction: column;

  .active {
    border: 3px solid yellow;
  }

  &-li {
    width: 80%;
    background: #fff;
    border-radius: 40px 0px 0px 40px;
    font-style: italic;
    box-sizing: border-box;
    font-weight: bold;
    font-size: 30px;
    border: 3px solid #fff;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 20px;
    text-decoration: underline;
    text-align: left;
    position: relative;
    color: #47a1ff;
    margin-top: 30px;

    img {
      position: absolute;
      right: 0px;
      top: 0px;
      width: 80px;
      height: 80px;
    }
  }
}
</style>
