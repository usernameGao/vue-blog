<template>
  <el-tabs v-model="activeName" class="tab-c">
    <el-tab-pane label="发起投稿" name="first">
      <div style="padding-bottom: 100px;">
        <div class="articleName">
          <span style="font-size: 18px;">标题</span>
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </div>
        <div style="width: 95%;">
          <editorBar v-model="detail" :isClear="isClear" @change="change"></editorBar>
          <el-button style="margin-top: 20px;float: right;" size="small">发布投稿</el-button>
        </div>
      </div>
    </el-tab-pane>
    <el-tab-pane label="我的投稿" name="second">
      <div v-for="(item,index) of articles" :key="index" style="margin-bottom: 10px;">
        <el-card class="box-card" shadow="hover">
          <div style="padding-bottom: 10px;display: flex;justify-content: space-between;">
            <div><img class="c-img" src="@assets/1.jpg" alt=""><span
                style="font-size: 14px;">{{item.title}}</span>
              <p style="font-size: 14px;text-indent: 2em;">
                {{item.content}}
              </p>
            </div>
            <div style="padding-top: 27px;">
              <span><i class="el-icon-delete"></i></span>
            </div>
          </div>
        </el-card>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
  import EditorBar from '@components/wangEditor'
  export default {
    components: { EditorBar },
    data() {
      return {
        isClear: false,
        detail: "",
        activeName: 'first',
        input: '',
        articles: [
          { title: '文章标题', content: "content把啦啦啦啦，据不完全统计，中国90后每年生育数量下降4600多万人，是什么原因，90后不再愿意生育了呢，是人性的损失还是道德的沦丧，还是罪恶的RMB，我们拭目以待。" },
          { title: '文章标题', content: "content把啦啦啦啦，据不完全统计，中国90后每年生育数量下降4600多万人，是什么原因，90后不再愿意生育了呢，是人性的损失还是道德的沦丧，还是罪恶的RMB，我们拭目以待。" },
          { title: '文章标题', content: "content把啦啦啦啦，据不完全统计，中国90后每年生育数量下降4600多万人，是什么原因，90后不再愿意生育了呢，是人性的损失还是道德的沦丧，还是罪恶的RMB，我们拭目以待。" },
          { title: '文章标题', content: "content把啦啦啦啦，据不完全统计，中国90后每年生育数量下降4600多万人，是什么原因，90后不再愿意生育了呢，是人性的损失还是道德的沦丧，还是罪恶的RMB，我们拭目以待。" },
          { title: '文章标题', content: "content把啦啦啦啦，据不完全统计，中国90后每年生育数量下降4600多万人，是什么原因，90后不再愿意生育了呢，是人性的损失还是道德的沦丧，还是罪恶的RMB，我们拭目以待。" },
        ]
      }
    },
    methods: {
      change(val) {
        console.log(val)

      },
    }
  };
</script>

<style>
  .articleName {
    margin-bottom: 10px;
  }

  .articleName .el-input {
    width: 200px;
    vertical-align: bottom;
  }

  .articleName .el-input__inner {
    border: none;
    border-bottom: 1px solid #DCDFE6;
    height: 27px;
  }

  .tab-c .el-tabs__item {
    height: 40px;
    font-size: 14px;
  }

  .c-img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    vertical-align: middle;
  }
</style>