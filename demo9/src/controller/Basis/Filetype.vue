<template>
  <div class="top">
    <div class="top1">
      <span>文档类型管理</span>
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
      <el-table-column v-for="(item, index) in headArr" :key="index" :prop="item.prop" :label="item.label" />   
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
  <el-dialog v-model="dialogFormVisible" title="新增/修改文档类型" @close="addDialogClosed" :close-on-click-modal='false'>
    <!-- <el-divider /> -->
    <el-form :model="addForm" :rules="addForm" ref="addFormRef">
      <el-form-item label="类型名称：" prop="payment" :label-width="formLabelWidth">
        <el-select v-model="value" class="m-2" placeholder="Select" style="width:300px">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
        <div class="tip">类型名称</div>
      </el-form-item>
      <el-form-item label="标识：" prop="payment" :label-width="formLabelWidth">
        <el-input v-model="addForm.payment" style="width:300px"/>
        <div class="tip">标识</div>
      </el-form-item>
      <el-form-item label="类别：" prop="payment" :label-width="formLabelWidth">
        <el-radio-group v-model="radio">
          <el-radio :label="3">Font Class</el-radio>
          <el-radio :label="6">上传</el-radio>
        </el-radio-group>      
      </el-form-item>
      <el-form-item label="图标：" prop="payment" :label-width="formLabelWidth">
        <el-input v-model="addForm.payment" style="width:300px"/>
        <div class="tip">图标</div>
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
  
<script>
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
      headArr:[
        {prop:"date", label:"名称"},
        {prop:"name", label:"标识"},
        {prop:"address", label:"类别"},
        {prop:"address", label:"图标"}
      ],

      options: [
        { value: '1', label: '快递', },
        { value: '2', label: '物流' }
      ]
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
  