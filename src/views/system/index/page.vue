<template>
  <d2-container type="full" class="page">
    <grid-layout
      v-bind="layout">
      <grid-item
        v-for="(item, index) in layout.layout"
        :key="index"
        v-bind="item">
        <el-card shadow="hover" class="page_card">
          <template v-if="item.i === '0'">
            <template slot="header">
              <div flex="dir:top main:center cross:center">
                <div>{{date}}</div>
                <div style="padding-top: 5px">{{time}}</div>
              </div>
            </template>
            最近更新
            <div style="margin-left: -40px;margin-top: 20px">
              <el-timeline>
                <el-timeline-item
                  v-for="(recentList, index) in recentList"
                  :key="index"
                  :timestamp="recentList.createTime">
                  <div v-if="recentList.action == 0">更新：{{recentList.nameZh}}({{ recentList.identifier }})</div>
                  <div v-if="recentList.action == 1">添加：{{recentList.nameZh}}({{ recentList.identifier }})</div>
                  <div v-if="recentList.action == 2">删除：{{recentList.nameZh}}({{ recentList.identifier }})</div>
                  <div>操作者：{{recentList.creator}}</div>
                </el-timeline-item>
              </el-timeline>
            </div>
          </template>
          <template v-if="item.i === '1'">
            <el-alert
              title="这些树木需要关注："
              :closable="false"
              type="warning">
            </el-alert>
            <el-table
              :cell-style='cellStyle'
              :header-cell-style='headerCellStyle'
              :data="warnData"
              style="width: 100%">
              <el-table-column
                prop="id"
                v-if="false">
              </el-table-column>
              <el-table-column
                prop="identifier"
                label="编号"
                width="110">
              </el-table-column>
              <el-table-column
                prop="nameZh"
                label="名称"
                width="80">
              </el-table-column>
              <el-table-column
                prop="classes"
                label="级别"
                width="80"
                :formatter="classesFormat">
              </el-table-column>
              <el-table-column
                prop="growthStatus"
                label="生长势"
                width="80"
                :formatter="statusFormat">
              </el-table-column>
              <el-table-column
                prop="growthEnv"
                label="生长环境"
                width="80"
                :formatter="envFormat">
              </el-table-column>
              <el-table-column
                prop="description"
                label="备注">
              </el-table-column>
              <el-table-column
                fixed="right"
                label="操作"
                width="80">
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    type="primary"
                    round
                    @click="handleInfo(scope.row)">详细</el-button>
                </template>
              </el-table-column>
            </el-table>
          </template>
          <template v-if="item.i === '2'">
            <template slot="header">生长状态</template>
            <ve-pie :data="chartData.status"
                    :settings="pieSettings"
                    judge-width=true></ve-pie>
          </template>
          <template v-if="item.i === '3'">
            <template slot="header">环境状态</template>
            <ve-pie :data="chartData.env"
                    :settings="pieSettings"
                    judge-width=true></ve-pie>
          </template>
        </el-card>
      </grid-item>
    </grid-layout>
  </d2-container>
</template>

<script>
import Vue from 'vue'
import dayjs from 'dayjs'
import { GridLayout, GridItem } from 'vue-grid-layout'
import api from '@/api'
import dict from '@/libs/dict'
Vue.component('grid-layout', GridLayout)
Vue.component('grid-item', GridItem)
export default {
  name: 'index',
  data () {
    this.pieSettings = {
      radius: 60,
      offsetY: 130,
      label: {
        formatter: '{d}%'
      }
    }
    return {
      time: dayjs().format('hh:mm:ss A'),
      date: dayjs().format('MM 月 DD 日'),
      warnData:[],
      layout: {
        layout: [
          { x: 0, y: 0, w: 2, h: 16, i: '0' },
          { x: 2, y: 0, w: 7, h: 16, i: '1' },
          { x: 9, y: 0, w: 3, h: 8, i: '2' },
          { x: 9, y: 8, w: 3, h: 8, i: '3' },
        ],
        rowHeight: 30,
        isDraggable: true,
        isResizable: false,
        verticalCompact: true,
        margin: [10, 10],
        useCssTransforms: true
      },
      chartData: {
        env: {
          columns: ['env', 'total'],
          rows: []
        },
        status: {
          columns: ['status', 'total'],
          rows: []
        }
      },
      chartExtend: {
        legend: {
          show: false
        }
      },
      recentList: []
    };
  },
  mounted () {
    this.timeInterval = setInterval(() => {
      this.time = dayjs().format('hh:mm:ss A')
    }, 1000)
    this.getWarnList();
    this.getRecentList();
    this.getTotal();
  },
  methods: {
    getRecentList() {
      api.DATA_INFO_Recent({pageNum: 1, pageSize: 6})
        .then(resp =>{
          this.recentList = resp.list;
        })
        .catch(err =>{
          console.log(err);
        });
    },
    getWarnList() {
      api.DATA_INFO_WARN()
        .then(resp =>{
          this.warnData = resp.list;
        })
        .catch(err =>{
          console.log(err);
        });
    },
    getTotal() {
      api.DATA_INFO_CHART()
        .then(resp =>{
          this.chartData.status.rows = resp.status;
          this.chartData.env.rows = resp.env;
        })
        .catch(err =>{
          console.log(err);
        });
    },
    classesFormat(row) {
      return dict.classes[row.classes].v;
    },
    statusFormat(row) {
      return dict.status[row.growthStatus].v;
    },
    envFormat(row) {
      return dict.env[row.growthEnv].v;
    },
    handleInfo(row) {
      this.$router.push('/common/details/'+row.id)
    },
    //居中
    cellStyle({ row, column, rowIndex, columnIndex }) {
      return 'text-align:center'
    },
    headerCellStyle({ row, rowIndex }) {
      return 'text-align:center'
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  .vue-grid-layout {
    background-color: $color-bg;
    border-radius: 4px;
    margin: -10px;
    .page_card {
      height: 100%;
      @extend %unable-select;
    }
    .vue-resizable-handle {
      opacity: .3;
      &:hover{
        opacity: 1;
      }
    }
  }
}
</style>
