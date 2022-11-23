<template>
    <div style="width:37%">
        <div>
            <div class="img"><img src="../../assets/logo.png" alt=""></div>
            <div align="center">
                <h2 class="title">云南米粒天然香料有限公司</h2>
                <span class="titletip">  Guangzhou  Milion  Bio-Technology  Co.,Ltd	</span>
                <h1 class="q-1">产品采购合同</h1>
            </div>
        </div>
        <div>
            <div class="left">
                <span>委托方：云南米利天然香料有限公司</span>
                <span>供货方：</span>
                <span>一、产品名称、规格、材料、数量、金额</span>
            </div>
            <div class="right">
                <span>合同编号：</span>
                <span>签订地点：云南</span>
                <span>签订时间：</span>
            </div>
        </div>
        <div>
            <el-table style="width: 100%" border>
                <el-table-column type="index" label="序号" width="60"></el-table-column>
                <el-table-column v-for="(item, index) in headArr" :key="index" :prop="item.prop" :label="item.label" width="60px"/>
            </el-table>
        </div>
        <div>
            <p>二、价格类别：
                <el-checkbox label="含税" size="large" />
                <el-checkbox label="含运" />
            </p>
            <p>三、结算方式：
                <el-checkbox label="现结" size="large" />
                <el-checkbox label="月结" />
            </p>
            <p>四、收货人/联系方式：王海涛 19116253347 </p>
            <p>五、收货地址：云南省昆明市官渡区大板桥街道秧旺街道306号中关村电子村（昆明）科技产业园3东1单元302房</p>
            <span>六、验收要求：</span>
            <p>6.1、所供货品外包装须有标识，外表清洁无脏污、无破损；</p>
            <p>6.2、订单中的货品若有质量问题，供货方无条件进行退换货（运费由供货方承担）；</p>
            <p>6.3、请务必将相应批次的产品质检报告、送货单随货到我司；</p>
            <p>6.4、产品保质期18个月或以上，可使用日期不低于保质期的2/3；<br /> 产品保质期18个月以下的，可使用日期不低于保质期的1/2；</p>
            <p>其他约定事项：</p>
        </div>
        <div>
            <el-table style="width: 100%" :table="tableData" border>
                <el-table-column v-for="(item, index) in headArr2" :key="index" :prop="item.prop" :label="item.label" />
            </el-table>
        </div>
        <span>注:本合同一式二份,委托方、承印方分执各一份；传真、扫描同等效力。</span>
    </div>
</template>
<script>
export default {
    data() {
        return {
            headArr: [
                { prop: "name", label: "产品编码" },
                { prop: "discription", label: "产品名称" },
                { prop: "unit", label: "规格型号" },
                { prop: "quantity", label: "单位" },
                { prop: "unitPrice", label: "数量" },
                { prop: "unitPrice", label: "单位（元）" },
                { prop: "amount", label: "金额（元）" },
                { prop: "amount", label: "备注" },
            ],
            headArr2: [
                { prop: "client", label: "委托方" },
                { prop: "supplier", label: "供货方" },
            ],
            tableData: [
                // { client: '名称：(盖章)云南米利天然香料有限公司', supplier: '名称：' },
                // { client: '地址：云南省昆明市官渡区大板桥街道秧旺街道306号中关村电子村（昆明）科技产业园3栋1单元302', supplier: '地址：' },
                // { client: '法定代表人：刘波', supplier: '法定代表人：' },
                // { client: '纳税人登记号：91530100MA6PMM5102', supplier: '纳税人登记号：' },
                // { client: '开户行：中国建设银行股份有限公司昆明虹桥支行', supplier: '开户行' },
                // { client: '账号：5305 0161 5354 0000 0151', supplier: '账号' },
                // { client: '委托代理人： 杨晓菊', supplier: '委托代理人：' },
                // { client: '联系电话：13926288360', supplier: '联系电话：' }
            ],
        }
    }
}
</script>

<style scoped>
.img{
    width: 80px;
    height:80px;
    float: left;
}
img{
    width: 100%;
}
div>.el-table{
    margin-top: 5px;
}
.title{
    margin-bottom: 0;
    letter-spacing: 8px;
}
.titletip{
    color: #C0C0C0;
    margin-top: 0;
    margin-bottom: 0;   
}
.q-1{
    margin-top: 20px;
}

.left{
    float:left
}
.left>span{
    display: block;
}
.right{
    float: right;
}
.right>span{
  display: block;  
}
div>p{
    margin-top: 0;
    margin-bottom: 0;
}

</style>