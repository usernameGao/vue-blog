<!-- 程序杂谈 -->
<template>
  <div style="margin-top: 15px;">
    <sideBar v-bind:data="data">
      <router-view />
    </sideBar>
  </div>
</template>

<script>
  import sideBar from '@components/sideBar.vue';
  export default {
    name: 'procedure',
    data() {
      return {
       data : [
         {id:'/selected',title:"精选文章",icon:'el-icon-s-cooperation'},
         {id:'/histroy',title:"历史文章",icon:'el-icon-s-promotion'},
         {id:'/topic',title:"话题杂谈",icon:'el-icon-s-grid'},
       ]
      }
    },
    components: {
      sideBar: sideBar
    }
  }
</script>