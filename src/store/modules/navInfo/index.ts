export interface INavDetail {
  navDetail: { name: string; value: string }[]
}

const state: INavDetail = {
  navDetail: [
    { name: 'Css', value: 'css-world' },
    { name: 'JavaScript', value: 'javascript-world' },
    { name: 'Html', value: 'html-world' },
    { name: 'Vue', value: 'vue-world' },
    { name: '知识文章', value: 'other-world' }
  ]
}

export default {
  state
}
