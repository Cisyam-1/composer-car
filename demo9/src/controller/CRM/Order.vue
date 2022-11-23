<template>

    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="销售板块" name="first">
            <div class="top2-1">
                <el-input placeholder="关键词" class="input2" v-model="queryInfo.query" clearable
                    @clear="getUsersList()" />
                <span>时间从：</span>
                <el-date-picker v-model="value1" type="daterange" range-separator="To" start-placeholder="Start date"
                    end-placeholder="End date" :size="size" />
                <el-select class="sale" placeholder="销售板块" />
                <el-button  @click="getOrderList()">查询</el-button>
                <el-button class="add" @click="dialogFormVisible = true">新增</el-button>
            </div>
            <el-table :data="tableData" border style="width: 120%">
                <el-table-column type="selection" width="100" />
                <el-table-column type="index" label="ID" width="120"></el-table-column>
                <el-table-column prop="date" label="订单编号" width="120" />
                <el-table-column prop="name" label="分公司" width="120" />
                <el-table-column prop="name" label="客户名称" width="120" />
                <el-table-column prop="name" label="总数量" width="120" />
                <el-table-column prop="name" label="总金额" width="120" />
                <el-table-column prop="name" label="已收金额" width="120" />
                <el-table-column prop="name" label="未收金额" width="120" />
                <el-table-column prop="name" label="发票需求" width="120" />
                <el-table-column prop="name" label="预计交期" width="120" />
                <el-table-column prop="name" label="下单时间" width="120" />
                <el-table-column prop="name" label="业务员" width="80" />
                <el-table-column prop="name" label="下单人" width="80" />
                <el-table-column prop="name" label="状态" width="80" />
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
        <el-tab-pane label="计划板块" name="second">
            <div class="top2-1">
                <el-input placeholder="关键词" class="input2"></el-input>
                <span>时间从：</span>
                <el-date-picker v-model="value1" type="daterange" range-separator="To" start-placeholder="Start date"
                    end-placeholder="End date" :size="size" />
                <el-select class="sale" placeholder="计划板块" />
                <el-button class="search" @click="search">查询</el-button>
                <el-button class="add" @click="dialogFormVisible = true">新增</el-button>
            </div>
            <el-table :data="tableData" border style="width: 120%">
                <el-table-column type="selection" width="100" />
                <el-table-column type="index" label="ID" width="120"></el-table-column>
                <el-table-column prop="date" label="订单编号" width="120" />
                <el-table-column prop="name" label="分公司" width="120" />
                <el-table-column prop="name" label="客户名称" width="120" />
                <el-table-column prop="name" label="总数量" width="120" />
                <el-table-column prop="name" label="总金额" width="120" />
                <el-table-column prop="name" label="已收金额" width="120" />
                <el-table-column prop="name" label="未收金额" width="120" />
                <el-table-column prop="name" label="发票需求" width="120" />
                <el-table-column prop="name" label="预计交期" width="120" />
                <el-table-column prop="name" label="下单时间" width="120" />
                <el-table-column prop="name" label="业务员" width="80" />
                <el-table-column prop="name" label="下单人" width="80" />
                <el-table-column prop="name" label="状态" width="80" />
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
        <el-tab-pane label="出货板块" name="third">
            <div class="top2-1">
                <el-input placeholder="关键词" class="input2"></el-input>
                <span>时间从：</span>
                <el-date-picker v-model="value1" type="daterange" range-separator="To" start-placeholder="Start date"
                    end-placeholder="End date" :size="size" />
                <el-select class="sale" placeholder="出货板块" />
                <el-button class="search" @click="search">查询</el-button>
                <el-button class="add" @click="dialogFormVisible = true">新增</el-button>
            </div>
            <el-table :data="tableData" border style="width: 120%">
                <el-table-column type="selection" width="100" />
                <el-table-column type="index" label="ID" width="120"></el-table-column>
                <el-table-column prop="date" label="订单编号" width="120" />
                <el-table-column prop="name" label="分公司" width="120" />
                <el-table-column prop="name" label="客户名称" width="120" />
                <el-table-column prop="name" label="总数量" width="120" />
                <el-table-column prop="name" label="总金额" width="120" />
                <el-table-column prop="name" label="已收金额" width="120" />
                <el-table-column prop="name" label="未收金额" width="120" />
                <el-table-column prop="name" label="发票需求" width="120" />
                <el-table-column prop="name" label="预计交期" width="120" />
                <el-table-column prop="name" label="下单时间" width="120" />
                <el-table-column prop="name" label="业务员" width="80" />
                <el-table-column prop="name" label="下单人" width="80" />
                <el-table-column prop="name" label="状态" width="80" />
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
        <el-tab-pane label="已完成订单" name="fourth">
            <div class="top2-1">
                <el-input placeholder="关键词" class="input2"></el-input>
                <span>时间从：</span>
                <el-date-picker v-model="value1" type="daterange" range-separator="To" start-placeholder="Start date"
                    end-placeholder="End date" :size="size" />
                <el-select class="sale" placeholder="已完成订单板块" />
                <el-button class="search" @click="search">查询</el-button>
                <el-button class="add" @click="dialogFormVisible = true">新增</el-button>
            </div>
            <el-table :data="tableData" border style="width: 120%">
                <el-table-column type="selection" width="100" />
                <el-table-column type="index" label="ID" width="120"></el-table-column>
                <el-table-column prop="date" label="订单编号" width="120" />
                <el-table-column prop="name" label="分公司" width="120" />
                <el-table-column prop="name" label="客户名称" width="120" />
                <el-table-column prop="name" label="总数量" width="120" />
                <el-table-column prop="name" label="总金额" width="120" />
                <el-table-column prop="name" label="已收金额" width="120" />
                <el-table-column prop="name" label="未收金额" width="120" />
                <el-table-column prop="name" label="发票需求" width="120" />
                <el-table-column prop="name" label="预计交期" width="120" />
                <el-table-column prop="name" label="下单时间" width="120" />
                <el-table-column prop="name" label="业务员" width="80" />
                <el-table-column prop="name" label="下单人" width="80" />
                <el-table-column prop="name" label="状态" width="80" />
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
    </el-tabs>

    <el-dialog v-model="dialogFormVisible" title="新增/修改客户" @close="addDialogClosed" :close-on-click-modal='false'
        draggable class="customer_dialog">
        <!-- <el-divider /> -->
        <el-divider content-position="left" >新建订单
            <el-select v-model="value" class="m-2" placeholder="=选择客户=" size="20px">
                <el-option v-for="item in customer" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
        </el-divider>
        <div class="list2">
            <el-select placeholder="=类型=" style="width: 80px;" />
            <el-select placeholder="=子类=" style="width: 80px;" />
            <el-select placeholder="=产品名称=" style="width: 120px;" />
            <el-select placeholder="=规格型号=" style="width: 120px;" />
            <el-input style="width: 80px;" />
            <el-select placeholder="=单位=" style="width: 80px;" />
            <el-input style="width: 80px;" />
            <el-input style="width: 80px;" />
            <el-button type="primary">添加</el-button>
        </div>
        <el-divider class="orderlist" content-position="left">订单列表</el-divider>
        <el-table :data="orderData" border style="width: 100%">
            <el-table-column type="index" label="序号" width="180"></el-table-column>
            <el-table-column v-for="(item, index) in headArr" :key="index" :prop="item.prop" :label="item.label" />
        </el-table>

        <el-divider class="orderlist" content-position="left">附件和其他</el-divider>
        <div class="adjunct">
            <el-form :model="form" label-width="120px">
                <el-form-item label="附件：">
                    <el-upload>
                        <el-button type="primary">Click to upload</el-button>
                        <template #tip>
                            <div class="el-upload__tip">
                                jpg/png files with a size less than 500KB.
                            </div>
                        </template>
                    </el-upload>
                </el-form-item>
                <el-form-item label="预计交期：">
                    <el-col :span="11">
                        <el-date-picker v-model="form.date1" type="date" placeholder="请输入预计交期" style="width: 100%" />
                    </el-col>
                </el-form-item>
                <el-form-item label="发票需求：">
                    <el-radio-group v-model="form.resource">
                        <el-radio label="无" />
                        <el-radio label="普票" />
                        <el-radio label="专票" />
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="税点：">
                    <el-input v-model="form.name" placeholder="请输入税点" style="width: 300px;" />
                    <div class="tip">税点</div>
                </el-form-item>
                <el-form-item label="收货地址：">
                    <el-input v-model="form.name" placeholder="请输入收货地址" style="width: 300px;" />
                    <div class="tip">收货地址</div>
                </el-form-item>
                <el-form-item label="业务员：">
                    <el-input v-model="form.name" placeholder="请输入业务员" style="width: 300px;" />
                    <div class="tip">业务员</div>
                </el-form-item>
                <el-form-item label="备注：">
                    <el-input v-model="form.name" placeholder="请输入备注" style="width: 300px;" />
                    <div class="tip">备注</div>
                </el-form-item>

            </el-form>


        </div>







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
            level: [
                { value: '1', label: '一级' },
                { value: '2', label: '二级' },
                { value: '3', label: '三级' }
            ],
            fatherlevel: [{}],
            fileList: [{}],
            customer: [{}],
            activeName: [{}],
            queryInfo: {
                query: "",
            },
            headArr: [
                { prop: "charsettype", label: "类别" },
                { prop: "charsettype", label: "子类" },
                { prop: "charsettype", label: "产品名称" },
                { prop: "charsettype", label: "规格型号" },
                { prop: "charsettype", label: "数量" },
                { prop: "charsettype", label: "单位" },
                { prop: "charsettype", label: "单价" },
                { prop: "charsettype", label: "金额" },
            ],
            form: [
                {}
            ]
        }
    },
    components: {
        FunctionKey,
        Pagination
    },
    methods: {
        async getOrderList() {
            const { data: res } = await this.$http.get("orders", {
                params: this.queryInfo,
            });
            if (res.meta.status != 200) {
                return this.$message.error("获取订单列表失败！");
            }
            console.log(res);
            this.orderList = res.data.orders;
            this.total = res.data.total;
        },
    }
}

</script>
    
<style >
.customer_dialog {
    width: 50% !important;
    max-height: 600px;
    display: block;
    overflow-y: auto;
}

.top2-1>span {
    font-size: 14px;
    margin-left: 10px;
}

.el-date-picker {
    margin-top: -7px;
}

.sale {
    margin-left: 10px;
    margin-right: 10px;
}

.list2>.el-select {
    margin-right: 10px;
}

.list2>.el-input {
    margin-right: 10px;
}

.orderlist {
    margin-top: 50px;
    margin-bottom: 20px;
}

.input2 {
    width: 200px;
}

.textarea {
    width: 600px;
}
.demo-tabs {
    width: 100%;
}
.demo-tabs>.el-tabs__content {
    padding: 20px;
    color: #6b778c;
    font-size: 20px;
    font-weight: 600;
}

.top2-1 {
    display: inline-block;
    margin-bottom: 20px;
}
</style>
      