<template>
    <div class="top">
        <div class="top1">
            <span>供应商管理</span>
        </div>
        <div class="top2">
            <el-input placeholder="关键词" class="input2"></el-input>
            <!-- <el-select placeholder="=类别=" size="20px"></el-select> -->
            <el-button class="search" @click="search">查询</el-button>
            <el-button class="add" @click="dialogFormVisible = true">新增</el-button>
        </div>
    </div>
    <el-table :data="tableData" border style="width: 100%">
        <el-table-column type="selection" width="100" />    
        <el-table-column type="index" label="ID" width="100"></el-table-column>
        <el-table-column prop="date" label="类别" width="100" />
        <el-table-column prop="name" label="供应商名称" width="100" />
        <el-table-column prop="name" label="供应商代码" width="100" />
        <el-table-column prop="name" label="联系人" width="100" />
        <el-table-column prop="name" label="联系人电话" width="100" />
        <el-table-column prop="name" label="邮箱" width="100" />
        <el-table-column prop="name" label="产品" width="100"><span @click="productFormVisible = true">+</span>
        </el-table-column>
        <el-table-column prop="name" label="账户" width="100" />
        <el-table-column prop="name" label="网址" width="100" />
        <el-table-column prop="name" label="客服热线" width="100" />
        <el-table-column prop="name" label="城市" width="100" />
        <el-table-column prop="name" label="星级" width="100" />
        <el-table-column prop="name" label="业务员" width="100" />
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
    <Pagination/>
    <FunctionKey/>

    <el-dialog v-model="dialogFormVisible" title="新增/修改供应商" @close="addDialogClosed" :close-on-click-modal='false'
        draggable  class="supplier_dialog">
        <!-- <el-divider /> -->
        <el-form :model="addForm" :rules="addForm" ref="addFormRef">
            <el-form-item label="供应商类别：" prop="payment" :label-width="formLabelWidth">
                <el-select v-model="value" class="m-2" placeholder="=请选择=">
                    <el-option v-for="item in payment" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
                <div class="tip">供应商类别</div>
            </el-form-item>
            <el-form-item label="供应商名称：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入供应商名称" />
                <div class="tip">供应商名称</div>
            </el-form-item>
            <el-form-item label="供应商全称：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入供应商全称" />
                <div class="tip">供应商全称</div>
            </el-form-item>
            <el-form-item label="供应商代码：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入供应商代码" />
                <div class="tip">供应商代码</div>
            </el-form-item>
            <el-form-item label="描述：" prop="payment" :label-width="formLabelWidth">
                <el-input type="textarea" v-model="addForm.payment" placeholder="请输入描述" class="textarea" />
                <div class="tip">描述</div>
            </el-form-item>
            <el-form-item label="图片：" prop="payment" :label-width="formLabelWidth">
                <el-upload v-model:file-list="fileList" class="upload-demo"
                    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15" :on-change="handleChange">
                    <el-button type="primary">点击上传图片</el-button>
                </el-upload>
            </el-form-item>
            <el-form-item label="法人代表：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入法人代表" />
                <div class="tip">法人代表</div>
            </el-form-item>
            <el-form-item label="统一信用代码：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入统一信用代码" />
                <div class="tip">统一信用代码</div>
            </el-form-item>
            <el-form-item label="营业执照：" prop="payment" :label-width="formLabelWidth">
                <el-upload v-model:file-list="fileList" class="upload-demo"
                    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15" :on-change="handleChange">
                    <el-button type="primary">点击上传营业执照</el-button>
                </el-upload>
            </el-form-item>
            <el-form-item label="联系人：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入联系人" />
                <div class="tip">联系人</div>
            </el-form-item>
            <el-form-item label="公司电话：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入公司电话" />
                <div class="tip">公司电话</div>
            </el-form-item>
            <el-form-item label="手机号码：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入手机号码" />
                <div class="tip">手机号码</div>
            </el-form-item>
            <el-form-item label="客服热线：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入客服热线" />
                <div class="tip">客服热线</div>
            </el-form-item>
            <el-form-item label="邮箱地址：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入邮箱地址" />
                <div class="tip">邮箱地址</div>
            </el-form-item>
            <el-form-item label="网址：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入网址" />
                <div class="tip">网址</div>
            </el-form-item>
            <el-form-item label="所在城市：" prop="payment" :label-width="formLabelWidth">
                <el-select v-model="value" class="m-2" placeholder="=请选择省份=" :style="style1">
                    <el-option v-for="item in payment" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
                <el-select v-model="value" class="m-2" placeholder="=请选择城市=" :style="style1">
                    <el-option v-for="item in payment" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
                <el-select v-model="value" class="m-2" placeholder="=请选择区县=" :style="style1">
                    <el-option v-for="item in payment" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
                <div class="tip">所在城市</div>
            </el-form-item>
            <el-form-item label="详细地址：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入详细地址" />
                <div class="tip">详细地址</div>
            </el-form-item>
            <el-form-item label="内容介绍：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入内容介绍" type="textarea" class="textarea" />
                <div class="tip">内容介绍</div>
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确认提交</el-button>
            </span>
        </template>
    </el-dialog>

    <el-dialog v-model="productFormVisible" title="新增/修改生产BOM" @close="addDialogClosed" :close-on-click-modal='false'
        draggable>
        <!-- <el-divider /> -->
        <el-form :model="addForm" :rules="addForm" ref="addFormRef">
            <el-form-item label="供应商名称：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入供应商名称" />
                <div class="tip">供应商名称</div>
            </el-form-item>
            <el-form-item label="产品名称：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入产品编号" />
                <div class="tip">产品编号</div>
            </el-form-item>
            <el-form-item label="产品编号：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入产品编号" />
                <div class="tip">产品编号</div>
            </el-form-item>
            <el-form-item label="品牌名称：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="品牌名称" />
                <div class="tip">品牌名称</div>
            </el-form-item>
            <el-form-item label="规格型号：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入规格型号" />
                <div class="tip">规格型号</div>
            </el-form-item>
            <el-form-item label="价格：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="价格" />
                <div class="tip">价格</div>
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="productFormVisible = false">取消</el-button>
                <el-button type="primary" @click="productFormVisible = false">确定</el-button>
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
        Pagination
    },
}

</script>


    
<style >
.supplier_dialog{
    width: 40% !important;
    max-height: 500px;
    display: block;
    overflow-y: auto;
}

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
      