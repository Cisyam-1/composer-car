<template>
    <div>
        <span>邮件设置</span>
    </div>

  <el-form :model="form" label-width="120px">
    <el-form-item label="邮件发送模式:">
      <el-radio-group v-model="form.resource">
        <el-radio label="SMTP" />
        <el-radio label="POP" />
      </el-radio-group>
     
    </el-form-item>
    <el-form-item label="邮件服务器:">
      <el-input v-model="form.name"  placeholder="请输入邮件服务器"/>
    <div class="tip">邮件服务器</div>
    </el-form-item>
    <el-form-item label="服务器端口:">
      <el-input v-model="form.name" placeholder="请输入服务器端口"/>
      <div class="tip">服务器端口</div>
    </el-form-item>
    <el-form-item label="开启安全协议:">
      <el-radio-group v-model="form.resource">
        <el-radio label="ssl" />
        <el-radio label="tls" />
      </el-radio-group>
    </el-form-item>
    <el-form-item label="编码格式:">
      <el-radio-group v-model="form.resource">
        <el-radio label="UTF-8" />
        <el-radio label="GB2312" />
      </el-radio-group>
    </el-form-item>
    <el-form-item label="开启debug:">
        <el-checkbox v-model="checked1" label="开启debug" size="large" />
    </el-form-item>  
    <el-form-item label="发件人地址:">
      <el-input v-model="form.name" placeholder="请输入发件人地址"/>
      <div class="tip">发件人地址</div>
    </el-form-item>
    <el-form-item label="发件人昵称:">
      <el-input v-model="form.name" placeholder="请输入发件人昵称"/>
      <div class="tip">发件人昵称</div>
    </el-form-item> 
    <el-form-item label="开启Auth认证:">
        <el-checkbox v-model="checked1" label="开启Auth认证" size="large" />
    </el-form-item>  
    <el-form-item label="SMTP用户名:">
      <el-input v-model="form.name" placeholder="请输入SMTP用户名"/>
      <div class="tip">SMTP用户名</div>
    </el-form-item> 
    <el-form-item label="SMTP密码:">
      <el-input v-model="form.name" placeholder="请输入SMTP密码"/>
      <div class="tip">SMTP密码</div>
    </el-form-item>   
    <el-form-item label="开启日志:">
        <el-checkbox v-model="checked1" label="开启日志" size="large" />
    </el-form-item>   
    <el-form-item>
      <el-button type="primary" @click="onSubmit">确认保存</el-button>
      <el-button>返回</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive,ref } from 'vue'
const checked1= ref()

// do not use same name with ref
const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

const onSubmit = () => {
  console.log('submit!')
}
</script>


<style scoped>
.el-form{
  margin-top: 20px;
}
</style>

