//采购申请
<template>
    <div class="top">
        <div class="top1">
            <span>采购指令管理</span>
        </div>
        <div class="top2">
            <el-input placeholder="关键词" class="input2"></el-input>
            <el-button class="search" @click="search">查询</el-button>
        </div>
    </div>
    <el-table :data="tableData" border style="width: 100%">
        <el-table-column type="selection" width="100" />    
        <el-table-column type="index" label="ID" width="120"></el-table-column>
        <el-table-column prop="date" label="来源订单" width="120" />
        <el-table-column prop="name" label="物料编码" width="120" />
        <el-table-column prop="name" label="采购数量" width="120" />
        <el-table-column prop="name" label="单位" width="120" />
        <el-table-column prop="name" label="备注" width="120" />
        <el-table-column prop="name" label="指令人" width="120" />
        <el-table-column prop="name" label="创建时间" width="120" />
        <el-table-column label="修改">
            <el-icon >
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
      