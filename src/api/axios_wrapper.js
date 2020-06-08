
import axios from 'axios'
import store from '@/store/'
import router from '@/router'

// import * as uiTypes from '../store/modules/ui/types'
import * as authTypes from '../store/modules/auth/types'


export default function(requestObject) {
  // store.commit(uiTypes.IS_LOADING, true)

  const baseURL = 'https://raf-web-programming-project.herokuapp.com'
  const token = `Bearer ${store.getters.getAuthToken}`

  const url = `${baseURL}${requestObject.url}${requestObject.url.includes('?') ? '&' : '?'}${getPaginationParams(requestObject['page'])}`
  const headers = {Authorization: token}

  return axios({
    method: requestObject.method,
    url: url,
    data: requestObject.data,
    headers: headers
  }).then(res => {

    // TODO: handle errors
    // store.commit(httpErrors.SERVER_ERROR, false)
    // }
    
    return res.data
  }).catch(err => {
    
    if(err.response) {
      const status = err.response.status

      handleError(status)

      throw {response: err.response.data}
    }
  }).finally(() => {
    // store.commit(uiTypes.IS_LOADING, false)
  })
}

function handleError(statusCode) {
  switch(statusCode) {
    case 401:
      store.commit(authTypes.TOKEN, null)
      store.commit(userTypes.SET_USER, null)
      if (router.currentRoute && router.currentRoute.name !== 'Login') {
        router.replace({name: 'Login'})
      }
      break
    default:
      store.commit(httpErrors.SERVER_ERROR, true)
  }
}

function getPaginationParams(page) {
  if(!page || page == {}) {
    return ''
  }

  let result = ''

  for(const key in page) {
    result += `${key}=${page[key]}&`
  }

  return result
}