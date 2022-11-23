<template>
    <div class="top">
        <div class="top1">
            <span>生产进度管理</span>
        </div>
        <div class="top2">
            <el-input placeholder="关键词" class="input2"></el-input>
            <el-button class="search" @click="search">查询</el-button>
            <el-button>生产看板</el-button>
            <el-button class="add" @click="dialogFormVisible = true">新增</el-button>
        </div>
    </div>
    <el-table :data="tableData" border style="width: 100%">
        <el-table-column type="selection" width="100" />    
        <el-table-column type="index" label="ID" width="100"></el-table-column>
        <el-table-column prop="date" label="生产类型" width="100" />
        <el-table-column prop="name" label="订单编号" width="100" />
        <el-table-column prop="name" label="优先级" width="100" />
        <el-table-column prop="name" label="生产标题" width="100" />
        <el-table-column prop="name" label="生产代码" width="100" />
        <el-table-column prop="name" label="预计生产量" width="100" />
        <el-table-column prop="name" label="实际生产量" width="100"></el-table-column>
        <el-table-column prop="name" label="预计交付日期" width="120" />
        <el-table-column prop="name" label="实际交付日期" width="120" />
        <el-table-column prop="name" label="期望良率" width="100" />
        <el-table-column prop="name" label="实际良率" width="100" />
        <el-table-column prop="name" label="生产进度" width="100" />
        <el-table-column prop="name" label="备注" width="100" />
        <el-table-column prop="name" label="状态" width="100" />
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

    <el-dialog v-model="dialogFormVisible" title="新增/修改生产进度" @close="addDialogClosed" :close-on-click-modal='false'
        draggable>
        <!-- <el-divider /> -->
        <el-form :model="addForm" :rules="addForm" ref="addFormRef">
            <el-form-item label="生产标题：" prop="payment" :label-width="formLabelWidth">
                <el-radio-group v-model="radio1" class="ml-4">
                    <el-radio label="1" size="large">自主研发</el-radio>
                    <el-radio label="2" size="large">客户订单</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="生产标题：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入生产表题" />
                <div class="tip">生产标题</div>
            </el-form-item>
            <el-form-item label="生产代码：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入生产代码" />
                <div class="tip">生产代码</div>
            </el-form-item>
            <el-form-item label="生产标题：" prop="payment" :label-width="formLabelWidth">
                <el-radio-group v-model="radio1" class="ml-4">
                    <el-radio label="1" size="large">正常</el-radio>
                    <el-radio label="2" size="large">加急</el-radio>
                    <el-radio label="2" size="large">特急</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="预计生产量：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入预计生产量" />
                <div class="tip">预计生产量</div>
            </el-form-item>
            <el-form-item label="预计交付日期：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入预计交付日期" />
                <div class="tip">预计交付日期</div>
            </el-form-item>
            <el-form-item label="希望良率：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入期望良率" />
                <div class="tip">期望良率</div>
            </el-form-item>
            <el-form-item label="备注：" prop="payment" :label-width="formLabelWidth">
                <el-input type="textarea" v-model="addForm.payment" placeholder="请输入备注" class="textarea" />
                <div class="tip">备注</div>
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

.el-input {
    width: 250px;
}

.input2 {
    width: 200px;
}


.textarea {
    width: 500px;
}
</style>
      