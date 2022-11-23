<template>
    <div class="top">
        <div class="top1">
            <span>客户收货地址管理</span>
        </div>
        <div class="top2">
            <el-input placeholder="关键词" class="input2"></el-input>
            <el-button class="search" @click="search">查询</el-button>
            <el-button class="add" @click="dialogFormVisible = true">新增</el-button>
        </div>
    </div>
    <el-table :data="tableData" border style="width: 100%">
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
    <Functionkey />

    <el-dialog v-model="dialogFormVisible" title="新增/修改客户收货地址" @close="addDialogClosed" :close-on-click-modal='false'
        draggable>
        <!-- <el-divider /> -->
        <el-form :model="addForm" :rules="addForm" ref="addFormRef">
            <el-form-item label="联系人：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入联系人" />
                <div class="tip">联系人</div>
            </el-form-item>
            <el-form-item label="联系方式：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入联系方式" />
                <div class="tip">联系方式</div>
            </el-form-item>
            <el-form-item label="所在省份：" prop="payment" :label-width="formLabelWidth">
                <el-select v-model="value" placeholder="Select">
                    <el-option v-for="item in payment" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
                <div class="tip">所在省份</div>
            </el-form-item>
            <el-form-item label="所在城市：" prop="payment" :label-width="formLabelWidth">
                <el-select v-model="value" placeholder="Select">
                    <el-option v-for="item in payment" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
                <div class="tip">所在城市</div>
            </el-form-item>
            <el-form-item label="所在区县：" prop="payment" :label-width="formLabelWidth">
                <el-select v-model="value" placeholder="Select">
                    <el-option v-for="item in payment" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
                <div class="tip">所在区县</div>
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
import Customer_address from '../../api/Customer_address';
import Functionkey from '../../components/page/FunctionKey.vue'
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
            headArr: [
                { prop: "date", label: "客户" },
                { prop: "name", label: "联系人" },
                { prop: "name", label: "联系方式" },
                { prop: "name", label: "省份" },
                { prop: "name", label: "城市" },
                { prop: "name", label: "区县" },
                { prop: "name", label: "详细地址" },
                { prop: "name", label: "默认" },
                { prop: "name", label: "操作人" },
                { prop: "name", label: "操作时间" }
            ],
            formLabelWidth: '140px',
            payment: [{
                value: '',
                label: '现金'
            }]

        }
    },
    components: { Functionkey },
    created() {
        this.getTableData();
    },
    methods: {
        getTableData() {
            Customer_address.then((res) => {
                console.log(res.data.data)
                this.tableData = res.data.data
            })
        }
    }
}
</script>

<style scoped>
.el-input {
    width: 215px;
}

.input2 {
    width: 200px;
}
</style>



    

      