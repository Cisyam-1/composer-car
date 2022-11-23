<template>
    <div class="top">
        <div class="top1">
            <span>出库管理</span>
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
        <el-table-column prop="date" label="申请单号" width="100" />
        <el-table-column prop="name" label="申请人" width="100" />
        <el-table-column prop="name" label="申请时间" width="100" />
        <el-table-column prop="name" label="审核人" width="100" />
        <el-table-column prop="name" label="审核时间" width="100" />
        <el-table-column prop="name" label="领用人" width="100" />
        <el-table-column prop="name" label="核准人" width="100"></el-table-column>
        <el-table-column prop="name" label="数量" width="120" />
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

    <el-dialog v-model="dialogFormVisible" title="新增/修改生产进度" @close="addDialogClosed" :close-on-click-modal='false'
        draggable class="outstock_dialog">
        <el-form :model="addForm" :rules="addForm" ref="addFormRef">
            <el-divider content-position="left">新建订单</el-divider>
            <div calss="orderlist">
                <span calss="first">1</span>
                <span>物料编码：</span> <el-input placeholder="物料编码" class="code"></el-input>
                <span>领用数量：</span> <el-input placeholder="领用数量" class="number"></el-input>
                <span>单位：</span> <el-select placeholder="单位" class="unit"></el-select>

            </div>
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
import Pagination from '../../components/page/Pagination .vue'
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
    Pagination
},
}

</script>


    
<style >
.outstock_dialog{
    width: 50% !important;
    max-height: 500px;
    display: block;
    overflow-y: auto;
}
.input2 {
    width: 200px;
}

.orderlist{
    display: inline-block;
}
.orderlist>span{
    margin-right: 10px;
}



.code{
    width: 200px;
}
.number{
    width: 100px;

}


.unit{
    width: 100px;
}

.orderlist>span{
    margin-left: 10px;
}



</style>
      