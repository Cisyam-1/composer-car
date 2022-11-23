<template>
  <div class="top">
    <div class="top1">
      <span>单位管理</span>
    </div>
    <div class="top2">
      <el-input placeholder="关键词" clearable @clear="getTableData()" v-model="tableData.unit"></el-input>
      <el-button class="search" @click="getTableData">查询</el-button>
      <el-button class="add" @click="addUnit">新增</el-button>
    </div>
  </div>
  <div class="table">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column type="selection" width="100" />
      <el-table-column type="index" width="100" />
      <el-table-column v-for="(item, index) in headArr" :key="index" :prop="item.prop" :label="item.label" />
      <el-table-column label="修改">
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
    <FunctionKey />
  </div>
  <el-dialog v-model="dialogFormVisible" title="新增/修改单位管理" @close="addDialogClosed" :close-on-click-modal='false'
    draggable>
    <!-- <el-divider /> -->
    <el-form :model="addUnitForm" :rules="addUnitForm" ref="addUnitFormRef">
      <el-form-item label="单位名称：" prop="Unit" :label-width="formLabelWidth">
        <el-input v-model="addUnitForm.Unit" style="width: 300px;" />
        <div class="tip">单位名称</div>
      </el-form-item>
      <el-form-item label="标识符：" prop="Unit" :label-width="formLabelWidth">
        <el-input v-model="addUnitForm.Unit" style="width: 300px;" />
        <div class="tip">标识符</div>
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
import Unit from '../../api/Unit';
import FunctionKey from '../../components/page/FunctionKey.vue'
export default {
  data() {
    return {
      dialogFormVisible: false,
      formLabelWidth: '140px',
      addUnitForm: {},
      tableData: [{
        Unit: '现金',
        address: 'No. 189, Grove St, Los Angeles',
      }],
      headArr: [
        { prop: "title", label: "单位名称" },
        { prop: "pic", label: "标识" },
        { prop: "", label: "默认" },
      ]
    }
  },
  components: {
    FunctionKey,
  },
  created() {
    this.getTableData()

  },
  methods: {
    getTableData() {
      Unit.show().then(res => {
        console.log(res.data.data.data)
        this.tableData = res.data.data.data
      })
    },
    // 点击按钮，添加新单位
    addUnit() {   
      Unit.add().then(res =>{ 
        console.log(res.msg)
      })
      dialogFormVisible = true
    },

    //监听添加单位对话框的关闭状态
    addDialogClosed() {
      this.$refs.addUserFormRef.resetFields();
    }
  }
}
</script>



  