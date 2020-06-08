import {login} from '../../../api/users'
import * as authTypes from './types'
import * as userTypes from '../user/types'

export function loginUser({commit}, user) {
  return new Promise((resolve, reject) => {
    login(user)
      .then((res) => {

        if(res.status === 200) {
          commit(authTypes.TOKEN, res.response.token)
          commit(userTypes.SET_USER, res.response.user)
          resolve(res)
        }
      })
      .catch((errors) => {
        reject(errors)
      })

      
  })
}

export function logoutUser({commit}, token) {
  commit(authTypes.TOKEN, null)
  commit(authTypes.IS_AUTHENTICATED, false)
  commit(userTypes.SET_USER, null)
}