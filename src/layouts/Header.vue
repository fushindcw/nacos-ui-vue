<template>
  <div class="header">
    <el-image id="title" src="img/logo-2000-390.svg" />
    <label id="u-account">{{ username }}</label>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["username"]),
  },
  methods: {
    test() {
      console.log(this.username);
    },
  },
};
</script>
<style lang="scss" scoped>
#title {
  height: 60px;
  width: 100px;
  padding-left: 45px;
}
.header{
  #u-account{
    color: white;
    display: block;
    position: absolute;
    margin-top: -10px;
    margin-left: 50%;
    background-color: red;
  }
}
</style>