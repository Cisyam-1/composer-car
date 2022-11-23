<template>
    <div class="top">
        <div class="top1">
            <span>城市管理</span>
        </div>
        <div class="top2">
            <el-input placeholder="关键词"></el-input>
            <el-select v-model="value" class="m-2" placeholder="Select" size="20px">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
            <el-select v-model="value" class="m-2" placeholder="=区县=" size="20px">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
            <el-button class="search" @click="search">查询</el-button>
            <el-button class="add" @click="dialogFormVisible = true">新增</el-button>
        </div>
    </div>
    <div class="table">
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column type="selection" width="100" />
            <el-table-column type="index" width="100" label="ID"/>
            <el-table-column v-for="(item, index) in headArr" :key="index" :prop="item.prop" :label="item.label" />
            <el-table-column label="修改">
                <el-icon @click="dialogFormVisible = true">
                    <EditPen />
                </el-icon>
            </el-table-column>
            <el-table-column label="删除">
                <el-icon @click="removeUserById()">
                    <Delete />
                </el-icon>
            </el-table-column>
        </el-table>
        <FunctionKey />
    </div>
    <el-dialog v-model="dialogFormVisible" title="新增/修改城市管理" @close="addDialogClosed" :close-on-click-modal='false'
        draggable>
        <!-- <el-divider /> -->
        <el-form :model="addPaymentForm" :rules="addPaymentForm" ref="addPaymentFormRef">
            <el-form-item label="标题名称：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addPaymentForm.payment" style="width: 250px" />
                <div class="tip">标题名称</div>
            </el-form-item>
            <el-form-item label="城市编码：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addPaymentForm.payment" style="width: 250px" />
                <div class="tip">城市编码</div>
            </el-form-item>
            <el-form-item label="区号：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addPaymentForm.payment" style="width: 250px" />
                <div class="tip">区号</div>
            </el-form-item>
            <el-form-item label="邮政编码：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addPaymentForm.payment" style="width: 250px" />
                <div class="tip">邮政编码</div>
            </el-form-item>
            <el-form-item label="标题名称" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addPaymentForm.payment" style="width: 250px" />
                <div class="tip">标题名称</div>
            </el-form-item>
            <el-form-item label="拼音：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addPaymentForm.payment" style="width: 250px" />
                <div class="tip">拼音</div>
            </el-form-item>
            <el-form-item label="英文名：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addPaymentForm.payment" style="width: 250px" />
                <div class="tip">英文名</div>
            </el-form-item>
            <el-form-item label="英文简称：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addPaymentForm.payment" style="width: 250px" />
                <div class="tip">英文简称</div>
            </el-form-item>
            <el-form-item label="经度：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addPaymentForm.payment" style="width: 250px" />
                <div class="tip">经度</div>
            </el-form-item>
            <el-form-item label="纬度：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addPaymentForm.payment" style="width: 250px" />
                <div class="tip">纬度</div>
            </el-form-item>
            <el-form-item label="级别：" prop="payment" :label-width="formLabelWidth">
                <el-select v-model="addPaymentForm.payment" style="width: 250px" />
                <div class="tip">级别</div>
            </el-form-item>
            <el-form-item label="父级：" prop="payment" :label-width="formLabelWidth">
                <el-select v-model="addPaymentForm.payment" style="width: 250px" />
                <div class="tip">父级</div>
            </el-form-item>
            <el-form-item label="排序：" prop="payment" :label-width="formLabelWidth">
                <el-select v-model="addPaymentForm.payment" style="width: 250px" />
                <div class="tip">排序</div>
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
import City from '../../api/City';
import FunctionKey from '../../components/page/FunctionKey.vue'
export default {
    data() {
        return {
            dialogFormVisible: false,
            formLabelWidth: '140px',
            addPaymentForm: {},
            tableData: [{
                date: '123',
            }],
            headArr: [
                { prop: "date", label: "编码" },
                { prop: "name", label: "简称" },
                { prop: "address",label: "级别" },
                { prop: "date", label: "父级"},
                { prop: "date", label: "区号"},
                { prop: "date", label: "邮政编码"},
                { prop: "date", label: "拼音"},
                { prop: "date", label: "英文名"},
                { prop: "date", label: "英文简写"},
                { prop: "date", label: "经度"},
                { prop: "date", label: "纬度"},
                { prop: "date", label: "子数目"},
                {prop: "date", label: "排序"},
            ],
            options: [{
                value: '1',
                label: '湖北省',
            }]

        }
    },
    components: {
        FunctionKey,
    },
    methods: {
        removeUserById() {
            this.$confirm('此操作将永久删除用户, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$message({ type: 'success', message: '删除成功!' });
            }).catch(() => {
                this.$message({ type: 'info', message: '已取消删除' });
            });
        },

        created() {
            this.getTableData();
            console.log()

        },
        getTableData(){
            City.show().then((res)=>{
                console.log(res.data.data);
                this.tableData=res.data.data;
        })
        }
    }
}

</script>


  