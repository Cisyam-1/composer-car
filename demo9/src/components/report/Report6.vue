<template>
    <div style="width:37%">
        <div class="img"><img src="../../assets/logo.png" alt=""></div>
        <div align="center" class="header">
            <span class="r-1">云南米利天然香料有限公司</span>
            <span style="display:block">Yunnan Million Natural Flavor Co. , Ltd</span>
            <span>调拨单打印</span>
        </div>
        <div class="r-2">
            <span>调拨日期：</span>
            <span>调拨单号：</span>
        </div>
        <el-divider />
        <div>
            <el-table style="width: 100%">
                <el-table-column type="index" label="序号" width="60"></el-table-column>
                <el-table-column v-for="(item, index) in headArr" :key="index" :prop="item.prop" :label="item.label" />
            </el-table>
        </div>
        <div class="r-2">
            <span>拨出单位：</span>
            <span>拨入单位：</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            headArr: [
                { prop: "name", label: "物料编码" },
                { prop: "discription", label: "物料型号" },
                { prop: "unit", label: "数量" },
                { prop: "quantity", label: "单位" },
                { prop: "unitPrice", label: "拨出单位" },
                { prop: "unitPrice", label: "拨入单位" },
                { prop: "amount", label: "规格" },
                { prop: "amount", label: "备注" }
            ]
        }
    }
}

</script>

<style scoped>
.img{
    width: 80px;
    height:80px;
    float: right;
}
img{
    width: 100%;
}
.header{
    margin-bottom: 20px;
    font-size: large;

}
.el-divider{
    margin-top: 20px;
    margin-bottom: 10px;
}
.r-1{
    font-weight: 700;
    font-size: larger;
}
.r-2>span{
    margin-right: 30%;
}
</style>