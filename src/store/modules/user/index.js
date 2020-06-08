import state from './state'
import * as getters from './getters'
import mutations from './mutations'

import createPersistedState from 'vuex-persistedstate'

export default {
  plugins: [createPersistedState()],
  state,
  getters,
  mutations
}
