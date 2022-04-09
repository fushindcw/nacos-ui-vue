<template>
  <h1>新建配置</h1>
  <div>
    <el-form :model="form" label-width="120px">
      <el-form-item label="Data ID:">
        <el-input v-model="form.dataId" />
      </el-form-item>
      <el-form-item label="Group:">
        <el-input v-model="form.group"/>
      </el-form-item>
      <el-form-item label="描述：">
        <el-input v-model="form.desc" type="textarea" />
      </el-form-item>
      <el-form-item label="配置格式:">
          <el-radio-group v-model="form.type">
              <el-radio v-model="form.type" label="TEXT"/>
              <el-radio v-model="form.type" label="JSON"/>
              <el-radio v-model="form.type" label="XML"/>
              <el-radio v-model="form.type" label="YAML"/>
              <el-radio v-model="form.type" label="HTML"/>
              <el-radio v-model="form.type" label="Properties"/>
          </el-radio-group>
      </el-form-item>
      <el-form-item label="配置内容:">
          <el-input 
          v-model="form.content" 
          type="textarea"
          :rows="10"/>
      </el-form-item>
      <el-form-item style="margin-right: 0px">
        <el-button type="primary" @click="createConfig">Create</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
          group: 'DEFAULT_GROUP',
          type: 'TEXT'
      },
    };
  },
  methods:{
      createConfig(){
          console.log(this.form);
      }
  }
};
</script>