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
            <el-input v-model="treeData.identifier"></el-input>
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
            <el-input v-model="treeData.family"></el-input>
          </el-form-item>
        </el-col>
        <el-col span="8">
          <el-form-item label="属">
            <el-input v-model="treeData.genus"></el-input>
          </el-form-item>
        </el-col>
        <el-col span="8">
          <el-form-item label="分布">
            <el-select v-model="treeData.distribution" placeholder="请选择分布">
              <el-option v-for="dd in dict.distribution" :key="dd.k" :label="dd.v" :value="parseInt(dd.k)"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-divider><div class="divider">生长状况</div></el-divider>
      <el-row>
        <el-col span="8">
          <el-form-item label="类型">
            <el-select v-model="treeData.classes" placeholder="请选择类型">
              <el-option v-for="dc in dict.classes" :key="dc.k" :label="dc.v" :value="parseInt(dc.k)"></el-option>
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
              <el-option v-for="da in dict.aspect" :key="da.k" :label="da.v" :value="parseInt(da.k)"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col span="8">
          <el-form-item label="坡度">
            <el-select v-model="treeData.slope" placeholder="请选择坡度">
              <el-option v-for="ds in dict.slope" :key="ds.k" :label="ds.v" :value="parseInt(ds.k)"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col span="8">
          <el-form-item label="坡位">
            <el-select v-model="treeData.position" placeholder="请选择坡位">
              <el-option v-for="dp in dict.position" :key="dp.k" :label="dp.v" :value="parseInt(dp.k)"></el-option>
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
              <el-option v-for="dc in dict.compactness" :key="dc.k" :label="dc.v" :value="parseInt(dc.k)"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col span="8">
          <el-form-item label="生长势">
            <el-select v-model="treeData.growthStatus" placeholder="请选择生长势">
              <el-option v-for="ds in dict.status" :key="ds.k" :label="ds.v" :value="parseInt(ds.k)"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col span="8">
          <el-form-item label="生长环境">
            <el-select v-model="treeData.growthEnv" placeholder="请选择生长环境">
              <el-option v-for="de in dict.env" :key="de.k" :label="de.v" :value="parseInt(de.k)"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-divider></el-divider>
      <el-form-item>
        <el-button type="primary" @click="submit">提交</el-button>
      </el-form-item>
    </el-form>
  </d2-container>
</template>

<script>
import api from "@/api";
import dict from "@/libs/dict";
export default {
  name: 'add',
  data() {
    return {
      treeData: {
        area: null,
        address: "",
        identifier: "",
        nameZh: "",
        nameLa: "",
        family: "",
        genus: "",
        distribution: null,
        classes: null,
        ageReal: null,
        ageEstim: null,
        height: null,
        bust: null,
        widthEw: null,
        widthSn: null,
        altitude: null,
        aspect: null,
        slope: null,
        soil: "",
        position: null,
        compactness: null,
        growthStatus: null,
        growthEnv: null
      },
      dialogTableVisible: false,
      dict: dict
    }
  },
  methods: {
    submit() {
      console.log(this.treeData)
      this.treeData.id = this.$route.params.id
      api.DATA_INFO_ADD(this.treeData).then(
          this.$message({
            message: '添加成功',
            type: 'success'
          })
      )
    }
  }
}
</script>
