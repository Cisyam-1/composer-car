<template>
    <div class="top">
        <div class="top1">
            <span>生产流程管理</span>
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
        <el-table-column prop="date" label="节点名称" width="100" />
        <el-table-column prop="name" label="节点值" width="100" />
        <el-table-column prop="name" label="权限分公司" width="100" />
        <el-table-column prop="name" label="权限部门" width="100" />
        <el-table-column prop="name" label="审核列表" width="100" />
        <el-table-column prop="name" label="行为节点" width="100" />
        <el-table-column prop="name" label="驳回节点" width="100"></el-table-column>
        <el-table-column prop="name" label="字段控制" width="120" />
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

    <el-dialog v-model="dialogFormVisible" title="新增/修改生产流程" @close="addDialogClosed" :close-on-click-modal='false'
        draggable class="productprocess_dialog">
        <!-- <el-divider /> -->
        <el-form :model="addForm" :rules="addForm" ref="addFormRef">
            <el-divider content-position="left">流程节点名称</el-divider>
            <el-form-item label="节点名称：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入节点名称"  />
                <div class="tip">节点名称</div>
            </el-form-item>
            <el-form-item label="节点值：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入节点值"  />
                <div class="tip">节点值</div>
            </el-form-item>
            <el-divider content-position="left">权限选项（设定可以看到该流程订单的人员）</el-divider>
            <el-form-item label="权限部门1：" prop="payment" :label-width="formLabelWidth">
                <el-select v-model="value"  placeholder="分公司" :style="style1">
                    <el-option v-for="item in payment" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
                <el-select v-model="value"  placeholder="=请选择=" :style="style1">
                    <el-option v-for="item in payment" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
                <el-select v-model="value"  placeholder="=请选择=" :style="style1">
                    <el-option v-for="item in payment" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </el-form-item>
            <el-divider content-position="left">审核选项（设定各分公司可以审核该流程订单的人员）</el-divider>
            <el-form-item label="广州米利：" prop="payment" :label-width="formLabelWidth">
                <el-select v-model="value"  placeholder="部门" :style="style1">
                    <el-option v-for="item in payment" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
                <el-select v-model="value"  placeholder="岗位" :style="style1">
                    <el-option v-for="item in payment" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
                <el-select v-model="value"  placeholder="级别" :style="style1">
                    <el-option v-for="item in payment" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </el-form-item>
            <el-form-item label="云南米利天然香料：" prop="payment" :label-width="formLabelWidth">
                <el-select v-model="value"  placeholder="部门" :style="style1">
                    <el-option v-for="item in payment" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
                <el-select v-model="value"  placeholder="岗位" :style="style1">
                    <el-option v-for="item in payment" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
                <el-select v-model="value"  placeholder="级别" :style="style1">
                    <el-option v-for="item in payment" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </el-form-item>
            <el-form-item label="云南米利食品：" prop="payment" :label-width="formLabelWidth">
                <el-select v-model="value"  placeholder="部门" :style="style1">
                    <el-option v-for="item in payment" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
                <el-select v-model="value"  placeholder="岗位" :style="style1">
                    <el-option v-for="item in payment" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
                <el-select v-model="value"  placeholder="级别" :style="style1">
                    <el-option v-for="item in payment" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </el-form-item>
            <el-divider content-position="left">其他节点设置</el-divider>
            <el-form-item label="行为节点：" prop="payment" :label-width="formLabelWidth">
                <el-select v-model="value" class="select1" placeholder="=请选择=" :style="style1" >
                    <el-option v-for="item in payment" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
                <div class="tip">行为节点</div>
            </el-form-item>
            <el-form-item label="驳回节点：" prop="payment" :label-width="formLabelWidth">
                <el-select v-model="value" class="select1" placeholder="=请选择=" :style="style1">
                    <el-option v-for="item in payment" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
                <div class="tip">驳回节点</div>
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


    
<style >
.productprocess_dialog {
    width: 50% !important;
   
}

.textarea{
    width: 300px;
}


</style>
      