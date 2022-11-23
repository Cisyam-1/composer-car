<template>
    <div class="top">
        <div class="top1">
            <span>档案管理</span>
        </div>
        <div class="top2">
            <el-input placeholder="关键词"></el-input>
            <el-button class="search" @click="search">查询</el-button>
            <el-button class="add" @click="dialogFormVisible = true">新增</el-button>
        </div>
    </div>
    <el-table :data="tableData" border style="width: 100%">
        <el-table-column type="selection" width="100" />    
        <el-table-column type="index" label="ID" width="60"></el-table-column>
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
    <FunctionKey />
    <el-dialog v-model="dialogFormVisible" title="新增/修改部门" @close="addDialogClosed" 
    :close-on-click-modal='false' draggable  class="archive_dialog">
        <!-- <el-divider /> -->
        <el-form :model="addForm" :rules="addForm" ref="addFormRef">
            <el-form-item label="用户：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="输入ID/姓名查找" style="width: 450px;"/>
                <div class="tip">用户</div>
            </el-form-item>
            <el-form-item label="分公司：" prop="payment" :label-width="formLabelWidth">
                <el-select placeholder="=部门=" style="width: 450px;"/>
                <div class="tip">分公司</div>
            </el-form-item>
            <el-form-item label="部门职务：" prop="payment" :label-width="formLabelWidth">
                <el-select placeholder="=部门="  style="width: 150px;"/>
                <el-select placeholder="=组名="  style="width: 150px;"/>
                <el-select placeholder="=职务=" style="width: 150px;"/>
                <div class="tip">部门职务</div>
            </el-form-item>
            <el-form-item label="是否主管：" prop="payment" :label-width="formLabelWidth">
                <el-select placeholder="=部门=" style="width: 450px;"/>
                <div class="tip">是否主管</div>
            </el-form-item>
            <el-form-item label="学历：" prop="payment" :label-width="formLabelWidth">
                <el-select placeholder="=请选择=" style="width: 450px;"/>
                <div class="tip">学历</div>
            </el-form-item>
            <el-form-item label="工作经验：" prop="payment" :label-width="formLabelWidth">
                <el-select placeholder="=请选择=" style="width: 450px;"/>
                <div class="tip">工作经验</div>
            </el-form-item>
            <el-form-item label="qq号码：" prop="payment" :label-width="formLabelWidth">
                <el-input placeholder="请输入qq号码" style="width: 450px;"/>
                <div class="tip">qq号码</div>
            </el-form-item>
            <el-form-item label="微信号码：" prop="payment" :label-width="formLabelWidth">
                <el-input placeholder="请输入微信号码" style="width: 450px;"/>
                <div class="tip">微信号码</div>
            </el-form-item>
            <el-form-item label="入职日期：" prop="payment" :label-width="formLabelWidth">
                <el-date-picker v-model="value1" type="datetime" placeholder="请输入入职日期" format="YYYY/MM/DD HH:mm:ss" />
            </el-form-item>
            <el-form-item label="合同类型：" prop="payment" :label-width="formLabelWidth">
                <el-radio-group v-model="radio1" class="ml-4">
                    <el-radio label="1" size="large">长期合同</el-radio>
                    <el-radio label="2" size="large">短期合同</el-radio>
                    <el-radio label="2" size="large">无合同</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="合同日期：" prop="payment" :label-width="formLabelWidth">
                <el-date-picker v-model="value1" type="datetimerange" range-separator="To"
                    start-placeholder="开始日期" end-placeholder="结束日期"  style="width: 400px;"/>
            </el-form-item>
            <el-form-item label="薪水类型：" prop="payment" :label-width="formLabelWidth">
                <el-radio-group v-model="radio1" class="ml-4">
                    <el-radio label="1" size="large">月薪</el-radio>
                    <el-radio label="2" size="large">年薪</el-radio>
                    <el-radio label="2" size="large">临时</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="薪水：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入薪水" style="width: 450px;"/>
                <div class="tip">薪水</div>
            </el-form-item>
            <el-form-item label="薪水发放日：" prop="payment" :label-width="formLabelWidth">
                <el-select v-model="addForm.payment" placeholder="=请选择=" style="width: 450px;"/>
                <div class="tip">薪水发放日</div>
            </el-form-item>
            <el-form-item label="紧急联系人：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入紧急联系人" style="width: 450px;"/>
                <div class="tip">紧急联系人</div>
            </el-form-item>
            <el-form-item label="紧急联系人关系：" prop="payment" :label-width="formLabelWidth">
                <el-select v-model="addForm.payment" placeholder="=请选择=" style="width: 450px;"/>
                <div class="tip">紧急联系人关系</div>
            </el-form-item>
            <el-form-item label="紧急联系方式：" prop="payment" :label-width="formLabelWidth">
                <el-select v-model="addForm.payment" placeholder="请输入紧急联系方式" style="width: 450px;"/>
                <div class="tip">紧急联系方式</div>
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
            tableData: [{
                payment: '现金',
                address: 'No. 189, Grove St, Los Angeles',
            }],
            headArr:[
                {prop:"date", label:"账户ID"},
                {prop:"name", label:"用户名"},
                {prop:"", label:"姓名"},
                {prop:"", label:"性别"},
                {prop:"", label:"部门"},
                {prop:"", label:"组名"},
                {prop:"", label:"职务"},
                {prop:"", label:"主管"},
                {prop:"", label:"入职日期"},
                {prop:"", label:"学历"},
                {prop:"", label:"电话"},
                {prop:"", label:"出生日期"},
                {prop:"", label:"年龄"},
                {prop:"", label:"薪水"},
                {prop:"", label:"发放方式"},
                {prop:"", label:"合同编号"},
                {prop:"", label:"到期日期"},
                {prop:"", label:"状态"}


            ],
            
        }
    },
    components: {
        FunctionKey,
    },
}
</script>
  
<style >
.archive_dialog {
    width: 40% !important;
    max-height: 600px;
    display: block;
    overflow-y: auto;
}

</style>