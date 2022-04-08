<template>
  <div class="menu">
    <div class="menu-title">
      <span>nacos 2.0.3</span>
    </div>
    <el-scrollbar>
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
            <template #title>
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
  name: "menu",
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
.menu {
  height: 100%;
  // border-right: solid 1px rgb(187, 179, 179);
  background-color: #ebedf1;
}
aside,
ul,
li {
  $font-size: 18px;
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
.menu-title {
  width: 100%;
  height: 50px;
  background-color: #d9dee4;
  span {
    display: block;
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
  }
}
</style>
