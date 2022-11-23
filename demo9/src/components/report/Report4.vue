<template>
    <div style="width: 37%">
        <div class="header" align="center">
            <div class="img">
                <img src="../../assets/logo.png" alt="">
            </div>
            <span class="title">云南米利天然香料有限公司</span><br/>
            <span class="titletip">Yunnan Million Natural Flavor Co. , Ltd</span> 
            <h2>成品完工入库单打印</h2> 
        </div>
        <div calss="body">
            <div >
                <span>制表日期：</span>
                <span class="p-1">部门：</span>
                <span class="p-1">制表者：</span>
            </div>
            <el-divider class="p-3"/>
            <div>
                <span>入库单号：</span>
                <span class="p-2">入库日期：</span>
            </div>
            <el-divider class="p-4"/>
            <div>
                <el-table  style="width: 100%" >
                    <el-table-column type="index" label="项次" width="60"></el-table-column>
                    <el-table-column v-for="(item, index) in headArr" :key="index" :prop="item.prop" :label="item.label" />
                </el-table>
            </div>
            <div class="p-5">
                <span>采购：</span>
                <span>品管：</span>
                <span>经办：</span>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            headArr:[
                { prop:"name", label:"仓库发料单号"},
                {prop:"discription", label:"产品编码"},
                {prop:"unit", label:"产品名称"},
                {prop:"quantity", label:"产品型号"},
                {prop:"unitPrice", label:"入库量"},
                {prop:"unitPrice", label:"单位"},
                {prop:"amount", label:"批号" }
            ]
        }
    }
}

</script>
<style scoped>
.title{
    font-size: 29px;
}
.titletip{
    color:#C0C0C0;
}
.p-1{
    margin-left: 25%;
}
.p-2{
    display: block;
    margin-top: 12px;
}
.p-3{
    margin-bottom: 5px;
    margin-top: 10px;
}
.p-4{
    margin-top: 8px;
    margin-bottom: 10px;
}
.p-5{
    margin-top: 20px;
}
.p-5>span{
    margin-right: 25%;
}
.img{
    width: 80px;
    height: 80px;
    float: right;
}
img{
    width: 100%;
}
</style>