<template>
    <div class="top">
        <div class="top1">
            <span>库存管理</span>
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
        <el-table-column prop="date" label="物料名称" width="120" />
        <el-table-column prop="name" label="类别人" width="120" />
        <el-table-column prop="name" label="物料编码" width="120" />
        <el-table-column prop="name" label="供应商名称" width="120" />
        <el-table-column prop="name" label="库存数量" width="120" />
        <el-table-column prop="name" label="待入库" width="120" />
        <el-table-column prop="name" label="待出库" width="120" />
        <el-table-column prop="name" label="可用库存" width="120" />
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

    <el-dialog v-model="dialogFormVisible" title="新增/修改库存" @close="addDialogClosed" :close-on-click-modal='false'
        draggable>
        <!-- <el-divider /> -->
        <el-form :model="addForm" :rules="addForm" ref="addFormRef">
            <el-form-item label="所在分部：" prop="payment" :label-width="formLabelWidth">
                <el-select v-model="value" class="m-2" placeholder="=请选择=">
                    <el-option v-for="item in payment" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
                <div class="tip">所属分部</div>
            </el-form-item>
            <el-form-item label="仓储位置：" prop="payment" :label-width="formLabelWidth">
                <el-select v-model="value" class="m-2" placeholder="=仓区=" :style="style1">
                    <el-option v-for="item in payment" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
                <el-select v-model="value" class="m-2" placeholder="=子仓=" :style="style1">
                    <el-option v-for="item in payment" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
                <el-select v-model="value" class="m-2" placeholder="=仓位=" :style="style1">
                    <el-option v-for="item in payment" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
                <div class="tip">仓储位置</div>
            </el-form-item>
            <el-form-item label="类型：" prop="payment" :label-width="formLabelWidth">
                <el-radio-group v-model="radio1" class="ml-4">
                    <el-radio label="1" size="large">物料</el-radio>
                    <el-radio label="2" size="large">产品</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="物料类别：" prop="payment" :label-width="formLabelWidth">
                <el-select v-model="value" class="m-2" placeholder="=类别=" :style="style1">
                    <el-option v-for="item in payment" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
                <el-select v-model="value" class="m-2" placeholder="=大类=" :style="style1">
                    <el-option v-for="item in payment" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
                <el-select v-model="value" class="m-2" placeholder="=子类=" :style="style1">
                    <el-option v-for="item in payment" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
                <div class="tip">仓储位置</div>
            </el-form-item>
            <el-form-item label="物料名称：" prop="payment" :label-width="formLabelWidth">
                <el-select v-model="value" class="m-2" placeholder="=请选择=">
                    <el-option v-for="item in payment" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
                <div class="tip">物料名称</div>
            </el-form-item>
            <el-form-item label="品牌：" prop="payment" :label-width="formLabelWidth">
                <el-select v-model="value" class="m-2" placeholder="=请选择=">
                    <el-option v-for="item in payment" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
                <div class="tip">品牌</div>
            </el-form-item>
            <el-form-item label="批次号：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入批次号" />
                <div class="tip">批次号</div>
            </el-form-item>
            <el-form-item label="保持到期日：" prop="payment" :label-width="formLabelWidth">
                <el-date-picker v-model="value1" type="date" placeholder="请输入保持到期日" :size="size" />
                <div class="tip">保持到期日</div>
            </el-form-item>
            <el-form-item label="入库日期：" prop="payment" :label-width="formLabelWidth">
                <el-date-picker v-model="value1" type="date" placeholder="请输入入库日期" :size="size" />
                <div class="tip">入库日期</div>
            </el-form-item>
            <el-form-item label="入库数量：" prop="payment" :label-width="formLabelWidth">
               <el-input placeholder="请输入库数量"/>
                <div class="tip">入库数量</div>
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
            payment: [{
                value: '',
                label: '现金'
            }],
            style1: [{ width: '80px' }]

        }
    },
    components: {
    FunctionKey,
    Pagination
},
}

</script>
    
<style scoped>
.el-dialog {
    width: 500x;
    max-height: 500px;
    display: block;
    overflow-y:hidden;
}


.el-input {
    width: 250px;
}

.input2 {
    width: 200px;
    
}

.el-select{
    width:max-content;
}


</style>
      