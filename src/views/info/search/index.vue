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
    <el-table
      :data="tableData"
      :cell-style='cellStyle'
      :header-cell-style='headerCellStyle'
      stripe
      border
      highlight-current-row
      style="width: 100%">
      <el-table-column
        fixed
        type="index"
        width="40">
      </el-table-column>
      <el-table-column
        width="110"
        prop="identifier"
        label="编号">
      </el-table-column>
      <el-table-column
        width="100"
        prop="nameZh"
        label="中文名">
      </el-table-column>
      <el-table-column
        width="180"
        prop="nameLa"
        label="拉丁名">
      </el-table-column>
      <el-table-column
        width="100"
        prop="genusId"
        label="科">
      </el-table-column>
      <el-table-column
        width="100"
        prop="genusId"
        label="属">
      </el-table-column>
      <el-table-column
        width="100"
        prop="classes"
        label="级别"
        :formatter="classesFormat">
      </el-table-column>
      <el-table-column
        width="100"
        prop="distribution"
        label="分布特点"
        :formatter="distributionFormat">
      </el-table-column>
      <el-table-column
        width="100"
        prop="ageEstim"
        label="估测年龄">
      </el-table-column>
      <el-table-column
        width="100"
        prop="ageReal"
        label="真实树龄">
      </el-table-column>
      <el-table-column
        width="100"
        prop="height"
        label="树高/米">
      </el-table-column>
      <el-table-column
        width="100"
        prop="bust"
        label="胸围/厘米">
      </el-table-column>
      <el-table-column
        width="100"
        prop="widthEw"
        label="东西冠幅/米">
      </el-table-column>
      <el-table-column
        width="100"
        prop="widthSn"
        label="南北冠幅/米">
      </el-table-column>
      <el-table-column
        width="100"
        prop="ownership"
        label="权属"
        :formatter="ownershipFormat">
      </el-table-column>
      <el-table-column
        width="100"
        prop="area"
        label="地区">
      </el-table-column>
      <el-table-column
        width="250"
        prop="address"
        label="地址">
      </el-table-column>
      <el-table-column
        width="160"
        fixed="right"
        label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            round
            @click="handleInfo(scope.$index, scope.row)">详细</el-button>
          <el-button
            size="mini"
            type="warning"
            icon="el-icon-edit"
            circle
            @click="handleEdit(scope.$index, scope.row)"></el-button>
          <el-button
            size="mini"
            type="danger"
            icon="el-icon-delete"
            circle
            disabled
            @click="handleDelete(scope.$index, scope.row)"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="jumper, prev, pager, next, sizes, total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-sizes="[10, 20, 30]"
      :page-size="pageData.pageSize"
      :total="pageData.total">
    </el-pagination>
  </d2-container>
</template>

<script>
import api from '@/api'
import dict from '@/libs/dict'
export default {
  name: 'index',
  data() {
    return {
      searchData: {
        identifier: '',
        name: '',
        classes: ''
      },
      tableData: [],
      pageData: {
        pageNum: 1,
        pageSize: 20,
        total: 0
      }
    }
  },
  mounted() {
    this.getTableData();
  },
  methods: {
    onSubmit() {
      console.log(this.searchData)

    },
    getTableData() {
      const {pageNum, pageSize} = this.pageData;
      api.DATA_INFO_PAGE({pageNum, pageSize})
        .then(resp =>{
        this.tableData = resp.list;
        this.pageData.total =  resp.total
      })
        .catch(err =>{
        console.log(err);
      });
    },
    classesFormat(row) {
      return dict.classes[row.classes];
    },
    distributionFormat(row) {
      return row.distribution === 0 ? '群状' : row.distribution === 1 ? '散生' : "数据有误";
    },
    ownershipFormat(row) {
      return dict.ownership[row.ownership];
    },
    handleInfo(index, row) {
      console.log(page, row);
    },
    handleEdit(index, row) {
      console.log(page, row);
    },
    handleDelete(index, row) {
      console.log(page, row);
    },
    handleSizeChange(val) {
      this.pageData.pageSize = val;
      this.getTableData();
    },
    handleCurrentChange(val) {
      this.pageData.pageNum = val;
      this.getTableData();
    },
    //居中
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
.el-pagination {
  text-align: center;
}
.el-form {
  text-align: center;
}
</style>
