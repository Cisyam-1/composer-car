<template>
    <div class="header"><span>商品设置</span></div>
    <div class="body">
    <el-form :model="form" label-width="150px">
    <el-form-item label="默认币种:">
      <el-select v-model="form.name" placeholder="请输入默认币种"/>
      <div class="tip">默认币种</div>
    </el-form-item>
    <el-form-item label="价格保留小数长度:">
      <el-select v-model="form.name" placeholder="请输入价格保留小数长度"/>
      <div class="tip">价格保留小数长度</div>
    </el-form-item>
    <el-form-item label="商品类别层级:">
      <el-select v-model="form.name" placeholder="请输入商品类别层级"/>
      <div class="tip">商品类别层级</div>
    </el-form-item>
    <el-form-item label="商品属性层级:">
      <el-select v-model="form.name" placeholder="请输入商品属性层级"/>
      <div class="tip">商品属性层级</div>
    </el-form-item>
    <el-form-item label="商品规格层级:">
      <el-select v-model="form.name" placeholder="请输入商品规格层级"/>
      <div class="tip">商品规格层级</div>
    </el-form-item>
    <el-form-item label="商品显示方式:">
      <el-radio-group v-model="form.resource">
        <el-radio label="表格列表" />
        <el-radio label="图标列表" />
      </el-radio-group>
    </el-form-item>
    <el-form-item label="商品类别:">
        <el-checkbox v-model="checked1" label="商品类别" size="large" /><br/>
        <el-checkbox v-model="checked1" label="商品基础设置" size="large" />
        <el-checkbox v-model="checked1" label="价格与库存" size="large" />
        <el-checkbox v-model="checked1" label="属性与规格" size="large" />
        <el-checkbox v-model="checked1" label="购买设置" size="large" />
        <el-checkbox v-model="checked1" label="服务与承诺" size="large" />
        <el-checkbox v-model="checked1" label="营销设置" size="large" />
        <el-checkbox v-model="checked1" label="分享设置" size="large" />
        <el-checkbox v-model="checked1" label="商品详情" size="large" />
    </el-form-item>  
    <el-form-item>
      <el-button type="primary" @click="onSubmit">确认保存</el-button>
      <el-button>返回</el-button>
    </el-form-item>
  </el-form>
  </div>
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
  .header{
    margin-bottom: 20px;
    margin-left: 20px;
    text-decoration:dotted;
  }
  .el-select{width: 900px;}
  .body{
    margin-left: 30px;
  }
  .el-checkbox{
   margin-right: 20px;
  }
  </style>