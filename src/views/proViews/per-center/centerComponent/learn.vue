<template>
  <div>
    <h5 class="title-le">学习统计</h5>
    <div style="margin-top:20px;display: flex">
      <div class="card">
        <h4 class="title-le">本月打卡统计</h4>
        <div style="margin-left: 10px;margin-top: 10px;font-size: 14px;"><i class="el-icon-time"></i>本月共计打卡399天</div>
        <div class="calenda">
          <el-calendar v-model="value">
            <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法✘-->
            <template slot="dateCell" slot-scope="{date, data}">
              <p>
                {{ data.day.split('-').slice(2)[0] }} {{ getDay(data) ? '✔️' : ''}}
              </p>
            </template>
          </el-calendar>
        </div>
      </div>
      <div class="card1">
        <h4 class="title-le">学习模块解锁统计</h4>
        <div class="selectMenu">
          <div v-for="(data,index) of menuData" :key="index">
            <div class="firstMenu">
              <div style="float: left; " @click="close(data)"><i class="el-icon-arrow-down el-icon--right"
                  style="transition: transform .3s;"
                  :style="{'transform':data.vis?'':'rotate(-90deg)'}"></i>{{data.name}}</div>
              <div style="float: right;">
                <el-progress :percentage="20" style="width: 250px;"></el-progress>
              </div>
            </div>
            <transition name="fade">
              <div v-if="data.children.length&&data.vis">
                <div v-for="i of data.children">
                  <div class="liContent">
                    <div style="float: left;"><span></span><span
                        style="margin:15px 15px 15px 50px;font-size: 14px;">{{i.name}}</span>
                    </div>
                    <div style="float: right;">
                      <el-progress :percentage="20" style="width: 200px;margin-right: 15px;" color="#5cb87a">
                      </el-progress>
                    </div>
                  </div>
                </div>
              </div>
            </transition>
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
        cardData: [
          '2020-07-07',
          '2020-07-08'
        ],
        menuData: this.$store.state.data,
        value: new Date()
      };
    },
    mounted() {
      this.menuData.forEach(item => {
        item.vis = false;
      });
      console.log(this.menuData)
    },
    methods: {
      getDay(day) {
        // console.log(day)
        return this.cardData.some((item => {
          return day.day === item;
        }))
      },
      close(data) {
        data.vis = !data.vis;
        this.$forceUpdate();
        console.log(data.vis)
      }
    }
  };
</script>

<style>
  .card {
    margin-left: 30px;
    width: 40%;
    /* float: left; */
  }

  .card1 {
    margin-top: 10px;
    margin-left: 100px;
    width: 50%;
    /* float: left; */
  }

  /* .calenda .el-calendar__button-group {
    display: none;
  } */

  .selectBac {
    color: #1989FA;
  }

  .calenda .el-calendar-table .el-calendar-day {
    height: 50px;
  }

  /* 下拉菜单 */
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }

  .el-icon-arrow-down {
    font-size: 12px;
  }

  /* 包裹菜单元素 */
  .selectMenu {
    margin-top: 70px;
    margin-left: 20px;
    width: 60%;
    font-size: 25px;
  }

  /* 一级菜单 */
  .firstMenu {
    font-size: 14px;
    margin: 15px;
    overflow: hidden;
  }

  /* 各种title */
  .title-le {
    margin-left: 10px;
    margin-top: 10px;
  }

  .liContent {
    overflow: hidden;
    margin-top: 5px;
  }

  .fade-enter-active,
  .fade-leave-active {
    /* transition: opacity .1s; */
    transition: all 0.3s;
    max-height: 230px;
  }

  .fade-enter,
  .fade-leave-to
  /* .fade-leave-active below version 2.1.8 */
    {
    /* display: none; */
    opacity: 0;
    max-height: 0px;
  }
</style>