<template>
  <d2-container>
    <el-divider><div class="divider">位置信息</div></el-divider>
    <el-row>
      <el-col span="8">
        <el-row :gutter="10">
          <el-col span="12" align="right"><el-tag size="mini" effect="plain">地区</el-tag></el-col>
          <el-col span="12" align="left">{{ treeData.area }}</el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row>
      <el-col span="8">
        <el-row :gutter="10">
          <el-col span="12" align="right"><el-tag size="mini" effect="plain">地址</el-tag></el-col>
          <el-col span="12" align="left">{{ treeData.address }}</el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-divider><div class="divider">基本信息</div></el-divider>
    <el-row>
      <el-col span="8">
        <el-row :gutter="10">
          <el-col span="12" align="right"><el-tag size="mini" effect="plain">编号</el-tag></el-col>
          <el-col span="12" align="left">{{ treeData.identifier }}</el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row>
      <el-col span="8">
        <el-row :gutter="10">
          <el-col span="12" align="right"><el-tag size="mini" effect="plain">中文名</el-tag></el-col>
          <el-col span="12" align="left">{{ treeData.nameZh }}</el-col>
        </el-row>
      </el-col>
      <el-col span="8">
        <el-row :gutter="10">
          <el-col span="12" align="right"><el-tag size="mini" effect="plain">科</el-tag></el-col>
          <el-col span="12" align="left">{{ treeData.family }}</el-col>
        </el-row>
      </el-col>
      <el-col span="8">
        <el-row :gutter="10">
          <el-col span="12" align="right"><el-tag size="mini" effect="plain">属</el-tag></el-col>
          <el-col span="12" align="left">{{ treeData.genus }}</el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row>
      <el-col span="8">
        <el-row :gutter="10">
          <el-col span="12" align="right"><el-tag size="mini" effect="plain">拉丁名</el-tag></el-col>
          <el-col span="12" align="left">{{ treeData.nameLa }}</el-col>
        </el-row>
      </el-col>
      <el-col span="8">
        <el-row :gutter="10">
          <el-col span="12" align="right"><el-tag size="mini" effect="plain">分布</el-tag></el-col>
          <el-col span="12" align="left">{{ treeData.distribution }}</el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-divider><div class="divider">生长状况</div></el-divider>
    <el-row>
      <el-col span="8">
        <el-row :gutter="10">
          <el-col span="12" align="right"><el-tag size="mini" effect="plain">类型</el-tag></el-col>
          <el-col span="12" align="left">{{ treeData.classes }}</el-col>
        </el-row>
      </el-col>
      <el-col span="8">
        <el-row :gutter="10">
          <el-col span="12" align="right"><el-tag size="mini" effect="plain">真实树龄</el-tag></el-col>
          <el-col span="12" align="left">{{ treeData.ageReal }}年</el-col>
        </el-row>
      </el-col>
      <el-col span="8">
        <el-row :gutter="10">
          <el-col span="12" align="right"><el-tag size="mini" effect="plain">估测树龄</el-tag></el-col>
          <el-col span="12" align="left">{{ treeData.ageEstim }}年</el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row>
      <el-col span="8">
        <el-row :gutter="10">
          <el-col span="12" align="right"><el-tag size="mini" effect="plain">树高</el-tag></el-col>
          <el-col span="12" align="left">{{ treeData.height }}米</el-col>
        </el-row>
      </el-col>
      <el-col span="8">
        <el-row :gutter="10">
          <el-col span="12" align="right"><el-tag size="mini" effect="plain">胸径</el-tag></el-col>
          <el-col span="12" align="left">{{ treeData.bust }}厘米</el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row>
      <el-col span="8">
        <el-row :gutter="10">
          <el-col span="12" align="right"><el-tag size="mini" effect="plain">东西冠幅</el-tag></el-col>
          <el-col span="12" align="left">{{ treeData.widthEw }}米</el-col>
        </el-row>
      </el-col>
      <el-col span="8">
        <el-row :gutter="10">
          <el-col span="12" align="right"><el-tag size="mini" effect="plain">南北冠幅</el-tag></el-col>
          <el-col span="12" align="left">{{ treeData.widthSn }}米</el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row>
      <el-col span="8">
        <el-row :gutter="10">
          <el-col span="12" align="right"><el-tag size="mini" effect="plain">海拔</el-tag></el-col>
          <el-col span="12" align="left">{{ treeData.altitude }}米</el-col>
        </el-row>
      </el-col>
      <el-col span="8">
        <el-row :gutter="10">
          <el-col span="12" align="right"><el-tag size="mini" effect="plain">坡向</el-tag></el-col>
          <el-col span="12" align="left">{{ treeData.aspect }}向</el-col>
        </el-row>
      </el-col>
      <el-col span="8">
        <el-row :gutter="10">
          <el-col span="12" align="right"><el-tag size="mini" effect="plain">坡度</el-tag></el-col>
          <el-col span="12" align="left">{{ treeData.slope }}</el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row>
      <el-col span="8">
        <el-row :gutter="10">
          <el-col span="12" align="right"><el-tag size="mini" effect="plain">坡位</el-tag></el-col>
          <el-col span="12" align="left">{{ treeData.position }}</el-col>
        </el-row>
      </el-col>
      <el-col span="8">
        <el-row :gutter="10">
          <el-col span="12" align="right"><el-tag size="mini" effect="plain">土壤</el-tag></el-col>
          <el-col span="12" align="left">{{ treeData.soil }}</el-col>
        </el-row>
      </el-col>
      <el-col span="8">
        <el-row :gutter="10">
          <el-col span="12" align="right"><el-tag size="mini" effect="plain">紧密度</el-tag></el-col>
          <el-col span="12" align="left">{{ treeData.compactness }}</el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-divider><div class="divider">快捷功能</div></el-divider>
    <el-row>
      <el-col span="8" align="middle">
        <el-button size="small" type="primary" plain @click="clickCare">养护信息</el-button>

        <el-dialog title="养护信息" :visible.sync="dialogTableVisible">
          <el-row :gutter="10">
            <el-col span="8" align="middle"><el-tag size="mini" effect="plain">生长势</el-tag></el-col>
            <el-col span="14" align="left">{{ dict.status[careData.growthStatus].v }}</el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col span="8" align="middle"><el-tag size="mini" effect="plain">生长环境</el-tag></el-col>
            <el-col span="14" align="left">{{ dict.env[careData.growthEnv].v }}</el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col span="8" align="middle"><el-tag size="mini" effect="plain">保护措施</el-tag></el-col>
            <el-col span="14" align="left">{{ careData.protection }}</el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col span="8" align="middle"><el-tag size="mini" effect="plain">复壮措施</el-tag></el-col>
            <el-col span="14" align="left">{{ careData.rejuvenate }}</el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col span="8" align="middle"><el-tag size="mini" effect="plain">补充信息</el-tag></el-col>
            <el-col span="14" align="left">{{ careData.description }}</el-col>
          </el-row>
        </el-dialog>
      </el-col>
      <el-col span="8" align="middle">
        <el-button size="small"
                   type="primary"
                   plain
                   @click="handleEdit">修改信息</el-button>
      </el-col>
    </el-row>
  </d2-container>
