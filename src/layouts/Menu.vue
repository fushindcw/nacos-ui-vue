<template>
  <div class="menu">
    <el-scrollbar>
      <div class="title">
        <span>NACOS 2.0.2</span>
      </div>
      <el-menu>
        <template
          v-for="(menu, menuIndex) in menuItems"
          :key="menu.key"
          :index="menuIndex + ''"
          :value="menu.key"
        >
          <el-sub-menu
            v-if="menu.children && menu.children.length > 0"
            :key="menu.key"
            :index="menuIndex + ''"
          >
            <template #title >
              {{ getMenuName(menu.key) }}
            </template>
            <el-menu-item-group>
              <el-menu-item
                v-for="(subMenu, subMenuIndex) in menu.children"
                :key="subMenu.key"
                :index="menuIndex + '' + subMenuIndex + ''"
                :value="subMenu.key"
                @click="goPage(subMenu.url)"
              >
                {{ getMenuName(subMenu.key) }}
              </el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
          <el-menu-item v-else @click="goPage(menu.url)">
            {{ getMenuName(menu.key) }}
          </el-menu-item>
        </template>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import menuConfig from "@/layouts/menu.js";
import locales from "@/locales/index.js";
export default {
  data() {
    return {
      menuItems: [],
      localesName: "zhCN",
    };
  },
  created() {
    // console.log(locales);
    menuConfig.map((item) => {
      this.menuItems.push(item);
    });
  },
  methods: {
    getMenuName(key) {
      let localesNameMap = locales[this.localesName];
      let menuName = localesNameMap["MainLayout"][key];
      return menuName;
    },
    goPage(url) {
      console.log(url);
      this.$router.push(url);
    },
  },
};
</script>

<style lang="scss" scoped>
$submenu-font-size: 18px;
.menu {
  height: 100%;
  background-color: #ebedf1;
  .title{
    height: 50px;
    span{
      display: block;
      text-align: center;
      font-weight: bold;
      padding-top: 20px;
    }
  }
}
aside,
ul,
li {
  border-right: none;
  background-color: #ebedf1;
  li {
    background-color: #ebedf1;
    :hover {
      background-color: #f2f3f7;
    }
  }
  :hover {
    background-color: #f2f3f7;
  }
}
</style>