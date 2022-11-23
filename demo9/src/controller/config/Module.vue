<template>
  <div class="top">
    <div class="top1">
      <span>模式管理</span>
    </div>
    <div class="top2">
      <el-input placeholder="关键词" v-model="queryInfo.query" clearable @clear="getUsersList()" class="input2"></el-input>
      <el-select></el-select>
      <el-button class="search" @click="getOrderList()">查询</el-button>
      <el-button @click="dialogFormVisible = true">新增</el-button>
    </div>
  </div>

  <!-- Form -->
  <el-dialog v-model="dialogFormVisible" title="新增/修改模块" @close="addDialogClosed" :close-on-click-modal='false'
    draggable>

    <el-form :model="addForm" :rules="addForm" ref="addFormRef">
      <el-form-item label="模块名称：" :label-width="formLabelWidth">
        <el-input v-model="addForm.date" autocomplete="off" />
        <div class="tip">模块名称</div>
      </el-form-item>
      <el-form-item label="表名：" :label-width="formLabelWidth">
        <el-input v-model="addForm.date" autocomplete="off" />
        <div class="tip">表名</div>
      </el-form-item>
      <el-form-item label="注释：" :label-width="formLabelWidth">
        <el-input v-model="addForm.date" autocomplete="off" />
        <div class="tip">注释</div>
      </el-form-item>
      <el-form-item label="图标：" :label-width="formLabelWidth">
        <el-input v-model="addForm.date" autocomplete="off" />
        <div class="tip">图标</div>
      </el-form-item>
      <el-form-item label="表层级：" :label-width="formLabelWidth">
        <el-select v-model="addForm.region" placeholder="Please select a zone">
          <el-option label="一层" value="shanghai" />
          <el-option label="二级" value="beijing" />
        </el-select>
        <div class="tip">表层级</div>
      </el-form-item>
      <el-form-item label="字符编码：" :label-width="formLabelWidth">
        <el-select v-model="addForm.date" placeholder="Please select a zone">
          <el-option label="Zone No.1" value="shanghai" />
          <el-option label="Zone No.2" value="beijing" />
        </el-select>
        <div class="tip">字符编码</div>
      </el-form-item>
      <el-form-item label="存储引擎：" :label-width="formLabelWidth">
        <el-select v-model="addForm.date" placeholder="Please select a zone">
          <el-option label="Zone No.1" value="shanghai" />
          <el-option label="Zone No.2" value="beijing" />
        </el-select>
        <div class="tip">存储引擎</div>
      </el-form-item>
      <el-form-item label="排序规则：" :label-width="formLabelWidth">
        <el-select v-model="addForm.region" placeholder="Please select a zone">
          <el-option label="Zone No.1" value="shanghai" />
          <el-option label="Zone No.2" value="beijing" />
        </el-select>
        <div class="tip">排序规则</div>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确定</el-button>
      </span>
    </template>
  </el-dialog>

  <el-table :data="tableData" border style="width: 100%">
    <el-table-column type="selection" width="100" />
    <el-table-column type="index" label="ID" width="120"></el-table-column>
    <el-table-column v-for="(item, index) in headArr" :key="index" :prop="item.prop" :label="item.label" />
    <el-table-column prop="date" label="模块名称" width="120" />
    <el-table-column prop="name" label="表名" width="120" />
    <el-table-column prop="address" label="图标" />
    <el-table-column prop="name" label="级别" width="120" />
    <el-table-column prop="name" label="父级" width="120" />
    <el-table-column prop="name" label="表层级" width="120" />
    <el-table-column prop="name" label="字符编码" width="120" />
    <el-table-column prop="name" label="排序规格" width="120" />
    <el-table-column prop="name" label="存储引擎" width="120" />
    <el-table-column prop="name" label="下级数" width="120" />
    <el-table-column prop="name" label="排序" width="120" />
    <el-table-column prop="name" label="设置" width="120" />
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
  <FunctionKey />
</template>
    
<script >
import FunctionKey from '../../components/page/FunctionKey.vue'
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
        },
      ],
      headArr: [
        { prop: "date", label: "模块名称" },
        { prop: "name", label: "表名" },
        { prop: "address", label: "图标" },
        { prop: "name", label: "级别" },
        { prop: "name", label: "父级" },
        { prop: "name", label: "表层级" },
        { prop: "name", label: "字符编码" },
        { prop: "name", label: "排序规格" },
        { prop: "name", label: "存储引擎" },
        { prop: "name", label: "下级数" },
        { prop: "name", label: "排序" },
        { prop: "name", label: "设置" }
      ],
      comName: [],
      queryInfo: {
        query: "",
      },
    }
  },
  components: {
    FunctionKey,
  },
  created() {
    this.getTableData();
  },
  methods: {
   getTableData(){
    Module.then((res) =>{
      console.log(res.data.data)
      this.tableData = res.data.data
    })
   }

  }
}
</script>

<style scoped>
.el-input {
  width: 300px;
}

.input2 {
  width: 200px;
}
</style>

