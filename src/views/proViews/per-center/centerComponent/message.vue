<!-- 消息页面 -->
<template>
  <div>
    <div v-for="(item,index) of messageData" :key="index" style="margin-bottom: 10px;">
      <el-card class="box-card" shadow="hover">
        <div style="padding-bottom: 10px;display: flex;justify-content: space-between;">
          <div><img class="c-img" src="../../../../assets/1.jpg" alt=""><span style="font-size: 14px;"><span
                style="font-weight: bold;">{{item.name}}</span> 评论了你</span>
            <p style="font-size: 14px;text-indent: 3em;">
              {{item.message}}
            </p>
          </div>
          <div style="padding-top: 27px;font-size: 15px;cursor: pointer;">
            <span><i class="el-icon-search"></i><a style="color: #006bb4;">查看</a></span>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        messageData: [
          { name: "小华", message: "太棒了" },
          { name: "小华", message: "太棒了啊" },
          { name: "小华", message: "太棒了呀" },
          { name: "小华", message: "太棒了耶" }
        ],
      };
    },
    mounted() {

    },
    methods: {

    }
  };
</script>