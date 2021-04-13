<template>
  <d2-container>
    <el-amap
        vid="map"
        :center="center"
        :zoom="zoom"
    >
      <el-amap-marker v-for="u in markers" :position="u.position" :events="u.events">
      </el-amap-marker>
      <el-dialog :visible.sync="dialogFormVisible" width="400px">
        <div>编号 {{ treeData.identifier }}</div>
        <div>中文名 {{ treeData.nameZh }}</div>
      </el-dialog>
    </el-amap>
  </d2-container>
</template>

<script>
import api from '@/api'

export default {
  name: 'mtop',
  data() {
    return {
      dialogFormVisible: false,
      zoom: 10,
      markers: [],
      center: [114.1900000,30.3800000],
      treeData: {}
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      api.DATA_INFO_GIS()
          .then(resp => {
            for (let i = 0; i < resp.length; i++) {
              this.markers = resp
              resp[i].key = i
              resp[i].events= {
                click: (e) => {
                  this.showInfo(resp[i].treeId)
                }
              }
            }
          })
    },
    showInfo(id) {
      api.DATA_INFO_TREE(id)
          .then(resp => {
            this.treeData = resp
          }
      )
      this.dialogFormVisible = true
    }
  }
}
</script>
<style>
</style>
