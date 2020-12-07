<template>
  <div style="width: 50%;margin: 20px auto;">
    <div>
      article
    </div>
    <div>
      <div class="helpTitle">回答</div>
      <div style="height: 500px;overflow-y: auto;">
        <div class="answer" v-for="key of question" :key="key.id">
          <div style="display: flex;justify-content: space-between;"><span><img class="detailImg" src="@assets/3.jpg"
                alt="">&nbsp;&nbsp;{{key.name}}</span> <span style="align-self: center;margin-right: 10px;"><i
                class="el-icon-star-off"></i>
              39999</span></div>
          <div style="display: flex;justify-content: space-between;margin-top: 10px;">
            <span>{{key.content}}</span>
            <span style="align-self: center;margin-right: 10px;font-size: 15px;cursor: pointer;"
              @click="inputVis(key)"><i class="el-icon-chat-square"></i><span
                style="font-size: 11px;vertical-align: text-top;margin-left: 5px;">回复</span>
            </span></div>
          <p style="margin-top: 10px;margin-bottom: 10px;">{{key.time}}</p>
          <div v-if="key.childern.length">
            <div style="text-indent: 2em;font-size: 10px;padding-top: 5px;border-top: 1px solid #efefef;"
              v-for="(item,index) of key.childern" :key="index">
              <div style="display: flex;justify-content: space-between;"><span><img class="childImg" src="@assets/3.jpg"
                    alt="">&nbsp;&nbsp;{{item.name}}</span> <span style="align-self: center;margin-right: 10px;"><i
                    class="el-icon-star-off"></i>
                  39999</span></div>
              <div style="display: flex;justify-content: space-between;margin-top: 10px;">
                <p style="text-indent: 4em;">{{item.content}}</p>
              </div>
            </div>
          </div>
          <div style="margin-top: 10px;margin-bottom: 5px;" v-if="key.status">
            <el-input type="textarea" :rows="1" placeholder="请输入内容" v-model="textarea" style="width: 80%;">
            </el-input>
            <el-button size="small">确定</el-button>
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
        question: [
          { id: 1, img: 1, name: "小华", content: "这是一个内容，真的是一个内容，不是假的内容，是真的内容，真的真的真的", time: "2020.8.17", childern: [{ name: "小胡", content: "真的假的" }] },
          { id: 2, img: 1, name: "小华", content: "这是一个内容，真的是一个内容，不是假的内容，是真的内容，真的真的真的", time: "2020.8.17", childern: [] },
          { id: 3, img: 1, name: "小华", content: "这是一个内容，真的是一个内容，不是假的内容，是真的内容，真的真的真的", time: "2020.8.17", childern: [{ name: "小康", content: "假的" }] },
          { id: 4, img: 1, name: "小华", content: "这是一个内容，真的是一个内容，不是假的内容，是真的内容，真的真的真的", time: "2020.8.17", childern: [{ name: "小峰", content: "真的" }] },
          { id: 5, img: 1, name: "小华", content: "这是一个内容，真的是一个内容，不是假的内容，是真的内容，真的真的真的", time: "2020.8.17", childern: [] }
        ],
        textarea: ''
      };
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      toHelpDetail(id) {
        this.$router.push({ path: `/helpDetail/${id}` })
      },
      inputVis(item) {
        item.status = !item.status
        this.$forceUpdate();
      }
    },
  }
</script>

<style>
  .detailImg {
    width: 20px;
    height: 20px;
    vertical-align: middle;
  }

  .childImg {
    width: 10px;
    height: 10px;
    vertical-align: middle;
  }

  .helpTitle {
    background-color: #E2E2E2;
    font-size: 14px;
    padding: 2px;
  }

  .answer {
    margin-top: 15px;
    font-size: 13px;
    border-bottom: 1px solid #efefef;
    padding-bottom: 5px;
  }
</style>