import env from './env'
import { fetch, fetch_raw } from './fetch'
import axios from 'axios'

export function login(mobile, validateCode) {
  const params = {
    mobile,
    validateCode
  }

  return fetch_raw({
    url: '/user/login/ajaxSave',
    params
  })
}