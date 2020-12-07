<template>
  <div style="margin-top: 25px;" class="tab">
    <el-tabs tab-position="left">
      <el-tab-pane label="学习"><learn></learn></el-tab-pane>
      <el-tab-pane label="求助"><seekHelp></seekHelp></el-tab-pane>
      <el-tab-pane label="投稿"><contribute></contribute></el-tab-pane>
      <el-tab-pane label="消息"><message></message></el-tab-pane>
      <el-tab-pane label="充值">充值</el-tab-pane>
      <el-tab-pane label="站点推广计划">站点推广计划</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  import learn from "./centerComponent/learn";
  import contribute from "./centerComponent/contribution";
  import message from "./centerComponent/message";
  import seekHelp from "./centerComponent/seekHelp";
  export default {
    data() {
      return {

      };
    },
    components: {
      learn,
      contribute,
      message,
      seekHelp
    }
  };
</script>

<style>
  .tab .el-tabs__item {
    height: 70px;
    font-size: 15px;
  }
</style>