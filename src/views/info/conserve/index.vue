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
    <el-table
        v-loading="loading"
        :data="tableData"
        :cell-style='cellStyle'
        :header-cell-style='headerCellStyle'
        :max-height="fullHeight-240"
        stripe
        border
        highlight-current-row
        style="width: 100%">
      <el-table-column
          prop="id"
          v-if="false">
      </el-table-column>
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
          prop="family"
          label="科">
      </el-table-column>
      <el-table-column
          width="100"
          prop="genus"
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
              @click="handleUpdate(scope.row)">更新</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
        background
        layout="jumper, prev, pager, next, sizes, total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-sizes="[10, 20, 30]"
        :page-size="searchData.pageSize"
        :total="total">
    </el-pagination>
    <el-dialog :visible.sync="dialogFormVisible">
      <el-form ref="form" :model="careData" label-width="80px">
        <el-row>
          <el-col :span="8">
            <el-form-item label="生长势">
              <el-select v-model="careData.growthStatus" placeholder="请选择生长势">
                <el-option v-for="ds in dict.status" :key="ds.k" :label="ds.v" :value="parseInt(ds.k)"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="生长环境">
              <el-select v-model="careData.growthEnv" placeholder="请选择生长环境">
                <el-option v-for="de in dict.env" :key="de.k" :label="de.v" :value="parseInt(de.k)"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="保护措施">
              <el-input type="textarea" v-model="careData.protection"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="复壮措施">
              <el-input type="textarea" v-model="careData.rejuvenate"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item>
              <el-button type="primary" @click="submitCare">保存</el-button>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span='16'>
            <el-form-item label="补充">
              <el-input type="textarea" v-model="careData.description"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-dialog>
  </d2-container>
</template>

<script>
import api from '@/api'
import dict from '@/libs/dict'
import user from "@/store/modules/d2admin/modules/user";
import {mapState} from "vuex";
import info from "@/store/modules/tims/modules/info";
import row from "element-ui/packages/row/src/row";
export default {
  name: 'conserve',
  computed: {
    ...mapState('d2admin/user', [
      'info'
    ])
  },
  data() {
    return {
      careData: {
        id: undefined,
        growthEnv: null,
        growthStatus: null,
        protection: "无",
        rejuvenate: "无",
        description: "无"
      },
      tableData: [],
      dict: dict,
      dialogFormVisible: false,
      userRole: null,
      loading: true,
      fullHeight: document.documentElement.clientHeight,
      searchData: {
        identifier: null,
        name: null,
        classes: null,
        pageNum: 1,
        pageSize: 20,
      },
      total: 0
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.userRole = this.info.authorities[0].authority;
      this.getTableData();
    },
    onSubmit() {
      this.getTableData();
    },
    submitCare() {
      api.DATA_INFO_CARE(this.careData)
          .then(resp => {
            this.$message({
              message: '修改成功',
              type: 'success'
            })
            this.dialogFormVisible = false
            this.getTableData()
          })
    },
    async getTableData() {
      this.loading = true;
      api.DATA_INFO_PAGE(this.searchData)
          .then(resp => {
            this.tableData = resp.list;
            this.total = resp.total;
            this.loading = false;
          })
          .catch(err => {
            console.log(err);
          });
    },
    async getCareData(id) {
      await api.DATA_INFO_CAREGET(id)
          .then(resp => {
            this.careData = resp;
          })
          .catch(err => {
            this.$message.error('获取失败');
          });
    },
    classesFormat(row) {
      return dict.classes[row.classes].v;
    },
    distributionFormat(row) {
      return row.distribution === 0 ? '群状' : row.distribution === 1 ? '散生' : "数据有误";
    },
    ownershipFormat(row) {
      return dict.ownership[row.ownership].v;
    },
    handleUpdate(row) {
      this.getCareData(row.id);
      this.dialogFormVisible = true;
    },
    handleSizeChange(val) {
      this.searchData.pageSize = val;
      this.getTableData();
    },
    handleCurrentChange(val) {
      this.searchData.pageNum = val;
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
