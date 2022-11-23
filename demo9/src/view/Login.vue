<template>
  <div class="login_container">
    <div class="header">
      <span>MILI</span>
    </div>
    <div class="body">
      <div class="login_box">
        <div class="form">
          <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
            <el-tab-pane label="账号登录" name="first">
              <el-form label-width="10px" :model="accountLoginForm" ref="loginFormref">
                <el-form-item prop="username">
                  <el-input prefix-icon="User" v-model="accountLoginForm.username" placeholder="用户名/手机/邮箱" />
                </el-form-item>
                <el-form-item prop="password">
                  <el-input prefix-icon="Lock" v-model="accountLoginForm.password" placeholder="请输入密码" />
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="Login">登录</el-button>
                </el-form-item>
                <el-form-item>
                  <div>
                    <a href="" class="forget">忘记密码</a>
                    <a href="" >注册</a>
                  </div>
                </el-form-item>
              </el-form>
            </el-tab-pane>
            <el-tab-pane label="短信登录" name="second">
              <el-form label-width="10px" :model="smsLoginForm">
                <el-form-item>
                  <el-input prefix-icon="Iphone" v-model="smsLoginForm.phonenumber" placeholder="手机号码" />
                </el-form-item>
                <el-form-item>
                  <el-input prefix-icon="ChatDotRound" v-model="smsLoginForm.authcode" placeholder="短信验证码" />
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" >登录</el-button>
                </el-form-item>
                <el-form-item>
                  <div>
                    <a href="" class="forget">忘记密码</a>
                    <a href="" align="right">注册</a>
                  </div>
                </el-form-item>
              </el-form>
            </el-tab-pane>
          </el-tabs>
          <el-divider>其他登录方式</el-divider>
          <div class="photo">
          <div class="img"><img src="../assets/weixin.png" alt=""></div>
          <div class="img"><img src="../assets/weibo.png" alt=""></div>
          <div class="img"><a href="http://baidu.com"><img src="../assets/feishu.jpg" alt=""></a></div>
        </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <span>版权所有：广州米利</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'

const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}

const accountLoginForm = reactive({
  username: 'admin',
  password: '123',
})
const smsLoginForm = reactive({
  phonenumber: '',
  authcode: '',
})



function Login(this: any){
  this.$refs.loginFormRef.resetFields();
}


</script>


////样式
<style scoped>
.login_container {
  background-color: cadetblue;
  height: 100%;
}

.demo-tabs>.el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 40px;
  font-weight: 600;
  margin-left: 0;

}


.header {
  width: 100%;
  height: 50px;
  background-color: rgb(197, 194, 194);
}

.body {
  width: 100%;
  height: calc(100% - 100px);
  position: relative;
}

.footer {
  width: 100%;
  height: 50px;
  background-color: rgb(197, 194, 194);
}

.login_box {
  position: absolute;
  width: 350px;
  height: 400px;
  margin-top: 10%;
  margin-left: 60%;
  border-radius: 10px;
  background-color: white;
}

.el-tabs_header .is-top{
  width: 300px !important;
  margin-left: 30% !important;
}

.form {
  width: 300px;
  height: 360px;
  margin-top: 30px;
  margin-left: 20px;
}

.el-button {
  width: 300px;
}

.el-divider {
  margin-top: 0;
  margin-bottom: 0;
}

a {
  text-decoration: none;
  color: darkgrey;
}

.forget {
  margin-right: 140px;
}

.photo{
  margin-left: 35px;
}
.img{
  width: 40px;
  height: 40px;
  margin-top: 20px;
  position:relative;
  display: inline-block;
  /* margin-right: 10px; */
  margin-left: 30px;
}

.logintype>div {
  display: inline-flex;
}

img {
  width: 100%;
  height: 100%;
  border-radius: 100%;
}
.header>span {
  margin-left: 25%;
  line-height: 50px;
}

.footer {
  text-align: center;
  line-height: 50px;
}
</style>