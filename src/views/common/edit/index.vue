<template>
  <d2-container>
    <el-form ref="form" :inline="true" :model="treeData" label-width="auto" label-position="right">
      <el-divider><div class="divider">位置信息</div></el-divider>
      <el-row>
        <el-col span="8">
          <el-form-item label="地区">
            <el-input v-model="treeData.area"></el-input>
          </el-form-item>
        </el-col>
        <el-col span="8">
          <el-form-item label="地址">
            <el-input v-model="treeData.address"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-divider><div class="divider">基本信息</div></el-divider>
      <el-row>
        <el-col span="8">
          <el-form-item label="编号">
            <el-input v-model="treeData.identifier" disabled></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col span="8">
          <el-form-item label="中文名">
            <el-input v-model="treeData.nameZh"></el-input>
          </el-form-item>
        </el-col>
        <el-col span="8">
          <el-form-item label="拉丁名">
            <el-input v-model="treeData.nameLa"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col span="8">
          <el-form-item label="科" >
            <el-select v-model="treeData.genusId" placeholder="请选择科">
              <el-option label="科一" value="117"></el-option>
              <el-option label="科二" value="118"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col span="8">
          <el-form-item label="属">
            <el-select v-model="treeData.genusId" placeholder="请选择属">
              <el-option label="属一" value="117"></el-option>
              <el-option label="属二" value="118"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col span="8">
          <el-form-item label="分布">
            <el-select v-model="treeData.distribution" placeholder="请选择分布">
              <el-option label="群状" value="0"></el-option>
              <el-option label="散生" value="1"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-divider><div class="divider">生长状况</div></el-divider>
      <el-row>
        <el-col span="8">
          <el-form-item label="类型">
            <el-select v-model="treeData.classes" placeholder="请选择类型">
              <el-option label="名木" value="0"></el-option>
              <el-option label="一级古树" value="1"></el-option>
              <el-option label="二级古树" value="1"></el-option>
              <el-option label="三级古树" value="1"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col span="8">
          <el-form-item label="真实树龄">
            <el-input v-model="treeData.ageReal"></el-input>
          </el-form-item>
        </el-col>
        <el-col span="8">
          <el-form-item label="估测树龄">
            <el-input v-model="treeData.ageEstim"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col span="8">
          <el-form-item label="树高">
            <el-input v-model="treeData.height"></el-input>
          </el-form-item>
        </el-col>
        <el-col span="8">
          <el-form-item label="胸径">
            <el-input v-model="treeData.bust"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col span="8">
          <el-form-item label="东西冠幅">
            <el-input v-model="treeData.widthEw"></el-input>
          </el-form-item>
        </el-col>
        <el-col span="8">
          <el-form-item label="南北冠幅">
            <el-input v-model="treeData.widthSn"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col span="8">
          <el-form-item label="海拔">
            <el-input v-model="treeData.altitude"></el-input>
          </el-form-item>
        </el-col>
        <el-col span="8">
          <el-form-item label="坡向">
            <el-select v-model="treeData.aspect" placeholder="请选择坡向">
              <el-option v-for="(v,k) in dict.aspect" :key="k" :label="v" :value="parseInt(k)"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col span="8">
          <el-form-item label="坡度">
            <el-select v-model="treeData.slope" placeholder="请选择坡度">
              <el-option v-for="(v,k) in dict.slope" :key="k" :label="v" :value="parseInt(k)"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col span="8">
          <el-form-item label="坡位">
            <el-select v-model="treeData.position" placeholder="请选择坡位">
              <el-option v-for="(v,k) in dict.position" :key="k" :label="v" :value="parseInt(k)"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col span="8">
          <el-form-item label="土壤">
            <el-input v-model="treeData.soil"></el-input>
          </el-form-item>
        </el-col>
        <el-col span="8">
          <el-form-item label="紧密度">
            <el-select v-model="treeData.compactness" placeholder="请选择紧密度">
              <el-option v-for="(v,k) in dict.compactness" :key="k" :label="v" :value="parseInt(k)"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col span="8">
          <el-form-item label="生长势">
            <el-select v-model="treeData.growthStatus" placeholder="请选择生长势">
              <el-option v-for="(v,k) in dict.status" :key="k" :label="v" :value="parseInt(k)"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col span="8">
          <el-form-item label="生长环境">
            <el-select v-model="treeData.growthEnv" placeholder="请选择生长环境">
              <el-option v-for="(v,k) in dict.env" :key="k" :label="v" :value="parseInt(k)"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-divider></el-divider>
      <el-form-item>
        <el-button type="primary" @click="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </d2-container>
</template>

<script>
import api from "@/api";
import dict from "@/libs/dict";
export default {
  name: "index",
  data() {
    return {
      treeData: {},
      dialogTableVisible: false,
      dict: dict
    }
  },
  mounted() {
    this.getTreeData();
  },
  methods: {
    async getTreeData() {
      await api.DATA_INFO_TREE(this.$route.params.id)
          .then(resp => {
            this.treeData = resp;
            this.treeData.classes = dict.classes[resp.classes];
            this.treeData.distribution = resp.distribution === 0 ? '群状' : row.distribution === 1 ? '散生' : "数据有误";
            this.treeData.aspect = dict.aspect[resp.aspect];
            this.treeData.slope = dict.slope[resp.slope];
            this.treeData.position = dict.position[resp.position];
            this.treeData.compactness = dict.compactness[resp.compactness];
            this.treeData.growthStatus = dict.status[resp.growthStatus];
            this.treeData.growthEnv = dict.env[resp.growthStatus];
          })
          .catch(err => {
            this.$message.error('获取失败');
          });
    },
    submit() {
      console.log(this.treeData)
      api.DATA_INFO_EDIT(this.treeData).then(
          this.$message({
            message: '添加成功',
            type: 'success'
          })
      )
    }
  }
}
</script>

<style scoped>
.el-form-item {
  font-size: 18px;
}
.divider {
  font-size: 18px;
  font-weight: bold;
}
</style>
