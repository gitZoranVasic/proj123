import Axios from './axios_wrapper'

export function getTickets(data) {
  return Axios({
    url: '/tickets/all',
    method: 'GET'
  })
}