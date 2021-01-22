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
                  v-for="(activity, index) in activities"
                  :key="index"
                  :timestamp="activity.timestamp">
                  <div>树木名：{{activity.content}}</div>
                  <div>提交者：{{activity.research}}</div>
                </el-timeline-item>
              </el-timeline>
            </div>
          </template>
          <template v-if="item.i === '1'">

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
import dayjs from "dayjs"
import { GridLayout, GridItem } from 'vue-grid-layout'
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
          rows: [
            { 'env': '良好', 'total': 2343 },
            { 'env': '中等', 'total': 214 },
            { 'env': '差', 'total': 50 }
          ]
        },
        status: {
          columns: ['status', 'total'],
          rows: [
            { 'status': '正常株', 'total': 2343 },
            { 'status': '衰弱株', 'total': 154 }
          ]
        }
      },
      chartExtend: {
        legend: {
          show: false
        }
      },
      activities: [{
        content: '枫杨',
        research: '某某',
        timestamp: '2021-01-1'
      },{
        content: '枫杨',
        research: '某某',
        timestamp: '2021-01-1'
      }]
    };
  },
  mounted () {
    this.timeInterval = setInterval(() => {
      this.time = dayjs().format('hh:mm:ss A')
    }, 1000)
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
