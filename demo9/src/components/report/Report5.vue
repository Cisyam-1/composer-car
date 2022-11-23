<template>
    <div style="width: 37%">
    <div class="header">
        <span>云南米利天然香料有限公司</span>
        <span style="display:block">Yunnan Milion Natural Flavors Co., Ltd</span>
        <h2 align="center">发货单</h2>
    </div>
    <div style="float:left">
        <p>送货日期：</p>     
        <p>客户名称：</p>    
        <p>送货地址：</p>
    </div>
    <div style="float:right" class="y-1">
        <p>送货单号：</p>
        <p>运送方式:</p>
        <p>业务员：</p>
    </div>
    <div>
        <el-table style="width: 100%">
            <el-table-column type="index" label="序号" width="60"></el-table-column>
            <el-table-column v-for="(item, index) in headArr" :key="index" :prop="item.prop" :label="item.label" />
        </el-table>
    </div>
    <div>
        <span>收货单位及经手人（盖章）</span>
        <span class="y-2">送货单位及经手人（盖章）</span>
    </div>
    <div class="y-3">
        <p>公司电话：0871-63520885</p>
        <p>地址：云南省昆明市官渡区中关村电子城产业园区3栋1单元3楼</p>
    </div>
</div>
</template>

<script>
export default{
    data(){
        return{
            headArr:[
                { prop:"name", label:"产品编码"},
                {prop:"discription", label:"产品名称"},
                {prop:"unit", label:"型号"},
                {prop:"quantity", label:"规格"},
                {prop:"unitPrice", label:"批次"},
                {prop:"unitPrice", label:"单位"},
                {prop:"amount", label:"数量" },
                {prop:"amount",label:"备注"}
            ]
        }
    }
}
</script>

<style scoped>
.y-1{
margin-left: 60%;
}
.y-2{
    margin-left: 30%;
    
}
.y-3{
    float: right;
    font-size: small;
}
h2{
    margin-top: 0;
    margin-bottom: 0;
    font-size: 30px;
    letter-spacing: 10px;
    font-family:SimSun;
    font-weight: 900;
}
.header{
    font-weight: 700;
}

</style>