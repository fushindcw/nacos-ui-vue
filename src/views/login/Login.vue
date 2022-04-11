<template>
  <div class="login-bg">
    <div class="login-panel">
      <div class="login-body">
        <el-form v-model="loginInfo">
          <el-form-item>
            <el-input v-model="loginInfo.username" placeholder="请输入用户名" />
          </el-form-item>
          <el-form-item>
            <el-input v-model="loginInfo.password" type="password" placeholder="请输入密码" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="login">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
import {login} from '@/api/user.js';
export default {
  name: "Login",
  data() {
    return {
      loginInfo: {
        username: "",
        password: "",
      },
    };
  },
  methods:{
      login(){
        login(this.loginInfo).then(result=>{
            if(result){
                this.$router.push('/');
            }
        })
      }
  }
};
</script>

<style lang="scss" scoped>
.login-bg {
  height: 100%;
  width: 100%;
  background: url("/img/black_dot.png") 0% 0% / 14px 14px repeat;
}
.login-panel {
  position: absolute;
  right: 40px;
  top: 80px;
  height: 540px;
  width: 480px;
  border: 0;
  background-color: white;
  border-radius: 3px;
  .login-body {
    width: 70%;
    height: 70%;
    margin-left: 70px;
    margin-top: 200px;
  }
  ::v-deep .el-input__inner {
    height: 50px;
  }
}
</style>
