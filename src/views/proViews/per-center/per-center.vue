<!-- 个人中心 -->
<template>
  <div>
    <div class="header">
      <div class="left-ce">
        <div class="img">
          <img style="height: 100px;width: 100px;" src="../../../assets/1.jpg" alt="">
        </div>
        <div style="float: left;margin-left: 18px;margin-top: 20px;">
          <div style="font-size:20px">华仔</div>
          <div style="margin-top:19px;font-size:18px"><i class="el-icon-edit"></i>
            <i class="el-icon-share"></i>
            <i class="el-icon-delete"></i></div>
        </div>
      </div>
      <div class="right-ce">
        <div>
          <p style="visibility: hidden;">占位</p>
          <p>累计打卡387天</p>
        </div>
        <div>
          <p>29992</p>
          <p>知识点</p>
        </div>
        <div>
          <p>29992</p>
          <p>平台币</p>
        </div>
      </div>
    </div>
    <div class="header-bottom">
      <el-radio-group v-model="radio" size="small" @change="radioChange($event)">
        <el-radio-button label="/index">学习时间线</el-radio-button>
        <el-radio-button label="/centerP">个人中心</el-radio-button>
        <el-radio-button label="/concact">联系站长</el-radio-button>
      </el-radio-group>
    </div>
    <router-view />
  </div>
</template>
<script>
  export default {
    data() {
      return {
        radio: this.$route.path
      }
    },
    methods: {
      //通过获得的swiper对象来暂停自动播放
      on_bot_enter() {
        this.mySwiper.autoplay.stop()
      },
      on_bot_leave() {
        this.mySwiper.autoplay.start()
      },
      radioChange(e) {
        switch (e) {
          case '/index':
            this.$router.push({ path: '/index' })
            break;
          case '/centerP':
            this.$router.push({ path: '/centerP' })
            break;
          case '/concact':
            this.$router.push({ path: '/concact' })
            break;
        }
      }
    },
    //计算属性，获得可以操作的swiper对象
    computed: {
      mySwiper() {
        // mySwiper 是要绑定到标签中的ref属性
        return this.$refs.mySwiper.swiper
      },
    },
  }
</script>

<style>
  .header {
    height: 180px;
    background-color: wheat;
  }

  .left-ce {
    float: left;
    margin-top: 40px;
    margin-left: 50px;
  }

  .img {
    float: left;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;

  }

  .right-ce {
    width: 300px;
    float: right;
    margin-top: 70px;
    margin-right: 50px;
    display: flex;
    justify-content: space-around;
  }

  .header-bottom {
    margin-top: 10px;
    margin-left: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #e8e8e8;
  }

  .header-bottom .el-radio-button__inner {
    border: none;
  }

  .header-bottom .el-radio-button:first-child .el-radio-button__inner {
    border: none;
  }
</style>