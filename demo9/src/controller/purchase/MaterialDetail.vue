<template>
    <div class="top">
        <div class="top1">
            <span>物料规格管理</span>
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
        <el-table-column prop="date" label="物料编码" width="150" />
        <el-table-column prop="name" label="规格名称" width="150" />
        <el-table-column prop="name" label="规格编码" width="150" />
        <el-table-column prop="name" label="条形码" width="150" />
        <el-table-column prop="name" label="单价" width="150" />
        <el-table-column prop="name" label="单位" width="150" />
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


    <el-dialog v-model="dialogFormVisible" title="新增/修改物料规格" @close="addDialogClosed" :close-on-click-modal='false'
        draggable class="materialdetail_dialog">
        <!-- <el-divider /> -->
        <el-form :model="addForm" :rules="addForm" ref="addFormRef">
            <el-form-item label="物料ID：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入物料ID"  />
                <div class="tip">物料ID</div>
            </el-form-item>
            <el-form-item label="规格名称：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入规格名称"  />
                <div class="tip">规格名称</div>
            </el-form-item>
            <el-form-item label="规格编码：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入规格编码"  />
                <div class="tip">规格编码</div>
            </el-form-item>
            <el-form-item label="条形码：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入条形码"  />
                <div class="tip">条形码</div>
            </el-form-item>
            <el-form-item label="单价：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入单价"  />
                <div class="tip">单价</div>
            </el-form-item>
            <el-form-item label="最小单位：" prop="payment" :label-width="formLabelWidth">
                <el-input placeholder="请输入最小单位" :style="style2"></el-input>
                <el-select v-model="value"  placeholder="=请选择=" :style="style1">
                    <el-option v-for="item in payment" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
                <div class="tip">原料类别</div>
            </el-form-item>
            <el-form-item label="供应商名称：" prop="payment" :label-width="formLabelWidth">
                <el-select v-model="value"  placeholder="=单位=" >
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
import Pagination from '../../components/page/Pagination .vue'
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
    
<style >
.materialdetail_dialog {
    width: 40% !important;
    max-height: 500px;
    display: block;
    overflow-y: auto;
}


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
      