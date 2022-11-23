<template>
  <div class="top">
    <div class="top1">
      <span>字符管理</span>
    </div>
    <div class="top2">
      <el-input placeholder="关键词" class="input2"></el-input>
      <el-button class="search" @click="search">查询</el-button>
      <el-button class="add" @click="dialogFormVisible = true">新增</el-button>
    </div>

  </div>
  <!-- <element-table :data="tableData" /> -->
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column type="selection" width="100" />
    <el-table-column type="index" label="ID" width="180"></el-table-column>
    <el-table-column v-for="(item, index) in headArr" :key="index" :prop="item.prop" :label="item.label" />
    <el-table-column label="修改">
      <el-icon>
        <EditPen />
      </el-icon>
    </el-table-column>
    <el-table-column label="删除">
      <el-icon @click="dialogFormVisible = true">
        <Delete />
      </el-icon>
    </el-table-column>
  </el-table>
  <FunctionKey />
  <el-dialog v-model="dialogFormVisible" title="新增/修改字符管理" @close="addDialogClosed" :close-on-click-modal='false'
    draggable>
    <!-- <el-divider /> -->
    <el-form :model="addForm" :rules="addForm" ref="addFormRef">
      <el-form-item label="字符编码：" :label-width="formLabelWidth">
        <el-input />
        <div class="tip">字符编码</div>
      </el-form-item>
      <el-form-item label="设为默认：" :label-width="formLabelWidth">
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
import Charset from '../../api/Charset'
import FunctionKey from '../../components/page/FunctionKey.vue'
export default {
  data() {
    return {
      dialogFormVisible: false,
      formLabelWidth: '140px',
      addForm: {},
      tableData: [],
      headArr: [
        { prop: "charsettype", label: "字符类型" },
        { prop: "defaultkey", label: "默认" }
      ],
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
      Charset.then((res) => {
        console.log(res.data.data)
        this.tableData = res.data.data
      })
    }
  }
}

</script>
  
<style scoped>
.el-input {
  width: 250px;
}

.input2 {
  width: 200px;
}
</style>
    