<template>
    <div class="top">
        <div class="top1">
            <span>物料管理</span>
        </div>
        <div class="top2">
            <el-input placeholder="关键词" class="input2"></el-input>
            <el-select placeholder="=供应商=" ></el-select>
            <el-button class="search" @click="search">查询</el-button>
            <el-button class="add" @click="dialogFormVisible = true" style="float: right;">新增</el-button>
        </div>
    </div>
    <el-table :data="tableData" border style="width: 100%">
        <el-table-column type="selection" width="100" />    
        <el-table-column type="index" label="ID" width="150"></el-table-column>
        <el-table-column prop="date" label="物料名称" width="150" />
        <el-table-column prop="name" label="类别" width="150" />
        <el-table-column prop="name" label="物料编码" width="150" />
        <el-table-column prop="name" label="供应商" width="150" />
        <el-table-column prop="name" label="规格型号" width="150" />
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
            <el-form-item label="原来类别：" prop="payment" :label-width="formLabelWidth">
                <el-select v-model="value" class="m-2" placeholder="=请选择=">
                    <el-option v-for="item in payment" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
                <div class="tip">原料类别</div>
            </el-form-item>
            <el-form-item label="供应商名称：" prop="payment" :label-width="formLabelWidth">
                <el-select v-model="value" class="m-2" placeholder="=单位=" >
                    <el-option v-for="item in payment" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
                <div class="tip">供应商名称</div>
            </el-form-item>
            <el-form-item label="原料名称：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入原料名称"  />
                <div class="tip">原料名称</div>
            </el-form-item>
            <el-form-item label="原料编码：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入原来编码"  />
                <div class="tip">原来编码</div>
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

.el-input {
    width: 250px;
}

.input2 {
    width: 200px;
}

.textarea{
    width: 300px;
}
</style>
      