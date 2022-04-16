<template>
  <div id="namespace">
    <el-radio-group>
      <el-radio-button
        v-for="item in namespaceList"
        :key="item.namespaceShowName"
        :label="item.namespaceShowName"
        @change="radioChange(item)"
      />
    </el-radio-group>
  </div>
  <div id="label">
    <label
      >配置管理 | {{ currentNamespace }}
      <i style="color: rgb(204, 204, 204)"
        >{{ configQuery.tenant }} 查询结果：共查询到
        {{ configQuery.total }} 条满足要求的配置。</i
      ></label
    >
  </div>
  <div id="search">
    <el-form :inline="true" :model="configQuery" class="demo-form-inline">
      <el-form-item label="Data Id: ">
        <el-input
          v-model="configQuery.dataId"
          placeholder="添加通配符'*'进行模糊查询"
        />
      </el-form-item>
      <el-form-item label="Group: ">
        <el-input
          v-model="configQuery.group"
          placeholder="添加通配符'*'进行模糊查询"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="searchConfig">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-link style="color: rgb(51, 205, 229)">高级查询</el-link>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="searchConfig">导入查询结果</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="searchConfig">导入配置</el-button>
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="createConfiguration">添加配置</el-button>
  </div>
  <div id="tab">
    <el-table
      ref="singleTable"
      :data="tableData"
      @selection-change="selectionChange"
      row-key="dataId"
      border
    >
      <el-table-column
        type="selection"
        width="50"
        @selection-change="selectionChange"
      />
      <el-table-column prop="dataId" label="Data Id" width="180" sortable />
      <el-table-column prop="group" label="Group" width="180" sortable />
      <el-table-column prop="tenant" label="归属应用" width="180" sortable />
      <el-table-column label="操作">
        <template #default="scope">
          <div class="op">
            <el-button type="primary">详情</el-button>
            <el-button type="primary">示例代码</el-button>
            <el-button type="primary" @click="editConfig(scope.row)">编辑</el-button>
            <el-button type="danger" @click="deleteConfig(scope.row.id)">删除</el-button>
            <el-button type="primary">更多</el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
  <div id="foot">
    <div id="batchOp" v-if="tableData.length > 0">
      <el-button type="danger">删除</el-button>
      <el-button type="primary">导出选中的配置</el-button>
      <el-button type="primary">克隆</el-button>
    </div>
    <div id="pagination">
      <el-pagination
        large
        background
        layout="prev, pager, next"
        :hide-on-single-page="true"
        :current-page="configQuery.pageNo"
        :total="configQuery.total"
        @current-change="pageChange"
        class="mt-4"
      />
    </div>
  </div>
</template>

<script>
import { listConfig } from "@/api/config";
import{listNamespace} from "@/api/namespace"
export default {
  data() {
    return {
      namespaceList: [],
      currentNamespace: "public",
      currentNamespaceId: "",
      currentNamespaceConfigCount: 0,
      dataIds: [],
      configQuery: {
        dataId: "",
        group: "",
        appName: "",
        config_tags: "",
        search: "accurate",
        pageNo: 1,
        pageSize: 10,
        total: 0,
      },
      tableData: [],
    };
  },
  created() {
    this.listNameSpace();
    this.searchConfig();
  },
  methods: {
    selectionChange(val) {
      console.log(this.namespaceList);
      this.dataIds = [];
      val.map((item) => {
        this.dataIds.push(item.dataId);
      });
    },
    createConfiguration() {
      this.$router.push("/createConfiguration");
    },
    async listNameSpace(){
      let data = await listNamespace();
      this.namespaceList = data.data;
    },
    /**
     * 当选项卡选中的时候
     */
    radioChange(val) {
      this.currentNamespace = val.namespaceShowName;
      this.configQuery.tenant = val.namespace;
      this.resetSearchQuery();
      this.searchConfig();
    },
    /**
     * 重置页码条件和总条数
     */
    resetSearchQuery(){
      this.configQuery.pageNo = 1;
      this.configQuery.total = 0;
    },
    /**
     * 搜索配置
     */
    async searchConfig() {
      let data = await listConfig(this.configQuery);
      this.configQuery.total = data.totalCount;
      this.tableData = data.pageItems;
    },
    /**
     * 翻页
     */
    async pageChange(page) {
      this.configQuery.pageNo = page;
      this.searchConfig();
    },
    /**
     * 编辑配置
     */
    editConfig(configInfo){
      console.log(configInfo);
    },
    /**
     * 删除配置
     */
    deleteConfig(configId){
      console.log('configId', configId);
      this.resetSearchQuery();
      this.searchConfig();
    }
  },
};
</script>

<style lang="scss" scoped>
#namespace {
  width: 100%;
  height: 50px;
  background-color: #eee;
  .el-radio-group {
    margin-top: 7px;
  }
}
#tab,
#search,
#foot {
  margin-top: 20px;
  display: flex;
}
#label {
  margin-top: 20px;
  label {
    font-size: 12px;
  }
}
#pagination {
  position: absolute;
  margin-left: 60%;
}
</style>