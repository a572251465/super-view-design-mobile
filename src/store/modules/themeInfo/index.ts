import { ActionTree, GetterTree, MutationTree } from 'vuex'
import { IRootState } from '@/store'
import { SETTING_THEME_COLOR } from '@/store/modules/themeInfo/method-types'

export interface IThemeInfo {
  themeColor: string
}

const state: IThemeInfo = {
  themeColor: 'black'
}

const getters: GetterTree<IThemeInfo, IRootState> = {
  themeColor: (themeState) => themeState.themeColor
}

const mutations: MutationTree<IThemeInfo> = {
  [SETTING_THEME_COLOR](themeState, color: string) {
    themeState.themeColor = color
  }
}

const actions: ActionTree<IThemeInfo, IRootState> = {
  [SETTING_THEME_COLOR]({ commit }, color: string) {
    commit(SETTING_THEME_COLOR, color)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
