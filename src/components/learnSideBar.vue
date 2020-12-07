<!-- 学习中心侧边栏 -->
<template>
  <el-row class="tac">
    <el-col :span="3">
      <div class="sideMenu" >
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
          <div v-for="(i,index) of data" :key="index">
            <div v-if="i.children.length">
              <el-submenu index="/center">
                <template slot="title">
                  <span>{{i.name}}</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item :index=d.path v-for="d of i.children" :key=d.path @click="seleteData(i.name,d.name)">
                    {{d.name}}</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </div>
            <div v-if="!i.children.length">
              <el-menu-item :index=i.path>
                <span slot="title">{{i.name}}</span>
              </el-menu-item>
            </div>
          </div>
        </el-menu>
        <div class="punchClock">
          <div class="punchLeft">
            <div class="punchdate">
              <div class="punchtext">
                <p>{{week}}</p>
                <p>{{date}}</p>
              </div>
            </div>
          </div>
          <div class="punchRight">
            <p style="font-size: 11px;">学习打卡</p>
            <div class="clearfix" ><span style="float: left;color: #58B051;">271天</span><span style="float: right;">打卡</span></div>
            <p style="font-size: 11px;">累计解锁2902知识点</p>
          </div>
        </div>
      </div>
    </el-col>
    <el-col :span="21">
      <slot></slot>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    props: ['data'],
    data() {
      return {
        week: '',
        date: ''
      };
    },
    created() {
    },

    mounted() {
      this.getDate();
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      seleteData(e, er) {
        // console.log(e)
        this.$emit('seleteData', e, er);
      },
      getDate() {
        let days = new Date().getDay();
        switch (days) {
          case 1:
            this.week = '周一';
            break;
          case 2:
            this.week = '周二';
            break;
          case 3:
            this.week = '周三';
            break;
          case 4:
            this.week = '周四';
            break;
          case 5:
            this.week = '周五';
            break;
          case 6:
            this.week = '周六';
            break;
          case 0:
            this.week = '周日';
            break;
        }
        this.date = new Date().getMonth() + 1 + '/' + new Date().getDate();
      }
    }
  }
</script>


<style>
  .punchClock {
    width: 200px;
    height: 70px;
    /* border: 1px solid #e6e6e6; */
    position: fixed;
    left: 0;
    bottom: 5px;
    cursor: pointer;
  }

  .punchLeft {
    width: 70px;
    height: 70px;
    border-radius: 5px;
    background-color: #4FC19F;
    display: flex;
    float: left;
  }

  .punchdate {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 1px solid #e6e6e6;
    align-self: center;
    margin: 0 auto;
    display: flex;
  }

  .punchtext {
    align-self: center;
    margin: 0 auto;
  }

  .punchRight {
    float: left;
    width: 120px;
    line-height: 2;
    margin-left: 5px;
  }

  .sideMenu .el-menu-vertical-demo {
    height: 100%;
  }

  /* 清除浮动 */
  .clearfix:after,
  .clearfix:before {
    content: "";
    display: table;
  }

  .clearfix:after {
    clear: both;
  }

  .clearfix {
    *zoom: 1;
  }
</style>