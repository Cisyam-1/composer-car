<template>
    <div style="width: 37%" >
        <div class="header">
            <div class="img"><img src="../../assets/logo.png" alt="" ></div>
            <div class="l-2">
                <p align="center"  class="title">广州米利生物科技有限公司</p>
                <p class="titletip" align="center">  Guangzhou  Milion  Bio-Technology  Co.,Ltd	</p>
            </div>
        </div>
        <el-divider />
        <el-divider />
        <div class="l-1">
            <span>ADD:广州市花都区迎宾大道136号勤天安合商务大厦B座815室</span>
            <span style="display:block">TEL:020-36838876</span>
            <h2 align="center">订货单</h2>
        </div>
        <div class="customerinfo">
            <h1>客户信息/Customer info</h1>
            <div style="float:left">
            <p>采购方：&nbsp;&nbsp;</p>      
            <p>联系人：&nbsp;&nbsp;</p>     
            <p>电话：&nbsp;&nbsp;</p>     
            <p>税号：&nbsp;&nbsp;</p>        
            <p>账号：&nbsp;&nbsp;</p>  
            <p>开户行：&nbsp;&nbsp;</p>
        </div>
        <div style="float:right">
            <p >供应方：广州米利生物科技有限公司</p>
            <p >联系人：</p>
            <p >电话：</p>
            <p >税号：91440101MA59QHM536</p>   
            <p >账号：3888 0188 0000 65230</p>
            <p >开户行：中国光大银行股份有限公司广州琶洲支行</p>
        </div>    
            <div class="quotation">
                <h1>订购目录/Quotation</h1>
                <el-table  style="width: 100%" border>
                    <el-table-column type="index" label="序号" width="60"></el-table-column>
                    <el-table-column prop="name" label="产品名称" width="80"></el-table-column>
                    <el-table-column prop="discription" label="型号" width="60"></el-table-column>
                    <el-table-column prop="unit" label="数量(kg)" width="70"></el-table-column>
                    <el-table-column prop="quantity" label="价格（元/公斤）" width="100"></el-table-column>
                    <el-table-column prop="unitPrice" label="金额" width="70"></el-table-column>
                    <el-table-column prop="amount" label="备注" ></el-table-column>
                </el-table>
                <p>合计金额：元整（元）</p>
            </div>
        </div>
        <div class="remarks">
            <h1>备注信息/Remarks</h1>
            <p>一、价格类别： <el-checkbox label="含税" size="large" /><el-checkbox label="含运"/></p>
            <p>二、产品质量标准符合国家标准；</p>
            <p>三、交货时间及地点：按订单双方确认的时间与交货地点：</p>
            <p>四、付款方式：预付全款；</p>
            <p>五、由不可抗力或国家政策变动等特殊情况造成的违约行为双方协商解决，协商不成<br/>
    			提交所在地人民法院裁决，所发生的一切费用由违约方承担。</p>
            <p>六、本合同供需双方签定之日起生效，本订单传真件或邮件扫描件同具法律效力。</p>
        </div>
        <p>顺颂商祺！</p> 
    </div>
</template>
<style scoped>
.header{
    width: 100%;
    height: 110px;
   
}
.quotation{
    margin-top: 270px;
}
.title{
    padding-bottom: 0;
    margin-bottom: 0;
    font-size: 29px;
    letter-spacing: 10px;
   
}
.titletip{
    color: #C0C0C0;
    margin-top: 0;
    margin-bottom: 0;
    
}
.img{
    width: 100px;
    height: 100px;
    position:relative;
    float: left;
}
img{
    width: 100%;
    height: 100%;
}
.l-2{
    float: right;
   
}
.el-divider{
    margin-top: 0;
    margin-bottom: 0;
    color: black;
}
.l-1{
    margin-top: 0;
}
</style>