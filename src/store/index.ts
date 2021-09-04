import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import navInfo, { INavDetail } from '@/store/modules/navInfo'

export interface IRootState {
  navInfo: INavDetail
}

export default createStore<IRootState>({
  plugins: [createPersistedState()],
  modules: {
    navInfo: {
      namespaced: true,
      ...navInfo
    }
  }
})
