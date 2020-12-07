<template>
  <div class="sign">
    <div class="logo">Blog</div>
    <div class="main">
      <div style="margin-bottom: 25px;">
        <span class="title">注册</span>
      </div>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="userName">
          <el-input v-model.number="ruleForm.userName"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      let reg = /^[\u4E00-\u9FA5A-Za-z0-9]{3,}$/; //用户名正则
      let regP = /\S{6,}/
      var checkUsername = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'));
        } else if (!reg.test(value)) {
          return callback(new Error('必须是中英文或者数字且长度不能少于3'));
        } else {
          callback();
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (!regP.test(value)) {
            callback(new Error('密码长度至少应为6'));
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        activeName: 'login',
        ruleForm: {
          pass: '',
          checkPass: '',
          userName: ''
        },
        rules: {
          userName: [
            { validator: checkUsername, trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
  };


</script>


<style scoped lang="less">
  .sign {
    height: 100%;
    min-height: 750px;
    text-align: center;
    font-size: 14px;
    background-color: #f1f1f1;
  }

  .logo {
    position: absolute;
    top: 80px;
    margin-left: 50px;
  }

  .main {
    width: 400px;
    margin: 60px auto 0;
    padding: 50px 100px 50px 30px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 0, 0, .1);
    vertical-align: middle;
    display: inline-block;
  }

  .title {
    font-weight: bold;
    padding-left: 50px;
    font-size: 20px;
    margin-bottom: 25px;
  }
</style>