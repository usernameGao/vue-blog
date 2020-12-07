<!-- 求助中心 -->
<template>
  <div class="content" style="margin: 0 auto;width: 80%;margin-top: 50px;">
    <el-radio-group v-model="radio">
      <el-radio-button label="1">普通求助</el-radio-button>
      <el-radio-button label="2">悬赏求助</el-radio-button>
    </el-radio-group>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date">
        <template slot-scope="scope">
          <div @click="toHelpDetail(2)" style="cursor: pointer;">
            <div><span>知识点</span><span style="margin-left: 5px;">Java>huyanhua>zizi</span></div>
            <div style="margin-top: 10px;display: flex;">
              <div>假装有图片</div>
              <div style="margin-left: 30px;">
                <span>姓名:hu</span><br>
                <span>性别:男</span><br>
                <span>爱好:女</span><br>
              </div>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column align="right">
        <template slot="header" slot-scope="scope">
          <!-- <el-input v-model="search" size="mini" placeholder="输入关键字搜索" /> -->
          <div class="filter">
            <span @click="statusChange(1)">时间<i
                :class="[timeStatus?'el-icon-caret-bottom' : 'el-icon-caret-top']"></i></span>
            <span @click="statusChange(2)">解决状态<i
                :class="[status?'el-icon-caret-bottom' : 'el-icon-caret-top']"></i></span>
            <span @click="statusChange(3)">悬赏币额<i
                :class="[moneyStatus?'el-icon-caret-bottom' : 'el-icon-caret-top']"></i></span>
          </div>

        </template>
        <template slot-scope="scope">
          <div style="cursor: pointer;" @click="toHelpDetail(2)">
            <div>
              <span>img</span>
              <span style="font-size: 20px;margin-left: 20px;" @click.stop="handleEdit(scope.$index, scope.row)"><i
                  class="el-icon-edit"></i></span>
            </div>
            <div style="margin-top: 20px;">
              <span>悬赏:90RMB</span>
              <span style="margin-left: 10px;"><i style="font-size: 15px;" class="el-icon-chat-dot-round"></i><span
                  style="margin-left: 5px;">回答</span></span>
            </div>
          </div>
          <!-- <el-button size=" mini" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button> -->
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        radio: 1,
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        // search: ''
        timeStatus: true,
        status: true,
        moneyStatus: true
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
      statusChange(id) {
        if (id === 1) {
          this.timeStatus = !this.timeStatus;
        } else if (id === 2) {
          this.status = !this.status;
        } else {
          this.moneyStatus = !this.moneyStatus;
        }

      }
    },
  }
</script>

<style>
  .filter {
    text-align: right;
    cursor: pointer;
  }

  .filter span {
    margin-left: 10px;
  }
</style>