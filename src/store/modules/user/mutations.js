import * as types from './types'

export default {
  [types.SET_USER] (state, user) {
    state.user = user
  },

  [types.LOGOUT_USER] (state, user) {
    state.user = null
  },

  [types.SET_RESERVATION_NUMBER] (state, reservationNumber) {
    state.reservationNumber = reservationNumber
  }
}
