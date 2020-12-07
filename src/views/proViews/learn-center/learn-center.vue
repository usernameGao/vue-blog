<template>
  <div style="margin-top: 5px;">
    <h3 style="margin-left: 15px;margin-bottom: 5px;">知识导航</h3>
    <learnSideBar :data="data" v-on:seleteData="dataVis(arguments)">
      <!-- 首页 -->
      <index v-if="this.$store.state.flag"></index>
      <!-- 子菜单对应的内容 -->
      <div v-if="!this.$store.state.flag">
        <el-breadcrumb separator-class="el-icon-arrow-right" style="padding-left: 15px;">
          <el-breadcrumb-item>
            {{pageHeader[0]}}
          </el-breadcrumb-item>
          <el-breadcrumb-item v-if="pageHeader[1]">
            {{pageHeader[1]}}
          </el-breadcrumb-item>
        </el-breadcrumb>
        <div style="cursor: pointer;" @click="toDetail(1)">
          <h3 class="title">JAVA基础</h3>
          <div style="margin: 0 auto;">
            <div class="box">
              <ul>
                <li>
                  <div style="margin-top: 10px;">
                    <span style="padding-left:15px">华仔1号</span> <span style="float: right;margin-right: 20px;">嗨</span>
                  </div>
                  <div style="padding-left: 15px;margin-top: 10px;">
                    <p>华仔是个大胖子</p>
                  </div>
                  <div>
                    <p style="position: absolute;bottom: 0;right: 20px;">index</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- heihei -->
    </learnSideBar>
  </div>
</template>

<script>
  import learnSideBar from '@components/learnSideBar.vue';
  import index from './index.vue';
  export default {
    data() {
      return {
        pageHeader: [],
        data: this.$store.state.data
      }
    },

    mounted() {
      console.log(1)
    },
    // watch: {
    //   flag: function (val) {
    //     console.log(val,2222)
    //     this.flag = val;
    //   },
    // },
    // computed: {
    //   fla() {
    //     return this.flag
    //   },
    // },
    methods: {
      dataVis(e) {
        console.log(e)
        this.pageHeader = [e[0], e[1]];
        this.$store.commit('changeFlag', {
          flag: false
        })
        this.flag = this.$store.state.flag;
      },
      toDetail(id) {
        this.$router.push({ path: `/knowledgeDetail/${id}` })
      }
    },
    components: {
      learnSideBar: learnSideBar,
      index: index
    }
  }
</script>

<style>
  .title {
    padding: 20px 0 20px 35px;
  }

  .box {
    padding-left: 35px;
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
    width: 300px;
    height: 150px;
    margin-right: 20px;
    margin-bottom: 20px;
    border: 1px solid rgba(0, 0, 0, 0.18);
    border-radius: 15px;
    background: rgba(146, 203, 230, 0.65);
    position: relative;
  }
</style>