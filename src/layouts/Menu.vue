<template>
  <div class="menu">
    <el-scrollbar>
      <el-menu>
        <template v-for="(menu,menuIndex) in menuItems" :key="menu.key" :index="menuIndex+''" :value="menu.key">
        <el-sub-menu v-if="menu.children && menu.children.length > 0" :key="menu.key" :index="menuIndex+''">
          <template #title>
            {{getMenuName(menu.key)}}
          </template>
          <el-menu-item-group>
            <el-menu-item v-for="(subMenu, subMenuIndex) in menu.children" 
            :key="subMenu.key" 
            :index="subMenuIndex+''" 
            :value="subMenu.key" @click="goPage(subMenu.url)">
              {{getMenuName(subMenu.key)}}
            </el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-menu-item v-else>
          {{getMenuName(menu.key)}}
        </el-menu-item>
        </template>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import menuConfig from '@/layouts/menu.js'
import locales from '@/locales/index.js'
export default{
  name: "menu",
  data(){
    return {
      menuItems: [],
      localesName: 'zhCN'
    }
  },
  created(){
    console.log(locales);
    menuConfig.map(item=>{
      this.menuItems.push(item);
    });
  },
  methods:{
    getMenuName(key){
      let localesNameMap = locales[this.localesName];
      let menuName = localesNameMap['MainLayout'][key];
      return menuName;
    },
    goPage(url){
      this.$router.push(url);
    }
  }
}
</script>

<style lang="scss" scoped>
</style>