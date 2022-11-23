<template>
  <div class="top">
    <div class="top1">
      <span>岗位管理</span>
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
      <el-table-column type="index" label="ID" width="180" />
      <el-table-column prop="date" label="标题" width="180" />
      <el-table-column label="修改">
        <el-icon @click="dialogFormVisible = true">
          <EditPen />
        </el-icon>
      </el-table-column>
      <el-table-column label="删除">
        <el-icon>
          <Delete />
        </el-icon>
      </el-table-column>
    </el-table>
    <FunctionKey/>
  </div>
  <el-dialog v-model="dialogFormVisible" title="新增/修改岗位" @close="addDialogClosed" :close-on-click-modal='false'>
    <!-- <el-divider /> -->
    <el-form :model="addForm" :rules="addForm" ref="addFormRef">
      <el-form-item label="岗位名称：" prop="payment" :label-width="formLabelWidth" placeholder="请输入岗位名称">
        <el-input v-model="addForm.payment" style="width:300px"/>
        <div class="tip">岗位名称</div>
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
import  FunctionKey from '../../components/page/FunctionKey.vue'
export default {
  data() {
    return {
      dialogFormVisible: false,
      formLabelWidth: '140px',
      addForm: {},
      tableData: [{
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

<style >
.el-dialog {
  width: 550px;
}


</style>
  