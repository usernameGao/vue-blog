<template>
  <div>
    <div class="articlDetail" v-if="!imgBigVis">
      <p style="text-align: center;">title</p>
      <div @click="imgBig"><img src="@assets/3.jpg" alt="" style="width: 100%;"></div>
      <p style="margin-top: 20px;margin-bottom:20px;text-indent: 2em;">article
        把啦啦啦啦啦啦啦啦啦啦啦啊啦啦啦把啦啦啦啦啦啦啦啦啦啦啦啊啦啦啦把啦啦啦啦啦啦啦啦啦啦啦啊啦啦啦把啦啦啦啦啦啦啦啦啦啦啦啊啦啦啦把啦啦啦啦啦啦啦啦啦啦啦啊啦啦啦</p>
      <div style="padding-bottom: 100px;">
        <el-tabs>
          <el-tab-pane> <span slot="label"><i class="el-icon-s-comment">评论</i></span>
            <div>
              <div class="comTitle">热评论</div>
              <div style="height: 300px;overflow-y: auto;">
                <div class="dataContent" v-for="(key,index) of hotData" :key="index">
                  <div style="display: flex;justify-content: space-between;"><span><img class="topicImg"
                        src="@assets/3.jpg" alt="">&nbsp;&nbsp;姓名</span> <span
                      style="align-self: center;margin-right: 10px;"><i class="el-icon-star-off"></i>
                      39999</span></div>
                  <p style="margin-top: 10px;">这是一个内容，真的是一个内容，不是假的内容，是真的内容，真的真的真的</p>
                  <p style="margin-top: 10px;">time</p>
                </div>
              </div>
            </div>
            <div>
              <div class="comTitle">我的评论</div>
              <div class="myNotet">
                <p>content</p>
                <p style="text-align: right;">2020.8.11</p>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane><span slot="label"><i class="el-icon-s-custom">面经</i></span>
            <div style="height: 300px;overflow-y: auto;">
              <div class="dataContent" v-for="(key,index) of expriceData" :key="index">
                <div style="display: flex;justify-content: space-between;"><span><img class="topicImg"
                      src="@assets/3.jpg" alt="">&nbsp;&nbsp;姓名</span> <span
                    style="align-self: center;margin-right: 10px;"><i class="el-icon-star-off"></i>
                    39999</span></div>
                <p style="margin-top: 10px;">这是一个内容，真的是一个内容，不是假的内容，是真的内容，真的真的真的</p>
                <p style="margin-top: 10px;">time</p>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <!-- 遮罩层 -->
    <div class="img-layer" v-if="imgBigVis" @click="imgBig">
      <img src="@assets/3.jpg" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        imgBigVis: false,
        hotData: [
          { id: 1 },
          { id: 1 },
          { id: 1 },
        ],
        expriceData: [
          { id: 1 },
          { id: 1 },
          { id: 1 },
        ]
      }

    },
    methods: {
      imgBig() {
        this.imgBigVis = !this.imgBigVis;
      }
    }
  }
</script>

<style>
  .articlDetail {
    width: 60%;
    margin: 0 auto;
    transition: all 0.3s;
  }

  .img-layer {
    position: fixed;
    left: 0;
    top: 0;
    background-color: #595959;
    z-index: 999;
    height: 100%;
    width: 100%;
    text-align: center;
    transition: all 0.3s;
  }

  .img-layer img {
    z-index: 1000;
    margin-top: 5%;
    margin-bottom: 5%;
    height: 80%;
    width: 80%;
  }

  .topicImg {
    width: 20px;
    height: 20px;
    vertical-align: middle;
  }

  .comTitle {
    background-color: #E2E2E2;
    font-size: 14px;
    padding: 2px;
  }

  .myNotet {
    margin-top: 10px;
    height: 200px;
    overflow-y: auto;
  }

  .dataContent {
    margin-top: 20px;
    font-size: 13px;
    border-bottom: 1px solid #efefef;
    padding-bottom: 5px;
  }
</style>