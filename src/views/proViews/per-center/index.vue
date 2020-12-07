<template>
  <div class="block">
    <el-timeline>
      <el-timeline-item timestamp="2018/4/12" placement="top">
        <el-card>
          <div style="overflow: hidden;">
            <div style="float: left;">
              <div style="float: left;"><img style="height: 40px;width: 40px;vertical-align:middle;"
                  src="@assets/1.jpg" alt=""><span>华仔</span></div>
            </div>
            <div style="float: right;">
              相信明天会更好的
            </div>
          </div>
          <h4>更新 Github 模板</h4>
          <div style="margin-top: 10px;">
            <el-button type="info" @click="writeNote=!writeNote" plain  size="small">添加笔记</el-button>
          </div>
          <el-input type="textarea" v-if="writeNote" :rows="2" placeholder="请输入内容" maxlength="30" show-word-limit
            v-model="textarea" style="margin-top: 5px;width: 30%;" @keyup.enter.native="sureText()">
          </el-input>
          <div>
            <div class="note" v-for="(key,index) of note" :key="index"><span style="font-weight: bold;">笔记{{index+1}}:</span>  {{key.note}}</div>
          </div>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2018/4/3" placement="top">
        <el-card>
          <h4>更新 Github 模板</h4>
          <p>王小虎 提交于 2018/4/3 20:46</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2018/4/2" placement="top">
        <el-card>
          <h4>更新 Github 模板</h4>
          <p>王小虎 提交于 2018/4/2 20:46</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        textarea: '',
        writeNote: false,
        note: []
      }
    },
    methods: {
      sureText() {
        this.writeNote = false;
        this.note.push({ 'note': this.textarea });
        this.textarea = '';
      }
    }
  }
</script>

<style>
  .block {
    margin: 30px 30px;
  }

  .note {
    width: 100%;
    /* border: 1px solid rgba(0, 0, 0, 0.1); */
    box-shadow: 0 0px 3px 0 rgba(0, 0, 0, 0.1);
    margin-top: 10px;
    padding: 10px 0 10px 10px;
  }
</style>