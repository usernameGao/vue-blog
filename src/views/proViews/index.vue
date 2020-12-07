<!-- 网站首页 -->
<template>
  <div>
    <div class="top">
      <div class="msg">{{msg}}</div>
      <div class="time" v-cloak>
        {{time | dateformat('YYYY-MM-DD HH:mm:ss')}}
      </div>
    </div>
    <div class="bottom">
      <div class="left">
        <div>
          <h4>热点技术</h4>
          <div>
            <div class="box">
              <ul>
                <li v-for="(item,index) in techData" :key="index" @click="toTech(item.id)">
                  <div style="margin-top: 10px;">
                    <span style="padding-left:15px">华仔1号</span> <span style="float: right;margin-right: 20px;">嗨</span>
                  </div>
                  <div style="padding-left: 15px;margin-top: 10px;">
                    <p>华仔是个大胖子</p>
                  </div>
                  <div>
                    <p style="position: absolute;bottom: 0;right: 20px;">{{index + 1}}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <h4>本站学习统计</h4>
          <div>
            <v-chart class="my-chart" :options="bar" />
          </div>
        </div>
        <div>
          <h4>精选悬赏</h4>
          <div class="selectC">
            <div class="selectM" v-for="key of selectData" :key="key.id" @click="toSelect(key.id)">
              <div style="display: flex;">
                <div>
                  <img class="indexImg" src="@assets/3.jpg" alt="">
                </div>
                <div style="padding: 10px 10px 10px 20px;">
                  <p>{{key.title}}</p>
                  <p>{{key.content}}</p>
                </div>
              </div>
              <div style="font-size: 25px;align-self: center;">
                <i class="el-icon-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <h4>今日精选</h4>
        <div style="padding: 15px 15px 25px;">
          <div class="rightC" v-for="key of todayData" :key="key.id" @click="todaySelect(key.id)">
            <div>
              <img class="imgR" src="@assets/3.jpg" alt="">
            </div>
            <div style="padding-top: 20px;flex-grow: 1;">
              <p>{{key.title}}</p>
              <p style="text-indent: 2em;margin-top: 10px;">{{key.content}}</p>
              <p style="text-align: right;margin-top: 10px;">查看全文</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'index',
    // components: {

    // },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        time: '',
        techData: [
          { type: "Html", content: "前端基础" },
          { type: "Html", content: "前端基础" },
          { type: "Html", content: "前端基础" },
          { type: "Html", content: "前端基础" },
          { type: "Html", content: "前端基础" },
          { type: "Html", content: "前端基础" },
          { type: "Html", content: "前端基础" },
          { type: "Html", content: "前端基础" },
        ],
        selectData: [
          { id: 1, img: 'ddd', content: "Ab巴拉拉", title: "靓仔文章" },
          { id: 1, img: 'ddd', content: "Ab巴拉拉", title: "靓仔文章" },
          { id: 1, img: 'ddd', content: "Ab巴拉拉", title: "靓仔文章" },
          { id: 1, img: 'ddd', content: "Ab巴拉拉", title: "靓仔文章" },
          { id: 1, img: 'ddd', content: "Ab巴拉拉", title: "靓仔文章" },
        ],
        todayData: [
          { id: 1, img: 'ddd', content: "这是一个不成熟的例子，如果你想成熟，先吃点香蕉，再搞点苹果，可能就不想成熟了，因为会被吃掉", title: "靓仔文章" },
          { id: 1, img: 'ddd', content: "Ab巴拉拉", title: "靓仔文章" },
          { id: 1, img: 'ddd', content: "Ab巴拉拉", title: "靓仔文章" },
          { id: 1, img: 'ddd', content: "Ab巴拉拉", title: "靓仔文章" },
          { id: 1, img: 'ddd', content: "Ab巴拉拉", title: "靓仔文章" },
        ],
        bar: {
          xAxis: {
            type: 'category',
            boundaryGap: false,
            splitLine: { show: false },
            // maxInterval: 3600 * 24 * 1000,
            // data:['1596770128','1596683728','1596770128','1596770128','1596770128','1596770128']
            // data: ['2020-7-1', '2020-7-2', '2020-7-3', '2020-7-4', '2020-7-5', '2020-7-6', '2020-7-7', '2020-7-8', '2020-7-9']
          },
          yAxis: {
            type: 'value',
            splitLine: { show: false },
            // boundaryGap: false
            boundaryGap: [0, '30%'],

          },
          visualMap: {
            type: 'piecewise',
            show: false,
            dimension: 0,
            seriesIndex: 0,
            pieces: [{
              gt: 1,
              lt: 3,
              color: 'rgba(0, 180, 0, 0.5)'
            }, {
              gt: 5,
              lt: 7,
              color: 'rgba(0, 180, 0, 0.5)'
            }]
          },
          series: [
            {
              type: 'line',
              smooth: 0.6,
              symbol: 'none',
              lineStyle: {
                color: '#3287F1',
                width: 1
              },
              areaStyle: {
                color: '#D1E9FC' //改变区域颜色
              },
              markLine: {
                symbol: ['none', 'none'],
                label: { show: false },
                data: [
                  { xAxis: 1 },
                  { xAxis: 3 },
                  { xAxis: 5 },
                  { xAxis: 7 }
                ]
              },
              itemStyle: {
                color: '#fff'
              },
              // data: [500, 300, 700, 100, 200, 600, 900, 800]
              data: [
                ['2019-10-10', 200],
                ['2019-10-11', 400],
                ['2019-10-12', 650],
                ['2019-10-13', 500],
                ['2019-10-14', 250],
                ['2019-10-15', 300],
                ['2019-10-16', 450],
                ['2019-10-17', 300],
                ['2019-10-18', 100]
              ]
            }
          ]
        }
      }
    },
    created() {
      let _this = this; // 声明一个变量指向Vue实例this，保证作用域一致
      this.timer = setInterval(() => {
        _this.time = new Date(); // 修改数据date
      }, 1000)
    },
    mounted() {

    },
    methods: {
      toSelect(id) {
        this.$router.push({ path: `/helpDetail/${id}` })
      },
      todaySelect(id) {
        this.$router.push({ path: `/articlDetail/${id}` })
      },
      toTech(id) {
        this.$router.push({ path: `/knowledgeDetail/${id}` })
      }
    },
    beforeDestroy() {
      if (this.timer) {
        clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .top {
    height: 180px;
    width: 100%;
    background-color: black;
    color: #fff;
    position: relative;
    margin: 0 auto;
  }

  .msg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .time {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }

  .left {
    min-width: 48%;
    margin-left: 10px;
  }

  .right {
    min-width: 48%;
  }

  .bottom {
    padding-top: 10px;
    display: flex;
  }

  /* 防止渲染过慢 */
  [v-cloak] {
    display: none;
  }


  .box {
    padding: 15px 15px 25px 15px;
    font-size: 14px;
  }

  .box ul {
    overflow: hidden;
    /* margin-right: -20px; */
    margin-bottom: -20px;
    margin-top: 0;
    list-style: none;
  }

  .box li {
    /* float: left; */
    display: inline-block;
    width: 150px;
    height: 75px;
    margin-right: 20px;
    margin-bottom: 20px;
    border: 1px solid rgba(0, 0, 0, 0.18);
    border-radius: 5px;
    background: rgba(146, 203, 230, 0.65);
    position: relative;
    cursor: pointer;
  }

  /* 图片样式 */
  .indexImg {
    height: 40px;
    width: 40px;
    border-radius: 5px;
    padding: 10px 10px 10px 20px;
  }

  .selectC {
    border-bottom: 1px solid #e6e6e6;
    margin-top: 10px;
    cursor: pointer;
    margin-bottom: 10px;
  }

  .selectM {
    border-top: 1px solid #e6e6e6;
    display: flex;
    justify-content: space-between;
  }

  .myChart {
    width: 100%;
    height: 100%;
    margin-left: 50px;
  }

  .rightC {
    display: flex;
    border: 1px solid #e6e6e6;
    margin-top: 10px;
    cursor: pointer;
  }

  .imgR {
    width: 150px;
    padding: 20px 50px;
  }
</style>