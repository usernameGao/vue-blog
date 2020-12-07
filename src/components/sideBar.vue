<!-- 杂谈侧边栏 -->
<template>
  <el-row class="tac">
    <el-col :span="3">
        <el-menu default-active="/selected" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
          router>
          <div v-for="(title,index) of data" :key="index">
            <el-menu-item :index=title.id>
              <i :class=title.icon></i>
              <span>{{title.title}}</span>
            </el-menu-item>
          </div>
        </el-menu>
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
       
      };
    },

    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    // watch: {
    //   'height.height': {
    //     handler(newHeight, oldHeight) {
    //       // this.height.height = window.innerHeight - 60 + 'px';
    //       console.log( this.height.height)
    //       console.log(newHeight, oldHeight)
    //     },
    //     deep: true,
    //     immediate: true
    //   }
    // }
  }
</script>

<style>

</style>