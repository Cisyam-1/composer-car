<template>
    <div class="top">
        <div class="top1">
            <span>采购计划管理</span>
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
        <el-table-column prop="date" label="计划编号" width="120" />
        <el-table-column prop="name" label="分公司" width="120" />
        <el-table-column prop="name" label="所属部门" width="120" />
        <el-table-column prop="name" label="计划采购量" width="120" />
        <el-table-column prop="name" label="实际采购量" width="120" />
        <el-table-column prop="name" label="计划到货日期" width="120" />
        <el-table-column prop="name" label="经手人" width="120" />
        <el-table-column prop="name" label="计划人" width="120" />
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
    <FunctionKey/>

    <el-dialog v-model="dialogFormVisible" title="新增/修改行为句柄" @close="addDialogClosed" :close-on-click-modal='false'
        draggable>
        <!-- <el-divider /> -->
        <el-form :model="addForm" :rules="addForm" ref="addFormRef">
            <el-form-item label="分公司：" prop="payment" :label-width="formLabelWidth">
                <el-select v-model="value" class="m-2" placeholder="=请选择=">
                    <el-option v-for="item in payment" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
                <div class="tip">分公司</div>
            </el-form-item>
            <el-form-item label="部门：" prop="payment" :label-width="formLabelWidth">
                <el-select v-model="value" class="m-2" placeholder="=请选择=">
                    <el-option v-for="item in payment" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
                <div class="tip">部门</div>
            </el-form-item>
            <el-form-item label="采购计划量：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入采购计划量" />
                <div class="tip">采购计划量</div>
            </el-form-item>
            <el-form-item label="计划到货日期：" prop="payment" :label-width="formLabelWidth">
                <el-date-picker v-model="value1" type="date" placeholder="请输入计划到货日期" :size="size" />
                <div class="tip">计划到货日期</div>
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
.el-dialog {
    width: 500x;
    max-height: 500px;
    /* display: block; */
    overflow-y: auto;
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
      