export default ({ service, request, faker, tools }) => ({
  /**
   * @description 登录
   * @param {Object} data 登录携带的信息
   */
  SYS_USER_LOGIN (data = {}) {
    return request({
      url: '/auth/login',
      method: 'post',
      data: data
    })
  },
  SYS_USER_LOGOUT () {
    return request({
      url: '/auth/logout',
      method: 'get'
    })
  }
})
