<template>
  <ul class="detail-template">
    <li
      class="detail-template-li"
      :class="[detailInfo.isOwn ? 'active' : '']"
      :style="{ width: computedWidth() }"
    >
      {{ detailInfo.title }}
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IDetailTemplate } from '@/components/DetailTemplate/types'

export default defineComponent({
  name: 'detail-tempmlate',
  props: {
    detailInfo: {
      type: Object as PropType<IDetailTemplate>,
      required: true
    }
  },
  setup() {
    const computedWidth = (): string => {
      const range: number[] = [60, 70, 80, 90]
      const value = range[Math.floor(Math.random() * range.length)]
      return `${value}%`
    }
    return {
      computedWidth
    }
  }
})
</script>

<style lang="scss" scoped>
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
