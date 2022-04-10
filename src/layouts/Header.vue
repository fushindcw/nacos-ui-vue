<template>
    <div class="header">
        <el-image id="title" src="img/logo-2000-390.svg"/>
        <el-dropdown>
            <el-icon style="margin-right: 0px; margin-top: 5px"><setting/></el-icon>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>View</el-dropdown-item>
                <el-dropdown-item>Add</el-dropdown-item>
                <el-dropdown-item>Delete</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <span>Tom</span>
    </div>
</template>

<style lang="scss" scoped>
#title{
  height: 60px;
  width: 100px;
  padding-left: 45px;
}
</style>