<template>
    <div class="publicbutton">
        <el-button @click="IsRefresh">刷新</el-button>
        <el-button @click="IsAdd">新增</el-button>
        <el-button @click="IsModify">删除</el-button>
        <el-button @click="IsAssigin">分配业务员</el-button>
        <el-button @click="IsImport">导入</el-button>
        <el-button @click="IsExport">导出</el-button>
        <el-button @click="IsReject">驳回</el-button>
        <el-button @click="IsRevocation">撤回</el-button>
        <el-button @click="IsChecked">审核</el-button>
        <el-button @click="IsApproved">核准</el-button>
        <el-button @click="IsPrint">打印</el-button>
        <el-button @click="IsTruncate">清空表</el-button>
        <el-button @click="IsBack">返回</el-button>
    </div>
</template>

<script setup lang="ts">
function IsAdd() {

}
function IsModify() {

}
function IsAssigin(){

}

function IsImport() {

}
function IsExport() {

}
function IsReject() {

}
function IsRevocation() {

}
function IsChecked() {

}
function IsPrint() {

}
function IsApproved() {

}
function IsBack(){

}
function IsTruncate(){

}
function IsRefresh(){

}
</script>

<style>
.publicbutton{
  margin-top: 15px;
}
.publicbutton .el-button{
  margin-left: 0;
}
</style>


