export default ({ service, request, faker, tools }) => ({
  /**
   * @description 请求树木数据页
   * @param searchData 搜索信息
   */
  DATA_INFO_PAGE(searchData) {
    return request({
      url: '/tree/list/base',
      method: 'get',
      params: searchData
    })
  },
  DATA_INFO_TREE(id) {
    return request({
      url: '/tree/'+id,
      method: 'get'
    })
  },
  DATA_INFO_Recent(pageVo) {
    return request({
      url: '/tree/log/recent',
      method: 'get',
      params: pageVo
    })
  },
  DATA_INFO_WARN() {
    return request({
      url: '/tree/care/warn',
      method: 'get',
      params: {
        pageNum: 1,
        pageSize: 10
      }
    })
  },
  DATA_INFO_CHART() {
    return request({
      url: '/tree/care/chart',
      method: 'get'
    })
  },
  DATA_INFO_DELTREE(treeId) {
    return request({
      url: '/tree/',
      method: 'delete',
      params: treeId
    })
  },
  DATA_INFO_EDIT(tree) {
    return request({
      url: '/tree/',
      method: 'put',
      params: tree
    })
  },
  DATA_INFO_ADD(tree) {
    return request({
      url: '/addTree/',
      method: 'post',
      params: tree
    })
  },
  DATA_INFO_AREA(id) {
    return request({
      url: '/area/' + id,
      method: 'get'
    })
  },
  DATA_INFO_GIS() {
    return request({
      url: '/map/gis/',
      method: 'get'
    })
  },
  DATA_INFO_GISSEARCH(searchVo) {
    return request({
      url: '/map/gis/search',
      method: 'get',
      params: searchVo
    })
  }

})
