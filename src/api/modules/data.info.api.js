export default ({ service, request, faker, tools }) => ({
  /**
   * @description 请求树木数据页
   * @param pageVo 分页信息
   */
  DATA_INFO_PAGE(pageVo) {
    return request({
      url: '/tree/list/base',
      method: 'get',
      params: pageVo
    })
  }
})
