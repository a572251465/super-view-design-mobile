import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import navInfo, { INavDetail } from '@/store/modules/navInfo'
import themeInfo, { IThemeInfo } from '@/store/modules/themeInfo'

export interface IRootState {
  navInfo: INavDetail
  themeInfo: IThemeInfo
}

export default createStore<IRootState>({
  plugins: [createPersistedState()],
  modules: {
    navInfo: {
      namespaced: true,
      ...navInfo
    },
    themeInfo: {
      namespaced: true,
      ...themeInfo
    }
  }
})
