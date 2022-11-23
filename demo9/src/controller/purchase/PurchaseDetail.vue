<template>
    <div class="top">
        <div class="top1">
            <span>采购明细管理</span>
        </div>
        <div class="top2">
            <el-input placeholder="关键词" class="input2"></el-input>
            <el-button class="search" @click="search">查询</el-button>
        </div>
        <div class="top3">
            <el-button @click="checked">审核通过</el-button>
            <el-button>驳回</el-button>
            <el-button>去付款</el-button>
        </div>
    </div>
    <el-table :data="tableData" border style="width: 100%">
        <el-table-column type="selection" width="100" />    
        <el-table-column type="index" label="ID" width="150"></el-table-column>
        <el-table-column prop="date" label="订单编号" width="150" />
        <el-table-column prop="name" label="物料名称" width="150" />
        <el-table-column prop="name" label="物料编码" width="150" />
        <el-table-column prop="name" label="类别" width="150" />
        <el-table-column prop="name" label="数量" width="150" />
        <el-table-column prop="name" label="单位" width="150" />
        <el-table-column prop="name" label="单价" width="150" />
        <el-table-column prop="name" label="金额" width="150" />
        <el-table-column prop="name" label="审核人员" width="150" />
        <el-table-column prop="name" label="备注" width="150" />
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
    <FunctionKey/>
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
    methods:{
        checked(){
        }
    }
}

</script>
    
<style scoped>
.el-input {
    width: 250px;
}
.top3{
   float: right;
}

</style>
      