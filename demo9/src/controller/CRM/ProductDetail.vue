<template>
    <div class="top">
        <div class="top1">
            <span>产品规格值管理</span>
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
        <el-table-column prop="date" label="产品" width="120" />
        <el-table-column prop="name" label="规格名称" width="120" />
        <el-table-column prop="name" label="图片" width="120" />
        <el-table-column prop="name" label="价格" width="120" />
        <el-table-column prop="name" label="原价" width="120" />
        <el-table-column prop="name" label="成本价" width="120" />
        <el-table-column prop="name" label="库存" width="120" />
        <el-table-column prop="name" label="预警库存" width="120" />
        <el-table-column prop="name" label="条形码" width="120" />
        <el-table-column prop="name" label="规格编码" width="120" />
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

    <el-dialog v-model="dialogFormVisible" title="新增/修改产品规格值" @close="addDialogClosed" :close-on-click-modal='false'
        draggable>
        <!-- <el-divider /> -->
        <el-form :model="addForm" :rules="addForm" ref="addFormRef">
            <el-form-item label="产品名称：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入产品名称" />
                <div class="tip">产品名称</div>
            </el-form-item>
            <el-form-item label="规格：" prop="payment" :label-width="formLabelWidth">
                <el-select v-model="value" class="m-2" placeholder="Select">
                    <el-option v-for="item in payment" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
                <div class="tip">规格</div>
            </el-form-item>
            <el-form-item label="货号：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入货号" />
                <div class="tip">货号</div>
            </el-form-item>
            <el-form-item label="图片：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入图片" />
                <div class="tip">图片</div>
            </el-form-item>
            <el-form-item label="售价：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入售价" />
                <div class="tip">售价</div>
            </el-form-item>
            <el-form-item label="原价：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入原价" />
                <div class="tip">原价</div>
            </el-form-item>
            <el-form-item label="成本价：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入成本价" />
                <div class="tip">成本价</div>
            </el-form-item>
            <el-form-item label="库存：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入库存" />
                <div class="tip">库存</div>
            </el-form-item>
            <el-form-item label="预警库存：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入预警库存" />
                <div class="tip">预警库存</div>
            </el-form-item>
            <el-form-item label="条形码：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入条形码" />
                <div class="tip">条形码</div>
            </el-form-item>
            <el-form-item label="货号：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入货号" />
                <div class="tip">货号</div>
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
            payment:[{
                value:'',
                label:'现金'
            }]
        }
    },
    components: {
    FunctionKey,
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
      