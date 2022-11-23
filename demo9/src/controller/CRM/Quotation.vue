<template>
    <div class="top">
        <div class="top1">
            <span>报价单管理</span>
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
        <el-table-column v-for="(item, index) in headArr" :key="index" :prop="item.prop" :label="item.label" />
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

    <el-dialog v-model="dialogFormVisible" title="新增/修改报价单" @close="addDialogClosed" :close-on-click-modal='false'
        draggable class="quotation_dialog">
        <!-- <el-divider /> -->
        <el-form :model="addForm" :rules="addForm" ref="addFormRef">
            <el-form-item label="新建报价单" prop="payment" style="width:85px !important;">
                <el-select class="m-2-1" placeholder="=选择客户=" >
                    <el-option v-for="item in payment" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </el-form-item>
            <el-form-item prop="payment"  class="selelct-inline">
                <el-select class="m-2" placeholder="=类型=">
                    <el-option v-for="item in payment" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </el-form-item>
            <el-form-item prop="payment"  class="selelct-inline">
                <el-select class="m-2" placeholder="=类别=">
                    <el-option v-for="item in payment" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </el-form-item>
            <el-form-item prop="payment" class="selelct-inline">
                <el-select class="m-2" placeholder="=产品名称=">
                    <el-option v-for="item in payment" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </el-form-item>
            <el-form-item prop="payment"  class="selelct-inline">
                <el-select class="m-2" placeholder="=规格型号=">
                    <el-option v-for="item in payment" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </el-form-item>
            <el-form-item prop="payment"  class="selelct-inline">
                <el-input placeholder="数量" /> 
            </el-form-item>
            <el-form-item prop="payment"  class="selelct-inline">
                <el-select class="m-2" placeholder="单位">
                    <el-option v-for="item in unit" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </el-form-item>
            <el-form-item prop="payment"  class="selelct-inline">
                <el-input placeholder="单价" /> 
            </el-form-item>
            <el-form-item prop="payment"  class="selelct-inline">
                <el-input placeholder="金额"  /> 
            </el-form-item>
            <el-button  type="primary" @click="addlist" class="m-2-add">添加</el-button>
        </el-form>
        <el-divider content-position="left">订单列表</el-divider>

        <el-table :data="FormData" border style="width: 100%" v-for="items in FormData">
            <el-table-column  width="90">
                <el-checkbox v-model="checked1" size="small" />
            </el-table-column>
            <el-table-column type="index" label="序号" width="90"></el-table-column>
            <el-table-column prop="name" label="类型" width="90" ></el-table-column>
            <el-table-column prop="name" label="类别" width="90" ></el-table-column>
            <el-table-column prop="name" label="名称" width="90" ></el-table-column>
            <el-table-column prop="name" label="规格型号" width="90"></el-table-column>
            <el-table-column prop="name" label="数量" width="90" ></el-table-column>
            <el-table-column prop="name" label="单位" width="90" ></el-table-column>
            <el-table-column prop="name" label="单价" width="90" ></el-table-column>
            <el-table-column prop="name" label="金额" width="90" ></el-table-column>
        </el-table>

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
            FormData: [{

            }],
            headArr:[
                {prop:"date", label:"报价单编号"},
                {prop:"name", label:"客户名称"},
                {prop:"name", label:"总数量"},
                { prop:"name", label:"总金额"},
                {prop:"name", label:"已付金额"},
                {prop:"name", label:"未付金额"},
                {prop:"name", label:"下单时间"},
                {prop:"name", label:"支付时间"},
                {prop:"name", label:"报价方式"},
                {prop:"name", label:"下单IP"},
                {prop:"name", label:"下单人"},
                {prop:"name", label:"状态"}
            ]


        }
    },
    components: {
    FunctionKey,
    Pagination
},
    methods:{
        addlist(){

        }
    }
}

</script>
 
<style >
.quotation_dialog {
    width: 50% !important;
    max-height: 600px;
    display: block;
    overflow-y: auto;

}

.el-input{
    width: 105px;
}

.selelct-inline {
    display:inline-table;
}

.m-2{
    margin-left: 0;
}
.m-2-1{
    width: 300px;
}

.m-2-add{
    margin-left: 10px;
    margin-top: -2px;
}


</style>
      