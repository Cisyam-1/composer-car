<template>
    <div>
        <div>短信设置</div>
    </div>

  <el-form :model="form" label-width="120px">
    <el-form-item label="AppKey:">
      <el-input v-model="form.name"  placeholder="请输入AppKey" style="width: 800px;"/>
      <div class="tip">AppKey</div>
    </el-form-item>
    <el-form-item label="AppSecret:">
      <el-input v-model="form.name" placeholder="请输入AppScret" style="width: 800px;"/>
      <div class="tip">AppSecret</div>
    </el-form-item>
    <el-form-item label="短信签名:">
      <el-input v-model="form.name" placeholder="请输入短信签名" style="width: 800px;"/>
      <div class="tip">短信签名</div>
    </el-form-item>
    <el-form-item label="模板code:">
      <el-input v-model="form.name" placeholder="请输入模板code" style="width: 800px;"/>
      <div class="tip">模板code</div>
    </el-form-item>   
    <el-form-item label="生成方式:">
      <el-radio-group v-model="form.resource">
        <el-radio label="纯数字" />
        <el-radio label="纯字母" />
        <el-radio label="字母+数字" />
      </el-radio-group>
    </el-form-item>
    <el-form-item label="短信长度:">
      <el-input v-model="form.name" placeholder="请输入短信长度" style="width: 800px;"/>
      <div class="tip">短信长度</div>
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

