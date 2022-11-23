
<template>
    <div class="top">
        <div class="top1">
            <span>产品规格管理</span>
        </div>
        <div class="top2">
            <el-input placeholder="关键词" class="input2"></el-input>
            <el-button class="search" @click="search">查询</el-button>
            <el-button class="add" @click="dialogFormVisible = true">新增</el-button>
        </div>
    </div>
    <el-table :data="tableData" border style="width: 100%">
        <el-table-column type="selection" width="100" />    
        <el-table-column type="index" label="ID" width="120"></el-table-column>
        <el-table-column prop="date" label="类别" width="120" />
        <el-table-column prop="name" label="属性名称" width="120" />
        <el-table-column prop="name" label="字段名称" width="120" />
        <el-table-column prop="name" label="字段类型" width="120" />
        <el-table-column prop="name" label="关联表" width="120" />
        <el-table-column prop="name" label="字段长度" width="120" />
        <el-table-column prop="name" label="默认值" width="120" />
        <el-table-column prop="name" label="单位" width="120" />
        <el-table-column prop="name" label="级别" width="120" />
        <el-table-column prop="name" label="父级" width="120" />
        <el-table-column prop="name" label="子数目" width="120" />
        <el-table-column prop="name" label="必填项" width="120" />
        <el-table-column prop="name" label="排序" width="120" />
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

    <el-dialog  custom-class="dialogwidth" v-model="dialogFormVisible" title="新增/修改产品属性" @close="addDialogClosed" :close-on-click-modal='false' draggable>
        <el-form :model="addForm" :rules="addForm" ref="addFormRef">
            <el-form-item label="类别：" prop="payment" :label-width="formLabelWidth">
                <el-select placeholder="=请选择="></el-select>
                <div class="tip">类别</div>
            </el-form-item>
            <el-form-item label="规格名称：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入规格名称" />
                <div class="tip">规格名称</div>
            </el-form-item>
            <el-form-item label="字段名称：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入字段名称" />
                <div class="tip">字段名称</div>
            </el-form-item>
            <el-form-item label="字段类型：" prop="payment" :label-width="formLabelWidth">
                <el-select placeholder="=请选择="></el-select>
                <div class="tip">字段类型</div>
            </el-form-item>
            <el-form-item label="字段长度：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入字段长度" />
                <div class="tip">字段长度</div>
            </el-form-item>
            <el-form-item label="是否必填：" prop="payment" :label-width="formLabelWidth">
                <el-checkbox v-model="checked1" label="必填" size="large" />
            </el-form-item>
            <el-form-item label="排序：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入排序" />
                <div class="tip">排序：</div>
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
            checked1:'false',
            addForm: {},
            tableData: [
                {
                    id: '1',
                    date: '2016-05-03',
                },
            ],
            formLabelWidth: '140px',
            payment: [{
                value: '',
                label: '现金'
            }],


        }
    },
    components: {
    FunctionKey,
  },
}

</script>
    
<style scoped>
.dialogwidth{
    width: 30% !important;
    min-width: 100px !important;
}


.el-input {
    width: 210px;
}

.input2 {
    width: 200px;
}

.dialog-footer button:first-child {
    margin-right: 10px;
}

</style>
      