</template>

<script>
import api from "@/api";
import dict from "@/libs/dict";
export default {
  name: "index",
  data() {
    return {
      dict: dict,
      treeData: {},
      dialogTableVisible: false,
      careData: {}
    }
  },
  mounted() {
    this.getTreeData();
    api.DATA_INFO_CAREGET(this.$route.params.id)
        .then(resp => {
          this.careData = resp;
        })
        .catch(err => {
          this.$message.error('获取失败');
        });
  },
  methods: {
    async getTreeData() {
      await api.DATA_INFO_TREE(this.$route.params.id)
          .then(resp => {
            this.treeData = resp;
            this.treeData.classes = dict.classes[resp.classes].v;
            this.treeData.distribution = resp.distribution === 0 ? '群状' : row.distribution === 1 ? '散生' : "数据有误";
            this.treeData.aspect = dict.aspect[resp.aspect].v;
            this.treeData.slope = dict.slope[resp.slope].v;
            this.treeData.position = dict.position[resp.position].v;
            this.treeData.compactness = dict.compactness[resp.compactness].v;
            this.treeData.growthStatus = dict.status[resp.growthStatus].v;
            this.treeData.growthEnv = dict.env[resp.growthEnv].v;
          })
          .catch(err => {
            console.log(err);
          });
    },
    handleEdit() {
      this.$router.push('/common/edit/'+this.$route.params.id)
    },
    clickCare() {
      this.dialogTableVisible = true
    }
  }
}
</script>

<style scoped>
.el-row {
  margin-bottom:5px;
  font-size: 18px;
}
.divider {
  font-size: 18px;
  font-weight: bold;
}
</style>
