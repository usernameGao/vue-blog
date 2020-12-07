<!-- 历史文章，精选文章 -->
<template>
  <div>
    <div style="margin-left:20px">
      <el-radio-group v-model="radio">
        <el-radio :label="1">全部分类</el-radio>
        <el-radio :label="2">技术分享</el-radio>
        <el-radio :label="3">热点话题</el-radio>
        <el-radio :label="4">其他文章</el-radio>
      </el-radio-group>
      <div style="margin-top: 30px;">
        <div class="tableLine" v-for="key of tableData" :key="key.id" @click="toDetail(key.id)">
          <div style="width: 50%;">
            <div style="display: flex;">
              <div><img class="hisImg" src="@assets/3.jpg" alt=""></div>
              <div style="line-height: 1.5;margin-left: 10px;">
                <p>{{ key.title}}</p>
                <p style="margin-top: 10px;">{{ key.content}}</p>
              </div>
            </div>
          </div>
          <div class="operaRight">
            <p>投稿人：{{ key.auth }}</p>
            <div style="text-align: right;margin-top: 30px;">
              <i class="el-icon-thumb"></i>点赞:{{ key.like }} 次
              <i style="margin-left: 20px;" class="el-icon-chat-square"></i>评论:{{ key.comment }}条
              <i style="margin-left: 20px;" class="el-icon-reading"></i>阅读:{{ key.read }} 次
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        radio: 1,
        tableData: [{
          id:1,
          title: '测试一号',
          auth: '王小虎',
          content: '上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄',
          like: 389,
          comment: 290,
          read: 900
        }, {
          id:2,
          title: '测试一号',
          auth: '王小虎',
          content: '上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄',
          like: 389,
          comment: 290,
          read: 900
        }, {
          id:3,
          title: '测试一号',
          auth: '王小虎',
          content: '上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄',
          like: 389,
          comment: 290,
          read: 900
        },]
      };
    },
    methods: {
      toDetail(id) {
        this.$router.push({ path: `/articlDetail/${id}` })
      }
    }
  }
</script>

<style lang="less">
  .tableLine {
    display: flex;
    justify-content: space-between;
    padding: 20px 0 10px 0;
    font-size: 14px;
    border-bottom: 1px solid #e6e6e6;
    cursor: pointer;
  }

  .hisImg {
    width: 40px;
    height: 40px;
  }

  .operaRight {
    text-align: right;
    line-height: 1.5;
    margin-right: 20px;
  }
</style>