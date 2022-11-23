<template>
  <div class="top">
    <div class="top1">
      <span>菜单管理</span>
    </div>
    <div class="top2">
      <el-input placeholder="关键词"></el-input>
      <el-button class="search" @click="search">查询</el-button>
      <el-button class="add" @click="dialogFormVisible = true">新增</el-button>
    </div>
  </div>
  <el-table :data="tableData" border style="width: 120%">
    <el-table-column type="selection" width="100" />
    <el-table-column type="index" label="ID" width="120"></el-table-column>
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
  <FunctionKey />

  <el-dialog v-model="dialogFormVisible" title="新增/修改菜单" @close="addDialogClosed" :close-on-click-modal='false'
    draggable>
    <!-- <el-divider /> -->
    <el-form :model="addForm" :rules="addForm" ref="addFormRef">
      <el-form-item label="一级标题：" prop="payment" :label-width="formLabelWidth">
        <el-input v-model="addForm.payment" placeholder="请输入一级标题" style="width:300px" />
        <div class="tip">一级标题</div>
      </el-form-item>
      <el-form-item label="图标：" prop="payment" :label-width="formLabelWidth">
        <el-input v-model="addForm.payment" placeholder="请输入图标" style="width:300px" />
        <div class="tip">图标</div>
      </el-form-item>
      <el-form-item label="展开：" prop="payment" :label-width="formLabelWidth">
        <el-checkbox v-model="checked1" label="展开" size="large" />
      </el-form-item>
      <el-form-item label="级别：" prop="payment" :label-width="formLabelWidth">
        <el-select v-model="value" class="m-2" placeholder="=请选择级别=" size="20px" style="width:300px">
          <el-option v-for="item in level" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
        <div class="tip">级别</div>
      </el-form-item>
      <el-form-item label="父级：" prop="payment" :label-width="formLabelWidth">
        <el-select v-model="value" class="m-2" placeholder="=请选择父级=" size="20px" style="width:300px">
          <el-option v-for="item in fatherlevel" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
        <div class="tip">级别</div>
      </el-form-item>
      <el-form-item label="排序：" prop="payment" :label-width="formLabelWidth">
        <el-input v-model="addForm.payment" placeholder="请输入排序" style="width:300px" />
        <div class="tip">排序</div>
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
      tableData: [
        {
          id: '1',
          date: '2016-05-03',
          update: 'Tom',
          delete: '<el-icon @click="delete()"><Delete /></el-icon>'
        },
      ],
      headArr: [
        { prop: "date", label: "菜单名称" },
        { prop: "name", label: "图标" },
        { prop: "name", label: "模板" },
        { prop: "name", label: "级别" },
        { prop: "name", label: "上级" },
        { prop: "name", label: "展开" },
        { prop: "name", label: "下级数" },
        { prop: "name", label: "排序" }
      ],
      level: [{
        value: '1',
        label: '一级'
      },
      { value: '2', label: '二级' },
      { value: '3', label: '三级' }
      ],
      fatherlevel: [{}]

    }
  },
  components: {
    FunctionKey,
  },
  created() {
    this.getTableData();
  },
  methods: {
    async getTableData() {
      Memu.then((res) => {
        console.log(res.data.data);
        this.tableData = res.data.data;
      });
    }
  }
}

</script>
  

    