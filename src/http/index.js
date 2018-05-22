import axios from 'axios'
axios.defaults.baseURL = 'https:zntk.police.sh.cn'
// axios.defaults.baseURL = 'http://192.168.0.117:8080'

export const getHelmatList = params => {
  return new Promise((resolve, reject) => {
    axios.post('/table/getInfo.action', params).then(res => {
      resolve(res)
    }).catch(error => {
      reject(error)
    })
  })
}
