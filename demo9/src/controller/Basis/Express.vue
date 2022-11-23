<template>
  <div class="top">
    <div class="top1">
      <span>快递管理</span>
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
  <el-dialog v-model="dialogFormVisible" title="新增/修改快递" @close="addDialogClosed" :close-on-click-modal='false' draggable>
    <!-- <el-divider /> -->
    <el-form :model="addForm" :rules="addForm" ref="addFormRef">
      <el-form-item label="快递类型：" :label-width="formLabelWidth">
        <el-select v-model="value" placeholder="Select" style="width:300px">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
        <div class="tip">快递类型</div>
      </el-form-item>
      <el-form-item label="快递名称：" prop="payment" :label-width="formLabelWidth">
        <el-input v-model="addForm.payment" style="width:300px"/>
        <div class="tip">快递名称</div>
      </el-form-item>
      <el-form-item label="图片：" prop="payment" :label-width="formLabelWidth">
        <el-upload v-model:file-list="fileList" class="upload-demo"
          action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15" :on-change="handleChange">
          <el-button type="primary">点击上传图片</el-button>
          <template #tip>
            <div class="el-upload__tip">
              jpg/png 文件小于500kb
            </div>
          </template>
        </el-upload>
      </el-form-item>
      <el-form-item label="官网：" prop="payment" :label-width="formLabelWidth">
        <el-input v-model="addForm.payment" style="width:300px"/>
        <div class="tip">官网</div>
      </el-form-item>
      <el-form-item label="热线电话：" prop="payment" :label-width="formLabelWidth">
        <el-input v-model="addForm.payment" style="width:300px"/>
        <div class="tip">热线电话</div>
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
      headArr:[
        {prop:"date", label:"快递类别"},
        {prop:"name", label:"快递名称"},
        {prop:"address", label:"Logo"},
        {prop:"website", label:"官网"},
        {prop:"hotline", label:"客服热线"},

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


  