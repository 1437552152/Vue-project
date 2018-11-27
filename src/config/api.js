import axios from 'axios'
// axios 配置
axios.defaults.timeout = 50000
// const env = process.env.NODE_ENV
// if (env === 'development') {
console.log(process.env.config_ip)
axios.defaults.baseURL = 'https://api.coin-dy.com'
axios.defaults.withCredentials = true
// }
axios.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  return response
}, error => {
  if (error.response) {
    switch (error.response.status) {
      case 401:
        // 401 跳转到登录页面
        console.log('error')
    }
  }
  return Promise.resolve(error.response)
})

const buildGetUrl = function (url, params) {
  var result = Object.params(params, true)
  if (result) return url + '?' + result
  return url
}

export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(buildGetUrl(url, params)).then(response => {
      resolve(response.data)
    }, err => {
      reject(err)
    }).catch((error) => {
      reject(error)
    })
  })
}

export function post(url, params) {
  let searchParams = new URLSearchParams()
  for (let key in params) {
    searchParams.append(key, params[key])
  }
  // 这个在登录的时候会有一个token
  return new Promise((resolve, reject) => {
    if (localStorage.getItem('LoginFlag')) {
      axios.post(url, searchParams, {
        headers: {
          'Content-type': 'application/x-www-form-urlencoded',
          'x-auth-token': localStorage.getItem('LoginFlag')
        }
      }).then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      }).catch((error) => {
        reject(error)
      })
    } else {
      axios.post(url, searchParams, {
        headers: {
          'Content-type': 'application/x-www-form-urlencoded'
        }
      }).then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      }).catch((error) => {
        reject(error)
      })
    }
  })
}

export default {
  /* ==================== 所有接口信息 ==================== */
  /* 首页接口 */
  Indexrecommend(params) {
    return post('/market/overview', params)
  },
  /* 首页轮播图 */
  Advertise(params) {
    return post('uc/ancillary/system/advertise', params)
  },
  /* 行情 */
  Symbolthumb(params) {
    return post('market/symbol-thumb', params)
  },
  /* 登陆检测 */
  Login(params) {
    return post('/uc/check/login', params)
  },
  /* gt初始化验证 */
  Gtcaptcha(params) {
    return post('/uc/start/captcha', params)
  },
  /* 获得短信验证码 */
  Messagecode(params) {
    return post('/uc/mobile/code', params)
  },
  /* 获得邮箱验证码 */
  Emailcode(params) {
    return post('/uc/register/email', params)
  },
  // 获得国家
  Getcountry(params) {
    return post('/uc/support/country', params)
  },

  /* 手机注册 */
  Phoneregister(params) {
    return post('/uc/register/phone', params)
  },
  /* 登录 */
  Loginsystem(params) {
    return post('/uc/login', params)
  },
  /* 退出登录 */
  Loginoutsystem(params) {
    return post('/uc/logout', params)
  },
  /* 总资产 */
  Totalwallet(params) {
    return post('/uc/asset/wallet', params)
  },
  /* 推广成功的用户记录 */
  Extendrecord(params) {
    return post('/uc/promotion/record', params)
  },
  /* 推广成功的佣金记录 */
  Rewardrecord(params) {
    return post('/uc/promotion/reward/record', params)
  },
  /* 忘记密码手机验证码 */
  FrogetPhCode(params) {
    return post('/uc/mobile/reset/code', params)
  },
  /* 忘记密码邮箱验证码 */
  FrogetEmailCode(params) {
    return post('/uc/reset/email/code', params)
  },
  /* 找回密码 */
  Resetword(params) {
    return post('/uc/reset/login/password', params)
  },
  /* 人民币和美元汇率 */
  Usdcny(params) {
    return post('/market/exchange-rate/usd-cny', params)
  },
  /* kline数据自选股 */
  Kfind(params) {
    return post('/exchange/favor/find', params)
  },
  /* kline数据添加股 */
  Kadd(params) {
    return post('/exchange/favor/add', params)
  },
  /* kline获取精度接口 */
  Ksymbolinfo(params) {
    return post('/market/symbol-info', params)
  },
  /* kline获取10条数据 */
  Kexchange(params) {
    return post('/market/exchange-plate-mini', params)
  },
  /* kline获取所有数据 */
  Kexchangefull(params) {
    return post('/market/exchange-plate-full', params)
  },
  /* 主动查询的实时成交信息 */
  Ktrade(params) {
    return post('/market/latest-trade', params)
  }
}
