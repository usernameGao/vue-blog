<!-- 面试杂谈 -->
<template>
  <div>
    <h3>话题中心</h3>
    <p class="text">共251话题 共22213人参与</p>
    <div class="allContent">
      <div v-for="(item,index) of items" :key="index" class="item" @click="toTopicDetail(item.id)">
        <div class="itemContent">
          <div><img src="@assets/3.jpg" alt="" style="width: 100%;"></div>
          <div>
            <p>title</p>
            <p>content</p>
          </div>
          <div>
            <span>当前参与人数：200</span>
            <img src="">
          </div>
        </div>
        <!-- <div style="border: 1px solid black;box-shadow:2px 5px 5px 0 rgba(0, 0, 0, 0.18);"
          :style="{'height': (index % 2 === 0) ? '100px' : '120px' }">{{item.content}}</div>
        <div style="border: 1px solid black;margin-top: 5px;box-shadow:2px 5px 5px 0 rgba(0, 0, 0, 0.18);"
          :style="{'height': (index % 2 === 0) ? '120px' : '100px' }">{{item.content2}}</div> -->
      </div>
    </div>
  </div>
  <!-- :style="{'height': (index % 2 === 0) ? '100px' : '120px' }" -->
</template>

<script>
  export default {
    data() {
      return {
        flag: false,
        items: [
          { id: 1, img: 1, content: 2, id2: 1, img2: 1, content2: 2 },
          { id: 1, img: 1, content: 2, id2: 1, img2: 1, content2: 2 },
          { id: 1, img: 1, content: 2, id2: 1, img2: 1, content2: 2 },
          { id: 1, img: 1, content: 2, id2: 1, img2: 1, content2: 2 },
          { id: 1, img: 1, content: 2, id2: 1, img2: 1, content2: 2 },
          { id: 1, img: 1, content: 2, id2: 1, img2: 1, content2: 2 },
          { id: 1, img: 1, content: 2, id2: 1, img2: 1, content2: 2 },
          { id: 1, img: 1, content: 2, id2: 1, img2: 1, content2: 2 },
          { id: 1, img: 1, content: 2, id2: 1, img2: 1, content2: 2 },
          { id: 1, img: 1, content: 2, id2: 1, img2: 1, content2: 2 },
          { id: 1, img: 1, content: 2, id2: 1, img2: 1, content2: 2 },
          { id: 1, img: 1, content: 2, id2: 1, img2: 1, content2: 2 },
        ]
      }
    },
    methods:{
      toTopicDetail(id) {
        this.$router.push({ path: `/topicDetail/${id}` })
      }
    }
  }
</script>

<style>
  .text {
    font-size: 10px;
    padding-top: 15px;
  }

  .allContent {
    width: 100%;
    background-color: #F5F5F5;
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
  }

  .item {
    padding: 20px;
    font-size: 14px;
    width: 200px;
    /* float: left; */
    cursor: pointer;
  }

  .itemContent {
    background-color: #fff;
    padding: 10px;
    transition: all .5s;
    margin-top: 10px;
  }

  .itemContent:hover {
    margin-top: 0px;
    /*和hover的margin-top有对比，原无10,现在0，相当于上移了,30px*/
    box-shadow: 0 0 20px 2px #918f8f;
    /*盒子阴影*/
    /* transition: all 1s; */
  }
</style>