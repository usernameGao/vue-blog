<template>
  <div class="articlBox">
    <div class="articleLeft" v-if="!note">
      <div>
        <h4>精选留言</h4>
        <div style="display: flex;margin-top: 20px;">
          <img class="artImg" src="@assets/3.jpg" alt="">
          <p style="margin-left: 5px;">content</p>
        </div>
        <div style="margin-top: 10px;margin-left: 60%;">
          <el-button type="danger" size="mini" @click="visNote()">留言评论</el-button>
        </div>
      </div>
    </div>

    <div class="articleNote" v-if="note">
      <div style="margin-top: 20px;">
        <div style="overflow: hidden;text-align: center;">
          <div style="float:left;cursor: pointer;font-size: 13px;color: #409eff;" @click="note=false"><i
              class="el-icon-back"></i>返回
          </div>
          全部留言
        </div>
        <div style="height: 300px;overflow-y: auto;">
          <div style="margin-top: 20px;font-size: 13px;">
            <div style="display: flex;justify-content: space-between;"><span><img class="detailImg" src="@assets/3.jpg"
                  alt="">&nbsp;&nbsp;姓名</span> <span style="align-self: center;margin-right: 10px;"><i
                  class="el-icon-star-off"></i>
                39999</span></div>
            <p style="margin-top: 10px;">这是一个内容，真的是一个内容，不是假的内容，是真的内容，真的真的真的</p>
            <p style="margin-top: 10px;">time</p>
          </div>
          <div style="margin-top: 20px;font-size: 13px;">
            <div style="display: flex;justify-content: space-between;"><span><img class="detailImg" src="@assets/3.jpg"
                  alt="">&nbsp;&nbsp;姓名</span> <span style="align-self: center;margin-right: 10px;"><i
                  class="el-icon-star-off"></i>
                39999</span></div>
            <p style="margin-top: 10px;">这是一个内容，真的是一个内容，不是假的内容，是真的内容，真的真的真的</p>
            <p style="margin-top: 10px;">time</p>
          </div>
          <div style="margin-top: 20px;font-size: 13px;">
            <div style="display: flex;justify-content: space-between;"><span><img class="detailImg" src="@assets/3.jpg"
                  alt="">&nbsp;&nbsp;姓名</span> <span style="align-self: center;margin-right: 10px;"><i
                  class="el-icon-star-off"></i>
                39999</span></div>
            <p style="margin-top: 10px;">这是一个内容，真的是一个内容，不是假的内容，是真的内容，真的真的真的</p>
            <p style="margin-top: 10px;">time</p>
          </div>
        </div>

        <div>
          <div class="myNote">
            我的留言
          </div>
          <div class="myNotec">
            <p>content</p>
            <p style="text-align: right;">2020.8.11</p>
          </div>
          <div>
            <el-input type="textarea" autosize placeholder="请输入内容" v-model="textarea1" style="width: 60%">
            </el-input>
            <el-button  size="small">发布</el-button>
            <el-button  size="small" style="margin-left:0px" @click="note=false">返回</el-button>
          </div>
        </div>
      </div>
    </div>

    <div class="articleRight">
      <div>
        <p>title</p>
        <p>name胡小华 发表自。。。 三天前</p>
        <div>
          把啦啦啦啦啦啦啦
          把啦啦啦啦啦啦啦
        </div>
      </div>
      <div style="margin-left: 50px;">
        <div v-qr="options"></div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        options: {
          text: 'www.baidu.com',
          width: 80,
          height: 80
        },
        note: false,
        textarea1: ''
      };
    },
    methods: {
      visNote() {
        this.note = true;
      }
    }
  }

</script>

<style>
  .artImg {
    width: 40px;
    height: 40px;
  }

  .articlBox {
    display: flex;
    margin-top: 10px;
  }

  .articleNote {
    width: 30%;
    align-self: center;
    padding-left: 30px;
    padding-bottom: 10px;
    padding-right: 10px;
    border: 1px solid #e6e6e6;
    border-left: none;
    animation: bounceInLeft 1s 1 cubic-bezier(0.215, 0.610, 0.355, 1.000)
  }

  @keyframes bounceInLeft {
    0% {
      opacity: 0;
      /* transform: translate3d(0px, 0, 0); */
    }

    60% {
      opacity: 0.5;
      /* transform: translate3d(25px, 0, 0); */
    }

    75% {
      opacity: 0.75;
      /* transform: translate3d(30px, 0, 0); */
    }

    90% {
      opacity: 0.9;
      /* transform: translate3d(50px, 0, 0); */
    }

    100% {
      opacity: 1;
      /* transform: translate3d(10px, 0, 0); */
    }
  }

  .articleLeft {
    width: 30%;
    align-self: center;
    padding-left: 30px;
    padding-bottom: 30px;
  }

  .articleRight {
    display: flex;
    width: 60%;
    margin-left: 80px;
  }

  .detailImg {
    width: 20px;
    height: 20px;
    vertical-align: middle;
  }

  .myNote {
    border-bottom: 1px solid #e6e6e6;
    text-align: center;
    margin-top: 20px;
    padding-bottom: 10px;
  }

  .myNotec {
    margin-top: 10px;
    height: 200px;
    overflow-y: auto;
  }
</style>