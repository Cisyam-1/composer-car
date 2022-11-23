<template>
    <div class="top">
        <div class="top1">
            <span>产品管理</span>
        </div>
        <div class="top2">
            <el-input placeholder="关键词" class="input2"></el-input>
            <el-button class="search" @click="search">查询</el-button>
            <el-button class="add" @click="dialogFormVisible = true">新增</el-button>
        </div>
    </div>
    <el-table :data="tableData" border style="width: 120%">
        <el-table-column type="selection" width="100" />    
        <el-table-column type="index" label="ID" width="120"></el-table-column>
        <el-table-column prop="date" label="产品名称" width="120" />
        <el-table-column prop="name" label="类别" width="120" />
        <el-table-column prop="name" label="产品编号" width="120" />
        <el-table-column prop="name" label="主图" width="120" />
        <el-table-column prop="name" label="规格型号" width="120" ><a href=""></a></el-table-column>
        <el-table-column prop="name" label="原价" width="120" />
        <el-table-column prop="name" label="售价" width="120" />
        <el-table-column prop="name" label="库存" width="120" />
        <el-table-column prop="name" label="销量" width="120" />
        <el-table-column prop="name" label="上架时间" width="120" />
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

    <el-dialog v-model="dialogFormVisible" title="新增/修改客户" @close="addDialogClosed" :close-on-click-modal='false'
        draggable>
        <!-- <el-divider /> -->
        <el-form :model="addForm" :rules="addForm" ref="addFormRef">
            <el-form-item label="客户名称：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入客户名称" />
                <div class="tip">客户类别</div>
            </el-form-item>
            <el-form-item label="合同编号：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入合同编号" />
                <div class="tip">合同编号</div>
            </el-form-item>
            <el-form-item label="签订日期：" prop="payment" :label-width="formLabelWidth">
                <el-date-picker v-model="value1" type="date" placeholder="Pick a day" :size="size" />
                <div class="tip">签订日期</div>
            </el-form-item>
            <el-form-item label="联系电话：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入联系电话" />
                <div class="tip">联系电话</div>
            </el-form-item>
            <el-form-item label="合同金额：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入合同金额" />
                <div class="tip">合同金额</div>
            </el-form-item>
            <el-form-item label="付款方式：" prop="payment" :label-width="formLabelWidth">
                <el-select v-model="value" class="m-2" placeholder="Select">
                    <el-option v-for="item in payment" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
                <div class="tip">付款方式</div>
            </el-form-item>
            <el-form-item label="已付金额：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入已付金额" />
                <div class="tip">已付金额</div>
            </el-form-item>
            <el-form-item label="剩余尾款：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入剩余尾款" />
                <div class="tip">剩余尾款</div>
            </el-form-item>
            <el-form-item label="签约人：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入签约人" />
                <div class="tip">签约人</div>
            </el-form-item>
            <el-form-item label="备注：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入备注" />
                <div class="tip">备注</div>
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
            payment:[{
                value:'',
                label:'现金'
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


</style>
      