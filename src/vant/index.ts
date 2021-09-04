import { App } from 'vue'
import { ActionSheet, Icon } from 'vant'

const components = [ActionSheet, Icon]
/* eslint-disable */
export default (app: App) => {
  components.forEach((component) => {
    app.use(component)
  })
}
