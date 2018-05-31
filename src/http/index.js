import axios from 'axios'
// axios.defaults.baseURL = 'https:zntk.police.sh.cn'
// axios.defaults.baseURL = 'http://192.168.0.107:8080'
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.withCredentials = true

const transParam = params => {
  const resParam = new URLSearchParams()
  for (const key in params) {
    resParam.append(key, params[key])
  }
  return resParam
}

const post = url => params => new Promise((resolve, reject) => axios.post(url, transParam(params)).then(res => resolve(res)).catch(err => reject(err)))

const get = url => params => new Promise((resolve, reject) => axios.get(url).then(res => resolve(res)).catch(err => reject(err)))

export const publishWanted = post('/table/push.action')

export const getHelmatList = get('/table/getInfo.action')
