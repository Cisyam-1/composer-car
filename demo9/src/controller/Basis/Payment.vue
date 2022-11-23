<template>
    <div class="top">
            <div class="top1">
              <span>付款方式管理</span>
            </div>
            <div class="top2">
              <el-input placeholder="关键词"></el-input>
              <el-button class="search" @click="search">查询</el-button>
              <el-button @click="dialogFormVisible = true" >新增</el-button>
            </div>
          </div>
          <div class="table">
            <el-table :data="tableData" border style="width: 100%">
              <el-table-column type="selection" width="100" />    
              <el-table-column prop="date" label="日期" width="180" />
              <el-table-column prop="name" label="名字" width="180" />
              <el-table-column prop="address" label="地址" />
              <el-table-column  label="修改"><el-icon @click="dialogFormVisible = true"><EditPen /></el-icon></el-table-column>
              <el-table-column  label="删除"><el-icon><Delete /></el-icon></el-table-column>
            </el-table>
            <FunctionKey/>
          </div>
          <el-dialog v-model="dialogFormVisible" title="新增/修改付款方式" @close="addDialogClosed" :close-on-click-modal='false'>
    <!-- <el-divider /> -->
    <el-form :model="addForm" :rules="addForm" ref="addFormRef">
      <el-form-item label="付款方式：" prop="payment" :label-width="formLabelWidth">
        <el-input v-model="addForm.payment" style="width:300px"/>
        <div class="tip">付款方式</div>
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

<style scoped>
.el-dialog {
  width: 550px;
}


</style>
  