<template>
    <div class="top">
        <div class="top1">
            <span>客户管理</span>
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
    <Pagination />
    <FunctionKey />

    <el-dialog v-model="dialogFormVisible" title="新增/修改客户" @close="addDialogClosed" :close-on-click-modal='false'
        draggable class="customer_dialog">
        <!-- <el-divider /> -->
        <el-form :model="addForm" :rules="addForm" ref="addFormRef" v-model="dialogFormVisible">
            <el-form-item label="客户类别：" prop="payment" :label-width="formLabelWidth">
                <el-select v-model="value" placeholder="=请选择级别=" size="20px" style="width:600px">
                    <el-option v-for="item in level" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
                <div class="tip">客户类别</div>
            </el-form-item>
            <el-form-item label="客户名称：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入客户名称" style="width:600px" />
                <div class="tip">客户名称</div>
            </el-form-item>
            <el-form-item label="客户全称：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入客户全称" style="width:600px" />
                <div class="tip">客户全称</div>
            </el-form-item>
            <el-form-item label="客户代码：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入客户全称" style="width:600px" />
                <div class="tip">客户代码</div>
            </el-form-item>
            <el-form-item label="描述：" prop="payment" :label-width="formLabelWidth">
                <el-input type="textarea" v-model="addForm.payment" placeholder="请输入描述" style="width:600px" />

            </el-form-item>
            <el-form-item label="图片：" prop="payment" :label-width="formLabelWidth">
                <el-upload v-model:file-list="fileList" class="upload-demo"
                    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15" multiple
                    :on-preview="handlePreview" :on-remove="handleRemove" :before-remove="beforeRemove" :limit="3"
                    :on-exceed="handleExceed">
                    <el-button type="primary">上传图片</el-button>
                    <template #tip>
                        <div class="el-upload__tip">
                            jpg/png files with a size less than 500KB.
                        </div>
                    </template>
                </el-upload>
            </el-form-item>
            <el-form-item label="法人代表：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入法人代表" style="width:600px" />
                <div class="tip">法人代表</div>
            </el-form-item>
            <el-form-item label="统一信用代码：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入同一信用代码" style="width:600px" />
                <div class="tip">统一信用代码</div>
            </el-form-item>
            <el-form-item label="营业执照：" prop="payment" :label-width="formLabelWidth">
                <el-upload v-model:file-list="fileList" class="upload-demo"
                    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15" multiple>
                    <el-button type="primary">上传营业执照</el-button>
                    <template #tip>
                        <div class="el-upload__tip">
                            jpg/png files with a size less than 500KB.
                        </div>
                    </template>
                </el-upload>
            </el-form-item>
            <el-form-item label="联系人：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入联系人" style="width:600px" />
                <div class="tip">联系人</div>
            </el-form-item>
            <el-form-item label="公司电话：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入公司电话" style="width:600px" />
                <div class="tip">公司电话</div>
            </el-form-item>
            <el-form-item label="手机号码：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入手机号码" style="width:600px" />
                <div class="tip">手机号码</div>
            </el-form-item>
            <el-form-item label="客服热线：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入客服热线" style="width:600px" />
                <div class="tip">客服热线</div>
            </el-form-item>
            <el-form-item label="邮箱地址：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入邮箱地址" style="width:600px" />
                <div class="tip">邮箱地址</div>
            </el-form-item>
            <el-form-item label="网址：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入网址" style="width:600px" />
                <div class="tip">网址</div>
            </el-form-item>
            <el-form-item label="内容介绍：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入内容介绍" style="width:600px" />
                <div class="tip">内容介绍</div>
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
import Customer from '../../api/Customer'
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
                    update: 'Tom',
                    delete: '<el-icon @click="delete()"><Delete /></el-icon>'
                },
            ],
            headArr: [
                { prop: "date", label: "类别" },
                { prop: "name", label: "客户名称" },
                { prop: "name", label: "客户代码" },
                { prop: "name", label: "联系人" },
                { prop: "name", label: "联系人电话" },
                { prop: "name", label: "邮箱" },
                { prop: "name", label: "网址" },
                { prop: "name", label: "客户热线" },
                { prop: "name", label: "收货地址" },
                { prop: "name", label: "星级" },
                { prop: "name", label: "业务员" }


            ],
            formLabelWidth: '140px',
            level: [{
                value: '1',
                label: '一级'
            },
            { value: '2', label: '二级' },
            { value: '3', label: '三级' }
            ],
            fatherlevel: [{}],
            fileList: [{}],

        }
    },
    components: {
        FunctionKey,
        Pagination
    },
    created() {
        this.getTableData();
    },
    methods: {
        getTableData() {
            Customer.then((res) => {
                console.log(res.data.data)
                this.tableData = res.data.data
            })
        }
    }
}
</script>
    
<style >
.customer_dialog {
    width: 50% !important;
    max-height: 800px;
    display: block;
    overflow-y: auto;
}

.input2 {
    width: 200px;
}
</style>
      