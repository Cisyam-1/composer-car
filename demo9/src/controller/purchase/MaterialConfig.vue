<template>
    <div class="config">
        <span>物料设置</span>
    </div>
    <el-form :model="addForm" :rules="addForm" ref="addFormRef">
            <el-form-item label="物料类别设置：" prop="payment" :label-width="formLabelWidth">
                <el-select v-model="value" class="m-2" placeholder="=请选择=">
                    <el-option v-for="item in Materiallevel" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
                <div class="tip">物料类别层级</div>
            </el-form-item>
    </el-form>
    <el-button class="save">确认保存</el-button>
    <el-button clas="back">返回</el-button>
</template>

<script>
export default{
    data(){
        return {
            formLabelWidth:'150px'

        }
    }
}


</script>

<style scoped>
.config{
    margin-bottom: 30px;
}
.save{
    margin-left: 150px;
}
.el-select{
    width: 800px;
}

</style>