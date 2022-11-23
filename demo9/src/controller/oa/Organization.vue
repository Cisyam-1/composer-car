<template>
    <div class="top">
      <div class="top1">
        <span>组织分部管理</span>
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
        <el-table-column type="index" label="ID" width="150" />
        <el-table-column prop="name" label="组织名称" width="150" />
        <el-table-column prop="address" label="组织编号" width="150" />
        <el-table-column prop="address" label="总部" width="150" />
        <el-table-column prop="website" label="状态" width="150"></el-table-column>>
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
    <el-dialog v-model="dialogFormVisible" title="新增/修改组织分部" @close="addDialogClosed" :close-on-click-modal='false'>
      <!-- <el-divider /> -->
      <el-form :model="addPaymentForm" :rules="addPaymentForm" ref="addPaymentFormRef">
        <el-form-item label="分部名称：" prop="payment" :label-width="formLabelWidth">
          <el-input v-model="addPaymentForm.payment"  style="width: 300px;"/>
          <div class="tip">分部名称</div>
        </el-form-item>
        <el-form-item label="组织编码：" prop="payment" :label-width="formLabelWidth">
          <el-input v-model="addPaymentForm.payment" style="width: 300px;"/>
          <div class="tip">组织编码</div>
        </el-form-item>
        <el-form-item label="总部：" prop="payment" :label-width="formLabelWidth">
            <el-checkbox v-model="checked1" label="总部" size="large" /> 
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
      
    } 
  },
  components: {
    FunctionKey,
  },
  }
  
  
  </script>
  
  <style scoped>
.el-checkbox{
  margin-top: -3px;
}
  </style>
    