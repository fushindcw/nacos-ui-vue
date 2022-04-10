<template>
  <h1>新建配置</h1>
  <div>
    <el-form :model="form" label-width="120px">
      <el-form-item label="Data ID:">
        <el-input v-model="form.dataId" />
      </el-form-item>
      <el-form-item label="Group:">
        <el-input v-model="form.group" />
      </el-form-item>
      <el-form-item label="标签:" v-if="hidden">
        <el-input v-model="form.tag" placeholder="请输入标签" />
      </el-form-item>
      <el-form-item label="应用归属:" v-if="hidden">
        <el-input v-model="form.belong" />
      </el-form-item>
      <el-form-item>
        <label id="inputShowTitle" @click="changeExtraInputShow">{{
          inputShowTitle
        }}</label>
      </el-form-item>
      <el-form-item label="描述：">
        <el-input v-model="form.desc" type="textarea" />
      </el-form-item>
      <el-form-item label="配置格式:">
        <el-radio-group v-model="form.type">
          <el-radio v-model="form.type" label="TEXT" />
          <el-radio v-model="form.type" label="JSON" />
          <el-radio v-model="form.type" label="XML" />
          <el-radio v-model="form.type" label="YAML" />
          <el-radio v-model="form.type" label="HTML" />
          <el-radio v-model="form.type" label="Properties" />
        </el-radio-group>
      </el-form-item>
      <el-form-item label="配置内容:">
        <el-input v-model="form.content" type="textarea" :rows="10" />
      </el-form-item>
      <el-form-item style="margin-right: 0px">
        <el-button type="primary" @click="createConfig">发布</el-button>
        <el-button>返回</el-button>
      </el-form-item>
    </el-form>
    <el-dialog v-model="dialogVisible" title="密码重置">
      <change-password-dialog />
    </el-dialog>
  </div>
</template>

<script>
import ChangePasswordDialog from '@/components/changePasswordDialog/changePasswordDialog.vue'
export default {
  components: {
    ChangePasswordDialog,
  },
  data() {
    return {
      form: {
        group: "DEFAULT_GROUP",
        type: "TEXT",
      },
      hidden: false,
      inputShowTitle: "更多高级选项",
      dialogVisible: false,
    };
  },
  methods: {
    createConfig() {
      console.log(this.form);
      this.dialogVisible = true;
    },
    changeExtraInputShow() {
      this.hidden = !this.hidden;
      if (!this.hidden) {
        this.inputShowTitle = "更多高级选项";
      } else {
        this.inputShowTitle = "收起";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#inputShowTitle {
  color: #06c;
  cursor: pointer;
}
#inputShowTitle:hover {
  text-decoration: underline;
}
</style>