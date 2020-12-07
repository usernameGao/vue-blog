<!-- 学习中心首页 -->
<template>
  <div>
    <div class="rotation" @mouseenter="on_bot_enter" @mouseleave="on_bot_leave">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide><img class="image" src="@assets/1.jpg" alt=""></swiper-slide>
        <swiper-slide><img class="image" src="@assets/2.jpg" alt=""></swiper-slide>
        <swiper-slide><img class="image" src="@assets/3.jpg" alt=""></swiper-slide>
        <swiper-slide><img class="image" src="@assets/4.jpg" alt=""></swiper-slide>
      </swiper>
      <!--以下看需要添加-->
      <!-- <div class="swiper-scrollbar"></div> //滚动条
    <div class="swiper-button-next"></div> //下一项
    <div class="swiper-button-prev"></div> //上一项 -->
      <div class="swiper-pagination" style="left: 50%;transform: translateX(50%);"></div>
    </div>
    <div class="content">
      <h3 style="margin-left: 20px;">精品学习项目</h3>
      <div>
        <div class="contentDetail" v-for="key of programData" :key="key.id" @click="toProgram(key.id)">
          <h4 class="title">{{key.title}}</h4>
          <p class="intro">{{key.content}}</p>
          <div>
            <span style="color: #007aff;padding-left: 35px;font-size: 14px;">共有{{key.count}}个知识点</span> <span
              style="padding-left: 50px;font-size: 14px;">{{key.time}}</span>
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
        swiperOption: {//swiper3
          autoplay: 3000,
          speed: 1000,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          autoplay: {
            delay: 5000,
            stopOnLastSlide: false,
            disableOnInteraction: false
          },
        },
        programData: [
          { id: 1, title: "Java基础", content: "这是java的基础教程....", count: 20, time: "5小时前" },
          { id: 2, title: "HTML基础", content: "这是HTML的基础教程....", count: 20, time: "5小时前" },
          { id: 3, title: "Css基础", content: "这是Css的基础教程....", count: 20, time: "5小时前" },
          { id: 4, title: "JavaScript基础", content: "这是JavaScript的基础教程....", count: 20, time: "5小时前" },
        ]
      }
    },
    methods: {
      //通过获得的swiper对象来暂停自动播放
      on_bot_enter() {
        this.mySwiper.autoplay.stop();
      },
      on_bot_leave() {
        this.mySwiper.autoplay.start();
      },
      toProgram(id) {
        this.$router.push({ path: `/knowledgeDetail/${id}` });
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
  .rotation {
    width: 80%;
    margin: 0 auto;
    /* border: 1px solid rgba(0, 0, 0, 0.18); */
  }

  .image {
    width: 100%;
    height: 250px;
  }

  .content {
    width: 80%;
    margin: 0 auto;
    /* border: 1px solid rgba(0, 0, 0, 0.18); */
    margin-top: 50px;
  }

  .contentDetail {
    display: inline-block;
    width: 280px;
    height: 150px;
    border: 1px solid rgba(0, 0, 0, 0.18);
    border-radius: 5px;
    margin-left: 20px;
    margin-top: 20px;
    cursor: pointer;
  }

  .title {
    padding: 20px 0 20px 35px;
    color: #007aff;
    ;
  }

  .intro {
    padding: 10px 0 20px 35px;
  }
</style>