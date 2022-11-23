<template>
    <div class="headerspan">
        <span>商品设置</span>
    </div>
    <div class="form">
        <el-form :model="addForm" :rules="addForm" ref="addFormRef">
            <el-form-item label="默认币种：" prop="payment" :label-width="formLabelWidth">
                <el-select placeholder="=请选择="></el-select>
                <div class="tip">默认币种</div>
            </el-form-item>
            <el-form-item label="价格保留小数长度：" prop="payment" :label-width="formLabelWidth">
                <el-input v-model="addForm.payment" placeholder="请输入保留小数长度" />
                <div class="tip">价格保留小数长度</div>
            </el-form-item>
            <el-form-item label="商品类别层级：" prop="payment" :label-width="formLabelWidth">
                <el-select placeholder="=请选择="></el-select>
                <div class="tip">商品类别层级</div>
            </el-form-item>
            <el-form-item label="商品属性层级：" prop="payment" :label-width="formLabelWidth">
                <el-select placeholder="=请选择="></el-select>
                <div class="tip">商品属性层级</div>
            </el-form-item>
            <el-form-item label="商品规格层级：" prop="payment" :label-width="formLabelWidth">
                <el-select placeholder="=请选择="></el-select>
                <div class="tip">商品规格层级</div>
            </el-form-item>
            <el-form-item label="商品显示方式：" prop="payment" :label-width="formLabelWidth">
                <el-radio-group v-model="radio1" class="ml-4">
                    <el-radio label="1" size="large">表格列表</el-radio>
                    <el-radio label="2" size="large">图表列表</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="商品模块：" prop="payment" :label-width="formLabelWidth">
                <el-checkbox v-model="checked1" label="商品类别" size="large" />
                <el-checkbox v-model="checked1" label="商品基础设置" size="large" />
                <el-checkbox v-model="checked1" label="价格与库存" size="large" />
                <el-checkbox v-model="checked1" label="属性与规格" size="large" />
                <el-checkbox v-model="checked1" label="购买设置" size="large" />
                <el-checkbox v-model="checked1" label="服务与承诺" size="large" />
                <el-checkbox v-model="checked1" label="营销设置" size="large" />
                <el-checkbox v-model="checked1" label="分享设置" size="large" />
                <el-checkbox v-model="checked1" label="商品详情" size="large" />  
            </el-form-item>
        </el-form>
        <el-button type="primary" class="confirm">确认保存</el-button>
        <el-button>返回</el-button>

    </div>
</template>

<script >

export default {
    data() {
        return {
            formLabelWidth: '140px',
            addForm: {},

            tableData: [
                {
                    id: '1',
                    date: '2016-05-03',
                },
            ],
            payment: [{
                value: '',
                label: '现金'
            }],
        }
    },

}

</script>

<style scoped>
.el-form{
    margin-top: 30px;
}
.el-input{
    width: 900px;
}
.el-select{
    width: 900px;
}
.confirm{
    margin-left: 130px;
}

.el-checkbox{
    margin-right: 20px;
}

</style>


