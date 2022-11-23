<template>
    <div class="top">
        <div class="top1">
            <span>报溢单管理</span>
        </div>
        <div class="top2">
            <el-input placeholder="关键词" class="input2"></el-input>
            <el-button class="search" @click="search">查询</el-button>
            <el-button class="add" @click="dialogFormVisible = true">新增</el-button>
        </div>
    </div>
    <el-table :data="tableData" border style="width: 100%">
        <el-table-column type="selection" width="100" />    
        <el-table-column type="index" label="ID" width="100"></el-table-column>
        <el-table-column prop="date" label="商品" width="100" />
        <el-table-column prop="name" label="填报日期" width="100" />
        <el-table-column prop="name" label="仓库" width="100" />
        <el-table-column prop="name" label="批次" width="100" />
        <el-table-column prop="name" label="数量" width="100" />
        <el-table-column prop="name" label="报损原因" width="100" />
        <el-table-column prop="name" label="单价" width="100"></el-table-column>
        <el-table-column prop="name" label="金额" width="120" />
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

    <el-dialog v-model="dialogFormVisible" title="新增/修改报损单" @close="addDialogClosed" :close-on-click-modal='false'
        draggable>
        <el-form :model="addForm" :rules="addForm" ref="addFormRef">
            <el-form-item label="报损产品：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入报损产品" />
                <div class="tip">报损产品</div>
            </el-form-item>
            <el-form-item label="报损日期：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入报损日期" />
                <div class="tip">报损日期</div>
            </el-form-item>
            <el-form-item label="仓库位置：" prop="payment" :label-width="formLabelWidth">
                <el-select placeholder="=请选择="></el-select>
                <div class="tip">仓库位置</div>
            </el-form-item>
            <el-form-item label="批次：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入批次" />
                <div class="tip">批次</div>
            </el-form-item>
            <el-form-item label="报损数量：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入报损数量" />
                <div class="tip">报损数量</div>
            </el-form-item>
            <el-form-item label="报损原因：" prop="payment" :label-width="formLabelWidth">
                <el-input type="textarea" v-model="addForm.payment" placeholder="请输入报损原因"  class="textarea"/>
                <div class="tip">报损原因</div>
            </el-form-item>
           
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确认提交</el-button>
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
            productFormVisible: false,
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
                width: '150px',
                display: 'block'
            }],
            style2: [{
                display: 'block',
                width: '100px'
            }]


        }
    },
    components: {
    FunctionKey,
},
}

</script>


    
<style scoped>


.el-input{
    width: 250px;
}
.input2 {
    width: 200px;
}

.textarea{
    width: 300px;
}
.el-select{
    width: 250px;
}






</style>
      