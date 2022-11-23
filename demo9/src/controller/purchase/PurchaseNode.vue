<template>
    <div class="top">
        <div class="top1">
            <span>行为节点管理</span>
        </div>
        <div class="top2">
            <el-input placeholder="关键词" class="input2"></el-input>
            <el-button class="search" @click="search">查询</el-button>
            <el-button class="add" @click="dialogFormVisible = true">新增</el-button>
        </div>
    </div>
    <el-table :data="tableData" border style="width: 100%">
        <el-table-column type="selection" width="100" />    
        <el-table-column type="index" label="ID" width="180"></el-table-column>
        <el-table-column prop="date" label="节点名称" width="180" />
        <el-table-column prop="name" label="描述" width="180" />
        <el-table-column prop="name" label="有效" width="180" />
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

    <el-dialog v-model="dialogFormVisible" title="新增/修改行为节点" @close="addDialogClosed" :close-on-click-modal='false'
        draggable>
        <!-- <el-divider /> -->
        <el-form :model="addForm" :rules="addForm" ref="addFormRef">
            <el-form-item label="节点名称：" prop="payment" :label-width="formLabelWidth">
                <el-select v-model="value" class="m-2" placeholder="=请选择=">
                    <el-option v-for="item in payment" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
                <div class="tip">节点名称</div>
            </el-form-item>
            <el-form-item label="描述：" prop="payment" :label-width="formLabelWidth">
                <el-input type="textarea" v-model="addForm.payment"  class="textarea" />
                <div class="tip">描述</div>
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
            productFormVisible:false,
            formLabelWidth: '140px',
            addForm: {},
            tableData: [
                {
                    id: '1',
                    date: '2016-05-03',
                },
            ],
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
    width: 600x;
    max-height: 600px;
    display: block;
    overflow-y: auto;
}


.el-input {
    width: 250px;
}


.dialog-footer button:first-child {
    margin-right: 10px;
}

.textarea {
    width: 300px;
}
</style>
      