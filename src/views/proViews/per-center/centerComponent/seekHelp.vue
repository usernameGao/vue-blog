<template>
  <div class="tabS">
    <el-tabs v-model="activeName">
      <el-tab-pane label="普通求助" name="first">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date">
            <template slot-scope="scope">
              <div><span class="type">知识点</span><span style="margin-left: 5px;">Java>huyanhua>zizi</span></div>
              <div style="margin-top: 10px;">
                <div style="float: left;">假装有图片</div>
                <div style="margin-left: 30px;float: left;">
                  <span>姓名:hu</span><br>
                  <span>性别:男</span><br>
                  <span>爱好:女</span><br>
                </div>
              </div>
            </template>
          </el-table-column>
          <el-table-column align="right">
            <template slot-scope="scope">
              <div>
                <span>img</span>
                <span style="font-size: 20px;margin-left: 20px;" @click="handleEdit(scope.$index, scope.row)"><i
                    class="el-icon-edit"></i></span>
              </div>
              <div style="margin-top: 20px;">
                <!-- <span>悬赏:90RMB</span> -->
                <span style="margin-left: 10px;"><i style="font-size: 15px;" class="el-icon-chat-dot-round"></i><span
                    style="margin-left: 5px;">回答</span></span>
              </div>
              <!-- <el-button size=" mini" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button> -->
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="悬赏求助" name="second">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date">
            <template slot-scope="scope">
              <div><span class="type">知识点</span><span
                  style="margin-left: 5px;">Java>huyanhua>zizi</span></div>
              <div style="margin-top: 10px;">
                <div style="float: left;">假装有图片</div>
                <div style="margin-left: 30px;float: left;">
                  <span>姓名:hu</span><br>
                  <span>性别:男</span><br>
                  <span>爱好:女</span><br>
                </div>
              </div>
            </template>
          </el-table-column>
          <el-table-column align="right">
            <template slot-scope="scope">
              <div>
                <span>img</span>
                <span style="font-size: 20px;margin-left: 20px;" @click="handleEdit(scope.$index, scope.row)"><i
                    class="el-icon-edit"></i></span>
              </div>
              <div style="margin-top: 20px;">
                <span>悬赏:90RMB</span>
                <span style="margin-left: 10px;"><i style="font-size: 15px;" class="el-icon-chat-dot-round"></i><span
                    style="margin-left: 5px;">回答</span></span>
              </div>
              <!-- <el-button size=" mini" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button> -->
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="我的参与" name="third">我的参与</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeName: 'first',
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
      };
    },
  }
</script>

<style>
  .tabS .el-tabs__item {
    height: 40px;
    font-size: 14px;
  }

  .tabS thead {
    display: none;
  }

  .type {
    background-color: #999999;
    color: #fff;
    padding: 2px;
    font-size: 13px;
  }
</style>