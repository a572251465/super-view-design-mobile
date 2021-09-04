import { App } from 'vue'
import { ActionSheet, Icon, Popup } from 'vant'

const components = [ActionSheet, Icon, Popup]
/* eslint-disable */
export default (app: App) => {
  components.forEach((component) => {
    app.use(component)
  })
}
