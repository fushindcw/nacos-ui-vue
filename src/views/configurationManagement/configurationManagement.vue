<template>
  <div id="namespace">
    <el-radio-group>
      <el-radio-button
        v-for="item in namespaceList"
        :key="item"
        :label="item"
        @change="radioChange(item)"
      />
    </el-radio-group>
  </div>
  <div id="label">
    <label
      >配置管理 | {{ currentNamespace }}
      <i style="color: rgb(204, 204, 204);">{{ currentNamespaceId }} 查询结果：共查询到
      {{ currentNamespaceConfigCount }} 条满足要求的配置。</i></label
    >
  </div>
  <div id="search">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="Data Id: ">
        <el-input placeholder="添加通配符'*'进行模糊查询" />
      </el-form-item>
      <el-form-item label="Group: ">
        <el-input placeholder="添加通配符'*'进行模糊查询" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-link style="color: rgb(51, 205, 229);">高级查询</el-link>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">导入查询结果</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">导入配置</el-button>
      </el-form-item>
    </el-form>
    <el-button type="primary" style="position: absolute; margin-left: 75%;" @click="createConfiguration">添加配置</el-button>
  </div>
  <div id="tab">
    <el-table :data="tableData" @selection-change="selectionChange" border>
      <el-table-column
        type="selection"
        width="50"
        @selection-change="selectionChange"
      />
      <el-table-column prop="dataId" label="Data Id" width="180" sortable />
      <el-table-column prop="group" label="Group" width="180" sortable />
      <el-table-column prop="belong" label="归属应用" width="180" sortable />
      <el-table-column label="操作">
        <el-button type="primary">详情</el-button>
        <el-button type="primary">示例代码</el-button>
        <el-button type="primary">编辑</el-button>
        <el-button type="primary">删除</el-button>
        <el-button type="primary">更多</el-button>
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
        :total="50"
        class="mt-4"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      namespaceList: ["public", "dev"],
      currentNamespace: "public",
      currentNamespaceId: "",
      currentNamespaceConfigCount: 0,
      dataIds: [],
      tableData: [
        {
          dataId: "1",
          group: "dev",
          belong: "1234",
        },
        {
          dataId: "2",
          group: "dev",
          belong: "1234",
        },
        {
          dataId: "3",
          group: "dev",
          belong: "1234",
        },
        {
          dataId: "4",
          group: "dev",
          belong: "1234",
        },
        {
          dataId: "5",
          group: "dev",
          belong: "1234",
        },
        {
          dataId: "6",
          group: "dev",
          belong: "1234",
        },
      ],
    };
  },
  methods: {
    selectionChange(val) {
      console.log(this.namespaceList);
      this.dataIds = [];
      val.map((item) => {
        this.dataIds.push(item.dataId);
      });
    },
    createConfiguration(){
      this.$router.push("/createConfiguration")
    },
    /**
     * 当选项卡选中的时候
     */
    radioChange(val) {
      console.log(val);
      this.currentNamespace = val;
    },
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