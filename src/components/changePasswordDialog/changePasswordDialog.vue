<template>
  <el-form :model="user" label-width="120px">
    <el-form-item label="用户名">
      {{ user.username }}
    </el-form-item>
    <el-form-item label="密码">
      <el-input type="password" v-model="user.passowrd" />
    </el-form-item>
    <el-form-item label="确认密码">
      <el-input type="password" v-model="user.confirmPassword" />
    </el-form-item>
    <span class="dialog-footer">
      <el-button type="primary">确认</el-button>
      <el-button type="none">取消</el-button>
    </span>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "nacos",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.dialog-footer{
    margin-left: 75%;
}
</style>