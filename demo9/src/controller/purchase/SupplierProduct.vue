<template>
    <div class="top">
        <div class="top1">
            <span>供应商产品管理</span>
        </div>
        <div class="top2">
            <el-input placeholder="关键词" class="input2"></el-input>
            <el-button class="search" @click="search">查询</el-button>
            <el-button class="add" @click="dialogFormVisible = true">新增</el-button>
        </div>
    </div>
    <el-table :data="tableData" border style="width: 100%">
        <el-table-column type="selection" width="100" />    
        <el-table-column type="index" label="ID" width="150"></el-table-column>
        <el-table-column prop="date" label="供应商名称" width="150" />
        <el-table-column prop="name" label="产品名称" width="150" />
        <el-table-column prop="name" label="产品编号" width="150" />
        <el-table-column prop="name" label="品牌名称" width="150" />
        <el-table-column prop="name" label="规格型号" width="150" />
        <el-table-column prop="name" label="单价" width="150" />
        <el-table-column prop="name" label="状态" width="150" />
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
    <Pagination/>
    <FunctionKey/>

    <el-dialog v-model="dialogFormVisible" title="新增/修改生产BOM" @close="addDialogClosed" :close-on-click-modal='false'
        draggable>
        <!-- <el-divider /> -->
        <el-form :model="addForm" :rules="addForm" ref="addFormRef">
            <el-form-item label="供应商名称：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入供应商名称" />
                <div class="tip">供应商名称</div>
            </el-form-item>
            <el-form-item label="产品名称：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入产品编号" />
                <div class="tip">产品编号</div>
            </el-form-item>
            <el-form-item label="产品编号：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入产品编号" />
                <div class="tip">产品编号</div>
            </el-form-item>
            <el-form-item label="品牌名称：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="品牌名称" />
                <div class="tip">品牌名称</div>
            </el-form-item>
            <el-form-item label="规格型号：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入规格型号" />
                <div class="tip">规格型号</div>
            </el-form-item>
            <el-form-item label="价格：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="价格" />
                <div class="tip">价格</div>
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
                },
            ],
            formLabelWidth: '140px',
            payment: [{
                value: '',
                label: '现金'
            }],
            style1: [{
                width: '150px'
            }],
            style2: [{
                display: 'block',
                width:'100px'
            }]
        }
    },
    components: {
    FunctionKey,
    Pagination
},
}

</script>
    
<style scoped>
.el-dialog {
    width: 600x;
    max-height: 500px;
    /* display: block; */
    overflow-y: auto;
}


.el-input {
    width: 250px;
}

.input2 {
    width: 200px;
}

.dialog-footer button:first-child {
    margin-right: 10px;
}
.textarea{
    width: 300px;
}
</style>
      