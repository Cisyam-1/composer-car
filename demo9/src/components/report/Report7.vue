<template>
    <div style="width:37%">
        <div align="center">
            <span>广州米利生物科技有限公司</span>
            <span>Guangzhou Milion Bio-Technology Co.,Ltd</span>
            <h2>待检入库单</h2>
        </div>
        <div>
            <span>到货日期：</span>
            <span>送货单号：</span>
            <span>供应商：</span>
        </div>
        <div>
            <el-table style="width: 100%">
                <el-table-column type="index" label="序号" width="60"></el-table-column>
                <el-table-column v-for="(item, index) in headArr" :key="index" :prop="item.prop" :label="item.label" />
            </el-table>
        </div>
        <div>
            <span>收货单位及经手人（盖章）</span>
            <span>送货单位及经手人（盖章）</span>
        </div>
        <div>
            <span>公司电话：020-36838876</span>
            <span>地址：广州市花都区迎宾大道136号818房</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            headArr: [
                { prop: "name", label: "产品编码" },
                { prop: "discription", label: "名称" },
                { prop: "unit", label: "型号" },
                { prop: "quantity", label: "报检数量" },
                { prop: "unitPrice", label: "实收数量" },
                { prop: "unitPrice", label: "单位" },
                { prop: "amount", label: "批次号" },
                { prop: "amount", label: "保质期" },
                {prop: "amount", label: "检验结果 "},
                {prop: "amount", label: "备注"}
            ]
        }
    }
}
</script>