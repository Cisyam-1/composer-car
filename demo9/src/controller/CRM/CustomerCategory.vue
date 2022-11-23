<template>
  
    <div class="top">
    <div class="top1">
      <span>客户类别管理</span>
    </div>
    <div class="top2">
      <el-input placeholder="关键词"></el-input>
      <el-button class="search" @click="search">查询</el-button>
      <el-button class="add" @click="dialogFormVisible = true">新增</el-button>
    </div>
  </div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column type="selection" width="100" />    
      <el-table-column type="index" label="ID" width="180"></el-table-column>
      <el-table-column prop="date" label="类别名称" width="180" />
      <el-table-column label="修改">
        <el-icon  @click="dialogFormVisible = true">
          <EditPen />
        </el-icon>
      </el-table-column>
      <el-table-column label="删除">
        <el-icon >
          <Delete />
        </el-icon>
      </el-table-column>
    </el-table>
    <Pagination/>
    <FunctionKey/>
 
    <el-dialog v-model="dialogFormVisible" title="新增/修改客户类别" @close="addDialogClosed" :close-on-click-modal='false' draggable>
    <!-- <el-divider /> -->
    <el-form :model="addForm" :rules="addForm" ref="addFormRef">
      <el-form-item label="类别名称：" prop="payment" :label-width="formLabelWidth">
        <el-input v-model="addForm.payment"  placeholder="请输入类别名称"/>
        <div class="tip">类别名称</div>
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
import Pagination from '../../components/page/Pagination .vue'
export default {
  data() {
    return {
      dialogFormVisible: false,
      formLabelWidth: '140px',
      addForm: {},
      tableData: [
        {
          id: '1',
          date: '2016-05-03',
          update: 'Tom',
          delete: '<el-icon @click="delete()"><Delete /></el-icon>'
        },
      ]
    }
  },
  components: {
    FunctionKey,
    Pagination
},
}
</script>

<style scoped>
.el-input{
width: 250px;
}
.input2{
  width: 200px;
}
</style>

