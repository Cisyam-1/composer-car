
<template>
    <div class="top">
        <div class="top1">
            <span>盘点管理</span>
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
        <el-table-column prop="date" label="盘点标题" width="120" />
        <el-table-column prop="name" label="盘点编号" width="120" />
        <el-table-column prop="name" label="类别" width="120" />
        <el-table-column prop="name" label="盘点日期" width="120" />
        <el-table-column prop="name" label="盘点人" width="120" />
        <el-table-column prop="name" label="审核人" width="120" />
        <el-table-column prop="name" label="状态" width="120" />
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

    <el-dialog v-model="dialogFormVisible" title="新增/修改需求预测" @close="addDialogClosed" :close-on-click-modal='false'
        draggable class="inventory_dialog">
        <!-- <el-divider /> -->
        <el-form :model="addForm" :rules="addForm" ref="addFormRef">
            <el-form-item label="一级标题：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入标题名称" />
                <div class="tip">一级标题</div>
            </el-form-item>
            <el-form-item label="标识符：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入标识符" />
                <div class="tip">标识符</div>
            </el-form-item>
            <el-form-item label="分公司：" prop="payment" :label-width="formLabelWidth">
               <el-select placeholder="=请选择="></el-select>
                <div class="tip">分公司</div>
            </el-form-item>
            <el-form-item label="排序：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入排序" />
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
    width: 210px;
}

.input2 {
    width: 200px;
}


</style>
      