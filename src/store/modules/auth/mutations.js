import * as types from './types'

export default {
  [types.IS_AUTHENTICATED](state, value) {
    state.isAuthenticated = value
  },
  [types.TOKEN](state, value) {
    state.token = value
    state.isAuthenticated = value !== null
  },
  [types.PATIENT_TOKEN](state, value) {
    state.patientToken = value
    state.isAuthenticated = false
  }
}
