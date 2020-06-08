import Axios from './axios_wrapper'

export function login(data) {
  return Axios({
    url: '/login',
    method: 'POST',
    data
  })

}