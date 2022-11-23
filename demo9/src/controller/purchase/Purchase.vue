<template>

    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="采购环节" name="first">
            <div class="top1">
                <el-input placeholder="关键词" class="input2"></el-input>
                <el-button class="search" @click="search">查询</el-button>
                <el-button class="add" @click="dialogFormVisible = true">新增</el-button>
            </div>
            <el-table :data="tableData" border style="width: 120%">
                <el-table-column>
                    <el-checkbox v-model="checked1" size="large" />
                </el-table-column>
                <el-table-column type="index" label="ID" width="120"></el-table-column>
                <el-table-column prop="date" label="采购订单号" width="120" />
                <el-table-column prop="name" label="供应商名称" width="120" />
                <el-table-column prop="name" label="供应商代码" width="120" />
                <el-table-column prop="name" label="总数量" width="120" />
                <el-table-column prop="name" label="总金额" width="120" />
                <el-table-column prop="name" label="预付金额" width="120" />
                <el-table-column prop="name" label="未付金额" width="120" />
                <el-table-column prop="name" label="预交日期" width="120" />
                <el-table-column prop="name" label="下单时间" width="120" />
                <el-table-column prop="name" label="采购员" width="120" />
                <el-table-column prop="name" label="审核人员" width="80" />
                <el-table-column prop="name" label="状态" width="80" />
                <el-table-column prop="name" label="备注" width="80" />
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

        </el-tab-pane>
        <el-tab-pane label="报检环节" name="second">
            <div class="top1">
                <el-input placeholder="关键词" class="input2"></el-input>
                <el-button class="search" @click="search">查询</el-button>
                <el-button class="add" @click="dialogFormVisible = true">新增</el-button>
            </div>
            <el-table :data="tableData" border style="width: 120%">
                <el-table-column>
                    <el-checkbox v-model="checked1" size="large" />
                </el-table-column>
                <el-table-column type="index" label="ID" width="120"></el-table-column>
                <el-table-column prop="date" label="采购订单号" width="120" />
                <el-table-column prop="name" label="供应商名称" width="120" />
                <el-table-column prop="name" label="供应商代码" width="120" />
                <el-table-column prop="name" label="总数量" width="120" />
                <el-table-column prop="name" label="总金额" width="120" />
                <el-table-column prop="name" label="预付金额" width="120" />
                <el-table-column prop="name" label="未付金额" width="120" />
                <el-table-column prop="name" label="预交日期" width="120" />
                <el-table-column prop="name" label="下单时间" width="120" />
                <el-table-column prop="name" label="采购员" width="120" />
                <el-table-column prop="name" label="审核人员" width="80" />
                <el-table-column prop="name" label="状态" width="80" />
                <el-table-column prop="name" label="备注" width="80" />
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
        </el-tab-pane>
        <el-tab-pane label="检验环节" name="third">
            <div class="top1">
                <el-input placeholder="关键词" class="input2"></el-input>
                <el-button class="search" @click="search">查询</el-button>
                <el-button class="add" @click="dialogFormVisible = true">新增</el-button>
            </div>
            <el-table :data="tableData" border style="width: 120%">
                <el-table-column>
                    <el-checkbox v-model="checked1" size="large" />
                </el-table-column>
                <el-table-column type="index" label="ID" width="120"></el-table-column>
                <el-table-column prop="date" label="采购订单号" width="120" />
                <el-table-column prop="name" label="供应商名称" width="120" />
                <el-table-column prop="name" label="供应商代码" width="120" />
                <el-table-column prop="name" label="总数量" width="120" />
                <el-table-column prop="name" label="总金额" width="120" />
                <el-table-column prop="name" label="预付金额" width="120" />
                <el-table-column prop="name" label="未付金额" width="120" />
                <el-table-column prop="name" label="预交日期" width="120" />
                <el-table-column prop="name" label="下单时间" width="120" />
                <el-table-column prop="name" label="采购员" width="120" />
                <el-table-column prop="name" label="审核人员" width="80" />
                <el-table-column prop="name" label="状态" width="80" />
                <el-table-column prop="name" label="备注" width="80" />
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
        </el-tab-pane>
        <el-tab-pane label="入库环节" name="fourth">
            <div class="top1">
                <el-input placeholder="关键词" class="input2"></el-input>
                <el-button class="search" @click="search">查询</el-button>
                <el-button class="add" @click="dialogFormVisible = true">新增</el-button>
            </div>
            <el-table :data="tableData" border style="width: 120%">
                <el-table-column type="selection" width="100" />    
                <el-table-column type="index" label="ID" width="120"></el-table-column>
                <el-table-column prop="date" label="采购订单号" width="120" />
                <el-table-column prop="name" label="供应商名称" width="120" />
                <el-table-column prop="name" label="供应商代码" width="120" />
                <el-table-column prop="name" label="总数量" width="120" />
                <el-table-column prop="name" label="总金额" width="120" />
                <el-table-column prop="name" label="预付金额" width="120" />
                <el-table-column prop="name" label="未付金额" width="120" />
                <el-table-column prop="name" label="预交日期" width="120" />
                <el-table-column prop="name" label="下单时间" width="120" />
                <el-table-column prop="name" label="采购员" width="120" />
                <el-table-column prop="name" label="审核人员" width="80" />
                <el-table-column prop="name" label="状态" width="80" />
                <el-table-column prop="name" label="备注" width="80" />
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
        </el-tab-pane>
    </el-tabs>



    <el-dialog v-model="dialogFormVisible" title="新增/修改采购" @close="addDialogClosed" :close-on-click-modal='false'
        draggable class="purchase_dialog">
        <!-- <el-divider /> -->
        <el-divider content-position="left">采购单
            <el-select v-model="value"  placeholder="=选择客户=" :style="headerselect">
                <el-option v-for="item in customer" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
        </el-divider>
        <el-table :data="FormData" border style="width: 100%">
            <el-table-column width="100">
                <el-checkbox v-model="checked1" size="small" />
            </el-table-column>
            <el-table-column type="index" label="序号" width="100"></el-table-column>
            <el-table-column prop="name" label="原料名称" width="100"></el-table-column>
            <el-table-column prop="name" label="原料编码" width="100"></el-table-column>
            <el-table-column prop="name" label="数量" width="100"></el-table-column>
            <el-table-column prop="name" label="单位" width="100"></el-table-column>
            <el-table-column prop="name" label="单价" width="100"></el-table-column>
            <el-table-column prop="name" label="金额" width="100"></el-table-column>
            <el-table-column prop="name" label="备注" width="120"></el-table-column>
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
                    update: 'Tom',
                    delete: '<el-icon @click="delete()"><Delete /></el-icon>'
                },
            ],
            formLabelWidth: '140px',
            FormData: [{}],
            headerselect: [{ width: '250px' }]


        }
    },
    components: {
        FunctionKey,
        Pagination
    },
    methods: {

    }
}

</script>

<style >
.purchase_dialog{
    width: 50% !important;
    max-height: 600px;
    display: block;
    overflow-y: auto;

}

/* .el-input {
    width: 600px;
} */

.input2 {
    width: 200px;
}


</style>
