<template>
  
    <div class="top">
    <div class="top1">
      <span>存储引擎管理</span>
    </div>
    <div class="top2">
      <el-input placeholder="关键词" class="input2"></el-input>
      <el-button class="search" @click="search">查询</el-button>
      <el-button class="add" @click="dialogFormVisible = true">新增</el-button>
    </div>
  </div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column type="selection" width="100" />    
      <el-table-column type="index" label="ID" width="180"></el-table-column>
      <el-table-column v-for="(item, index) in headArr" :key="index" :prop="item.prop" :label="item.label"/>
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
   <FunctionKey/>
 
    <el-dialog v-model="dialogFormVisible" title="新增/修改存储引擎" @close="addDialogClosed" :close-on-click-modal='false' draggable>
    <!-- <el-divider /> -->
    <el-form :model="addForm" :rules="addForm" ref="addFormRef">
      <el-form-item label="存储引擎：" prop="payment" :label-width="formLabelWidth">
        <el-input v-model="addForm.payment"  placeholder="请输入存储引擎"/>
        <div class="tip">存储引擎</div>
      </el-form-item>
      <el-form-item label="设为默认：" prop="payment" :label-width="formLabelWidth" >
        <el-checkbox v-model="checked1" label="设为默认" size="large" />
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
      checked1:false,
      dialogFormVisible: false,
      formLabelWidth: '140px',
      addForm: {},
      tableData: [
        {
          engine:'1',
          defaultkey:'2'
        },
      ],
      headArr:[
        {prop:'engine' ,label:'类型名称'},
        {prop:'defaultkey' ,label:'默认'}
      ]
    }
  },
  components: {
    FunctionKey,
  },
  created() {
    this.getTableData();
  },

  methods: {
    getTableData() {
      Collate.then((res) => {
        console.log(res.data.data)
        this.tableData = res.data.data
      })
    }
}
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


  