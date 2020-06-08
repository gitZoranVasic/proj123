import state from './state'
import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'

import createPersistedState from 'vuex-persistedstate'

export default {
  plugins: [createPersistedState()],
  state,
  getters,
  actions,
  mutations
}
