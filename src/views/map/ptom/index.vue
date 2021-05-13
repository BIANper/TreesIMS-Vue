<template>
  <d2-container>
    <el-form :inline="true" :model="searchData">
        <el-form-item label="编号:">
          <el-input size="small" v-model="searchData.identifier" placeholder="十一位编号"></el-input>
        </el-form-item>
        <el-form-item label="中文名:">
          <el-input size="small" v-model="searchData.name" placeholder="中文名"></el-input>
        </el-form-item>
        <el-form-item label="级别:">
          <el-select size="small" v-model="searchData.classes" clearable placeholder="古树/名木">
            <el-option label="全部" :value=null></el-option>
            <el-option label="名木" value="0"></el-option>
            <el-option label="一级古树" value="1"></el-option>
            <el-option label="二级古树" value="2"></el-option>
            <el-option label="三级古树" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    <el-amap
        vid="amap"
        :center="center"
        :zoom="zoom"
        :amap-manager="amapManager"
    >
      <el-amap-marker vid="maker" v-for="u in markers" :position="u.position">
      </el-amap-marker>
      <el-dialog :visible.sync="dialogFormVisible" width="400px">
        <div>编号 {{ treeData.identifier }}</div>
        <div>中文名 {{ treeData.nameZh }}</div>
      </el-dialog>
    </el-amap>
  </d2-container>
</template>

<script>
import api from "@/api";
import {AMapManager} from 'vue-amap'
import {mapState} from "vuex";
let amapManager = new AMapManager()
export default {
  computed: {
    ...mapState('d2admin/user', [
      'info'
    ])
  },
  name: 'ptom',
  data() {
    return {
      dialogFormVisible: false,
      zoom: 10,
      markers: [],
      center: [116.413384, 39.910925],
      treeData: {},
      events: {
        click: (e) => {
          console.log()
        }
      },
      searchData: {
        identifier: null,
        name: null,
        classes: null,
      }
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      api.DATA_INFO_CENTER(this.info.cityId)
          .then(resp => {
            console.log(resp,"resp")
            this.center = resp
          })
    },
onSubmit() {
  this.markers.splice(0);
  api.DATA_INFO_GISSEARCH(this.searchData)
      .then(resp => {
        for (let i = 0; i < resp.length; i++) {
          resp[i].key = i
          this.markers.push(resp[i]);
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
},
    cellStyle({row, column, rowIndex, columnIndex}){
      return 'text-align:center';
    },
    headerCellStyle({row, rowIndex}){
      return 'text-align:center';
    },
  }
}
</script>
<style>
</style>
