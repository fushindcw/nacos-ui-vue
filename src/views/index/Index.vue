<template>
  <el-container>
    <el-header>
      <Header />
    </el-header>
    <el-container>
      <el-aside><Menu /></el-aside>
      <el-main><Mainlayout /></el-main>
    </el-container>
  </el-container>
</template>

<script>
import { Header, Mainlayout, Menu } from "@/layouts";
export default {
  name: "index",
  components: {
    Header,
    Mainlayout,
    Menu,
  },
};
</script>

<style lang="scss" scoped>
.el-container {
  height: 100%;
}
.el-header {
  padding: 0;
  background-color: rgb(61, 58, 58);
}
.el-aside {
  width: 180px;
  height: 100%;
}
</style>