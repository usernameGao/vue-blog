<template>
  <div class="headerI">
    <el-menu :default-active="this.$route.path" class="el-menu-demo" mode="horizontal" @select="handleSelect"
      background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" router>
      <el-menu-item>JAVA程序生活</el-menu-item>
      <el-menu-item index="/">首页中心</el-menu-item>
      <el-menu-item index="/selected">程序杂谈</el-menu-item>
      <el-menu-item index="/center" @click="changeView">学习中心</el-menu-item>
      <el-menu-item index="/help">求助中心</el-menu-item>
      <el-menu-item index="4">成长路线</el-menu-item>
      <div class="btn">
        <div v-if="!this.$store.state.loginStatus">
          <router-link to="/register">
            <el-button size="mini" type="info">注册</el-button>
          </router-link>
          <router-link to="/login">
            <el-button size="mini"><span style="color: black;">登录</span></el-button>
          </router-link>
        </div>
        <div v-if="this.$store.state.loginStatus">
          <router-link to="/index">
            <el-button size="mini" @click="cancelSelect()"><span style="color: black;">个人中心</span></el-button>
          </router-link>
          <el-button size="mini" @click="logout()"><span style="color: black;">退出</span></el-button>
        </div>
      </div>
    </el-menu>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: this.$route.path,
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      changeView() {
        this.$store.commit('changeFlag', {
          flag: true
        })
        // console.log(this.$store.state.flag)
      },
      cancelSelect() {
        this.activeIndex = '/';
        console.log(this.activeIndex);
      },
      logout() {
        this.$store.commit('changeLoginStatus','');
        sessionStorage.clear()
        this.$router.push({ path: '/' })
      }
    },
  }
</script>

<style>
  .btn {
    padding-top: 15px;
    padding-right: 40px;
    float: right;
  }

  .btn a {
    text-decoration-line: none;
    color: #fff;
    margin-left: 5px;
  }

  .headerI .el-menu.el-menu--horizontal {
    border-bottom: none;
  }
</style>