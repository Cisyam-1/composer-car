<template>
    <div style="width:37%">
        <div align="center">
            <div class="img"><img src="../../assets/logo.png" alt=""></div>
            <span>云南米利天然香料有限公司</span>
            <span style="display:block">生产制造命令单</span>
        </div>
        <div class="t-5">
            <span>制表日期：</span>
            <span style="display:inline-flex" id="t-6">制表者：</span>
        </div>
        <el-divider />
        <div class="t-2">
            <span>发料单号：</span>
            <span>发料类型：</span>
        </div>
        <div class="t-3">
            <span>录入日期：</span>
            <span>扣账日期：</span>
        </div>
        <el-divider />
        <div class="t-1">
            <span>产品名称</span>
            <span>产品类型</span>
            <span>生产数量（kg）</span>
            <span>已发套数</span>
            <span>完工套数</span>
            <span>本单发料（kg）</span>
        </div>
        <el-divider />
        <el-table style="width: 100%" >
            <el-table-column type="index" label="项次" ></el-table-column>
            <el-table-column v-for="(item, index) in headArr" :key="index" :prop="item.prop" :label="item.label" />
        </el-table>
        <div class="footer">
            <span>制表：</span>
            <span>技术：</span>
            <span>仓管:</span>
            <span>领料：</span>
        </div>
    </div>

</template>

<script>
export default{
    data(){
        return{
            headArr:[
                {prop:'',label:'项次'},
                {prop:'',label:'原料编码'},
                {prop:'',label:'原料型号'},
                {prop:'',label:'发料量'},
                {prop:'',label:'单位'},
                {prop:'',label:'(仓库/储位、批号)'},
                {prop:'',label:'配料规格'},
                {prop:'',label:'每桶配料数'},
            ]
        }
    }
}
</script>

<style scoped>
.el-divider{
    margin-top: 10px;
    margin-bottom: 10px;
}
.footer>span{
    margin-right: 100px;
}
.t-1{
    font-size: small;
}
.t-1>span{
    margin-right: 35px;
}
.img{
    width: 60px;
    height:60px;
    float: right;
}
img{
    width: 100%;
}
.t-2{
    float: left;
   
}
.t-2>span{
    display: block;
}

.t-3{ 
    margin-left: 300px;
}
.t-3>span{
    display: block;
}
#t-6{
margin-left: 300px;
}

</style>

