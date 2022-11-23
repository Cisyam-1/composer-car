<template>
  <div class="top">
    <div class="top1">
      <span>银行管理</span>
    </div>
    <div class="top2">
      <el-input placeholder="关键词"></el-input>
      <el-button class="search" @click="search">查询</el-button>
      <el-button class="add" @click="dialogFormVisible = true">新增</el-button>
    </div>
  </div>
  <div class="table">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column type="selection" width="100" /> 
      <el-table-column type="index" width="100" />  
      <el-table-column v-for="(item, index) in headArr" :key="index" :prop="item.prop" :label="item.label" />   
      <el-table-column label="修改" >
        <el-icon @click="dialogFormVisible = true">
          <EditPen />
        </el-icon>
      </el-table-column>
      <el-table-column label="删除">
        <el-icon @click="removeUserById()">
          <Delete />
        </el-icon>
      </el-table-column>
    </el-table>
    <FunctionKey/>
  </div>
  <el-dialog v-model="dialogFormVisible" title="新增/修改银行管理" @close="addDialogClosed" 
  :close-on-click-modal='false' draggable>
    <!-- <el-divider /> -->
    <el-form :model="addPaymentForm" :rules="addPaymentForm" ref="addPaymentFormRef">
      <el-form-item label="支付方式：" prop="payment" :label-width="formLabelWidth">
        <el-input v-model="addPaymentForm.payment" style="width: 300px;"/>
        <div class="tip">支付方式</div>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>
  
<script >
import FunctionKey from '../../components/page/FunctionKey.vue'
export default{
  data(){
    return{
      dialogFormVisible:false,
      formLabelWidth: '140px',
      addPaymentForm: {},
      tableData:[{
        payment: '现金',
          address: 'No. 189, Grove St, Los Angeles', 
    }],
    headArr:[
      {prop:"date", label:"名称"},
      {prop:"name", label:"全称"},
      {prop:"address", label:"英文名称"},
      {prop:"address", label:"银行编码"},
      {prop:"website", label:"官网"},
      {prop:"hotline", label:"客服热线"},
      {prop:"hotline", label:"常用"},
      {prop:"hotline", label:"子数目"},
      {prop:"hotline", label:"排序"},
      {prop:"hotline", label:"级别"},
      {prop:"hotline", label:"父级"},
      {prop:"hotline", label:"失效"}
    ]   
  } 
},
components: {
    FunctionKey,
  },
  methods:{
    
  }
}
</script>



  