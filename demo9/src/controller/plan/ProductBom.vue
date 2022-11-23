<template>
    <div class="top">
        <div class="top1">
            <span>生产BOM管理</span>
        </div>
        <div class="top2">
            <el-input placeholder="关键词" class="input2"></el-input>
            <el-button class="search" @click="search">查询</el-button>
            <el-button class="add" @click="dialogFormVisible = true">新增</el-button>
        </div>
    </div>
    <el-table :data="tableData" border style="width: 100%">
        <el-table-column type="selection" width="100" />    
        <el-table-column type="index" label="ID" width="150"></el-table-column>
        <el-table-column prop="date" label="物料型号" width="150" />
        <el-table-column prop="name" label="原料编码" width="150" />
        <el-table-column prop="name" label="联系方式" width="150" />
        <el-table-column prop="name" label="用量" width="150" />
        <el-table-column prop="name" label="备注" width="150" />
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

    <el-dialog v-model="dialogFormVisible" title="新增/修改生产BOM" @close="addDialogClosed" :close-on-click-modal='false'
        draggable>
        <!-- <el-divider /> -->
        <el-form :model="addForm" :rules="addForm" ref="addFormRef">
            <el-form-item label="产品类别：" prop="payment" :label-width="formLabelWidth">
                <el-select placeholder="=类别=" :style="style1"></el-select>
                <el-select placeholder="=子类=" :style="style1"></el-select>
                <div class="tip">产品类别</div>
            </el-form-item>
            <el-form-item label="规格型号：" prop="payment" :label-width="formLabelWidth">
             <el-select placeholder="=请选择=" ></el-select>
                <div class="tip">规格型号</div>
            </el-form-item>
            <el-form-item label="规格型号：" prop="payment" :label-width="formLabelWidth">
                <el-radio-group v-model="radio2" class="ml-4">
                    <el-radio label="1">原料</el-radio>
                    <el-radio label="2">包材</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="原料：" prop="payment" :label-width="formLabelWidth">
                <el-select v-model="value" class="m-2" placeholder="=请选择=">
                    <el-option v-for="item in payment" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
                <div class="tip">所在省份</div>
            </el-form-item>
            <el-form-item label="原来用量：" prop="payment" :label-width="formLabelWidth">
                <el-input placeholder="用量/比例" :style="style1" />
                <el-select v-model="value" class="m-2" placeholder="=单位=" :style="style2">
                    <el-option v-for="item in payment" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
                <div class="tip">原料用量</div>
            </el-form-item>
            <el-form-item label="备注：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入备注"  type="textarea" class="textarea"/>
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
            style1: [{
                width: '105px'
            }],
            style2:[{
                width:'105px'
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

.textarea{
    width: 300px;
}
</style>
      