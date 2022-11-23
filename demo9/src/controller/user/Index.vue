<template>
    <div class="top">
        <div class="top1">
            <span>用户管理</span>
        </div>
        <div class="top2">
            <el-input placeholder="关键词"></el-input>
            <el-select v-model="value" class="m-4" placeholder="=省份=" >
                <el-option v-for="item in province" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
            <el-select v-model="value" class="m-4" placeholder="=角色=">
                <el-option v-for="item in character" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
            <span>注册从：</span>
            <el-date-picker v-model="value1" type="daterange" range-separator="—" start-placeholder="开始时间"
                end-placeholder="结束时间" :size="size" />
            <el-button class="search" @click="search">查询</el-button>
            <el-button class="add" @click="dialogFormVisible = true">新增</el-button>
        </div>
    </div>
    <div class="table">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column type="selection" width="100" />    
            <el-table-column prop="index" label="账户ID" width="120" />
            <el-table-column prop="username" label="用户名" width="120" />
            <el-table-column prop="address" label="昵称" />
            <el-table-column prop="username" label="头像" width="120" />
            <el-table-column prop="username" label="真实姓名" width="120" />
            <el-table-column prop="username" label="性别" width="120" />
            <el-table-column prop="username" label="手机号码" width="120" />
            <el-table-column prop="username" label="籍贯" width="120" />
            <el-table-column prop="username" label="角色" width="120" />
            <el-table-column prop="username" label="注册时间" width="120" />
            <el-table-column prop="username" label="注册地" width="120" />
            <el-table-column prop="username" label="重置密码" width="120" />
            <el-table-column label="修改">
                <el-icon  @click="dialogFormVisible = true"><EditPen /></el-icon>
            </el-table-column>
            <el-table-column label="删除">
                <el-icon>
                    <Delete />
                </el-icon>
            </el-table-column>
        </el-table>
        <Pagination/>
        <FunctionKey/>
       
    </div>
    <el-dialog v-model="dialogFormVisible" title="新增/修改用户" @close="addDialogClosed" 
    :close-on-click-modal='false' draggable  class="user_dialog">
    <!-- <el-divider /> -->
    <el-form :model="addForm" :rules="addForm" ref="addFormRef">
      <el-form-item label="用户名：" prop="username" :label-width="formLabelWidth">
        <el-input v-model="addForm.username" placeholder="请输入用户名" style="width: 600px;"/>
        <div class="tip">用户名</div>
      </el-form-item>
      <el-form-item label="所属分部：" prop="department" :label-width="formLabelWidth">
        <el-select v-model="value" placeholder="=请选择=" size="20px" style="width: 600px;">
          <el-option v-for="item in department" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
        <div class="tip">所属分部</div>
      </el-form-item>
      <el-form-item label="头像：" prop="payment" :label-width="formLabelWidth">
        
        <div class="tip">头像</div>
      </el-form-item>
      <el-form-item label="真实姓名：" prop="name" :label-width="formLabelWidth">
        <el-input v-model="addForm.name" placeholder="请输入姓名" style="width: 600px;"/>
        <div class="tip">真实姓名</div>
      </el-form-item>
      <el-form-item label="性别：" prop="sex" :label-width="formLabelWidth">
        <el-radio-group v-model="addForm.sex" class="ml-4">
      <el-radio label="女" size="large">女</el-radio>
      <el-radio label="男" size="large">男</el-radio>
    </el-radio-group>
      </el-form-item>
      <el-form-item label="手机号码：" prop="phonenumber" :label-width="formLabelWidth">
        <el-input v-model="addForm.phonenumber" placeholder="请输入手机号码" style="width: 600px;"/>
        <div class="tip">手机号码</div>
      </el-form-item>
      <el-form-item label="邮箱地址：" prop="email" :label-width="formLabelWidth">
        <el-input v-model="addForm.email" placeholder="请输入邮箱地址" style="width: 600px;"/>
        <div class="tip">邮箱地址</div>
      </el-form-item>
      <el-form-item label="身份证号：" prop="id" :label-width="formLabelWidth">
        <el-input v-model="addForm.id" placeholder="请输入身份证号" style="width: 600px;"/>
        <div class="tip">身份证号</div>
      </el-form-item>
      <el-form-item label="出生日期：" prop="payment" :label-width="formLabelWidth">
        <el-select v-model="addForm.province" placeholder="公年" size="8px" style="width:100px"></el-select>
       <el-select v-model="addForm.city" placeholder="年" size="8px" style="width:100px"></el-select>
       <el-select v-model="addForm.town" placeholder="月" size="8px" style="width:100px"></el-select>
       <el-select v-model="addForm.town" placeholder="日" size="8px" style="width:100px"></el-select>
      <!-- <div class="tip">出生日期</div> -->
      </el-form-item>
      <el-form-item label="身高：" prop="payment" :label-width="formLabelWidth">
        <el-input v-model="addForm.height" placeholder="请输入姓名" style="width: 600px;"/>
        <div class="tip">身高</div>
      </el-form-item>
      <el-form-item label="体重：" prop="payment" :label-width="formLabelWidth">
        <el-input v-model="addForm.weight" placeholder="请输入体重" style="width: 600px;"/>
        <div class="tip">体重</div>
      </el-form-item>
      <el-form-item label="血型：" prop="payment" :label-width="formLabelWidth">
        <el-select v-model="value"  placeholder="=请选择=" size="20px"  style="width: 600px;">
          <el-option v-for="item in bloodtypes" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
        <div class="tip">血型</div>
      </el-form-item>
      <el-form-item label="籍贯：" prop="payment" :label-width="formLabelWidth">
       <el-select v-model="addForm.province" placeholder="省份" size="8px" style="width:100px"></el-select>
       <el-select v-model="addForm.city" placeholder="城市" size="8px" style="width:100px"></el-select>
       <el-select v-model="addForm.town" placeholder="区县" size="8px" style="width:100px"></el-select>
      </el-form-item>
      <el-form-item label="详细地址：" prop="payment" :label-width="formLabelWidth" class="address">
        <el-input v-model="addForm.address" placeholder="请输入详细地址" style="width: 600px;"/>
        <div class="tip">详细地址</div>
      </el-form-item>
      <el-form-item label="角色：" prop="payment" :label-width="formLabelWidth">
        <el-select v-model="value" placeholder="=请选择=" size="20px" style="width: 600px;">
          <el-option v-for="item in role" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
        <div class="tip">角色</div>
      </el-form-item>   
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>
  
<script >
import Pagination from '../../components/page/Pagination .vue';
import FunctionKey from '../../components/page/FunctionKey.vue'
export default {
    data() {
        return {
            dialogFormVisible: false,
            formLabelWidth: "140px",
            addForm: {},
            tableData: [
                {
                    id: "1",
                    date: "2016-05-03",
                    update: "Tom",
                    delete: "<el-icon @click=\"delete()\"><Delete /></el-icon>"
                },
            ],
            formLabelWidth: "140px",
            level: [{
                    value: "1",
                    label: "一级"
                }, { value: "2", label: "二级" }, { value: "3", label: "三级" }
            ],
            department: [{}],
            bloodtypes: [{}],
            province: [{}],
            city: [{}],
            town: [{}],
            role: [[]]
        };
    },
    components: { Pagination ,FunctionKey }
}

</script>

<style >
 .user_dialog{
  width: 50% !important;
  max-height: 600px;
  display:block;
  overflow-y:auto;
}
.top2>span{
  margin-top: 5px;
  margin-left: 5px;
}
.m-4{
  width: 100px;
}

</style>
  