<template>
  <span calss="config">设置</span>
    <div calss="box">
    <el-form :label-position="labelPosition" label-width="140px" :model="form" style="max-width: 600px, color=#FFF">
        <el-form-item label="网站标题：" class="lable">
            <el-input v-model="form.title" placeholder="请输入网站标题"></el-input>
            <div class="tip">网站标题</div>
        </el-form-item>
        <el-form-item label="英文标题：">
            <el-input v-model="form.englishtitle" placeholder="请输入英文标题"></el-input>
            <div class="tip">英文标题</div>
        </el-form-item>
        <el-form-item label="Logo：">
            <el-upload v-model:file-list="fileList" class="upload-demo"
                action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15" :on-change="handleChange">
                <el-button type="primary">Click to upload</el-button>
                <template #tip>
                    <div class="el-upload__tip">
                        jpg/png files with a size less than 500kb
                    </div>
                </template>
            </el-upload>
        </el-form-item>
        <el-form-item label="域名：">
            <el-input v-model="form.domain" placeholder="请输入公司域名"></el-input>
            <div class="tip">域名</div>
        </el-form-item>
        <el-form-item label="公司全称：">
            <el-input v-model="form.fullname" placeholder="请输入公司全称"></el-input>
            <div class="tip">公司全称</div>
        </el-form-item>
        <el-form-item label="公司英文名称：">
            <el-input v-model="form.englishname" placeholder="请输入公司英文名称"></el-input>
            <div class="tip">公司英文标题</div>
        </el-form-item>
        <el-form-item label="联系人：">
            <el-input v-model="form.contact" placeholder="请输入联系人"></el-input>
            <div class="tip">联系人</div>
        </el-form-item>
        <el-form-item label="公司座机：">
            <el-input v-model="form.tel" placeholder="请输入公司座机"></el-input>
            <div class="tip">公司座机</div>
        </el-form-item>
        <el-form-item label="传真：">
            <el-input v-model="form.fax" placeholder="请输入传真"></el-input>
            <div class="tip">传真</div>
        </el-form-item>
        <el-form-item label="手机号码：">
            <el-input v-model="form.phonenumber" placeholder="请输入公司手机号码"></el-input>
            <div class="tip">手机号码</div>
        </el-form-item>
        <el-form-item label="热线电话：">
            <el-input v-model="form.hotline" placeholder="请输入公司热线电话"></el-input>
            <div class="tip">热线电话</div>
        </el-form-item>
        <el-form-item label="邮箱地址：">
            <el-input v-model="form.email" placeholder="请输入邮箱地址"></el-input>
            <div class="tip">邮箱地址</div>
        </el-form-item>
        <el-form-item label="公司地址：">
            <el-input v-model="form.address" placeholder="请输入公司地址"></el-input>
            <div class="tip">公司地址</div>
        </el-form-item>
        <el-form-item label="销售订单权限控制：">
            <el-radio-group v-model="form.sale">
                <el-radio label="启用" />
                <el-radio label="关闭" />
            </el-radio-group>
        </el-form-item>
        <el-form-item label="采购订单权限控制：">
            <el-radio-group v-model="form.purchase">
                <el-radio label="启用" />
                <el-radio label="关闭" />
            </el-radio-group>
        </el-form-item>
        <el-form-item label="ICP备案号：">
            <el-input v-model="form.icp" placeholder="请输入公司备案号"/>
            <div class="tip">ICP备案号</div>
        </el-form-item>
        <el-form-item label="PSR公安备案号：">
            <el-input v-model="form.psr" placeholder="请输入公司备案号"></el-input>
            <div class="tip">PSR公安备案号</div>
        </el-form-item>
        <el-form-item label="PSR公安备案链接：">
            <el-input v-model="form.psrlink" placeholder="请输入公安备案链接"></el-input>
            <div class="tip">PSR公安备案链接</div>
        </el-form-item>
        <el-form-item label="版权所有：">
            <el-input v-model="form.copyright" placeholder="请输入版权所有"></el-input>
            <div class="tip">版权所有</div>
        </el-form-item>
        <el-form-item label="技术支持：">
            <el-input v-model="form.technology" placeholder="请输入技术支持"></el-input>
            <div class="tip">技术支持</div>
        </el-form-item>
        <el-form-item label="工信部备案网：">
            <el-input v-model="form.website" placeholder="请输入工信部备案网"></el-input>
            <div class="tip">工信部备案网</div>
        </el-form-item>
        <el-form-item label="首页标题：">
            <el-input v-model="form.indextitle" placeholder="请输入首页标题"></el-input>
            <div class="tip">首页标题</div>
        </el-form-item>
        <el-form-item label="内页标题：">
            <el-radio-group v-model="form.insidetitle">
                <el-radio label="启用" />
                <el-radio label="关闭" />
                <el-radio label="关闭" />
                <el-radio label="关闭" />
            </el-radio-group>
        </el-form-item>
        <el-form-item label="SEO关键词：">
            <el-input v-model="textarea" :rows="2" type="textarea" placeholder="请输入SEO关键词" class="textarea"></el-input>
            <div class="tip">SEO关键词</div>
        </el-form-item>
        <el-form-item label="SEO描述：">
            <el-input v-model="textarea" :rows="2" type="textarea" placeholder="请输入SEO描述" class="textarea"></el-input>
            <div class="tip">SEO描述</div>
        </el-form-item>
        <el-form-item label="统计代码：">
            <el-input v-model="textarea" :rows="2" type="textarea" placeholder="请输入统计代码" class="textarea"></el-input>
            <div class="tip">统计代码</div>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">确认保存</el-button>
            <el-button>取消</el-button>
        </el-form-item>
    </el-form>
</div>
</template>
  
<script lang="ts" setup>

import type { UploadProps, UploadUserFile } from 'element-plus'

import { reactive, ref } from 'vue'
const labelPosition = ref('right')
const textarea = ref('')

// do not use same name with ref
const form = reactive({
    title: '',
    englishtitle: '',
    domain: '',
    fullname: '',
    englishname: '',
    contact: '',
    tel: '',
    fax: '',
    phonenumber: '',
    hotline: '',
    email: '',
    address: '',
    sale: '',
    purchase: '',
    icp: '',
    psr: '',
    psrlink: '',
    copyright: '',
    technology: '',
    website: '',
    indextitle: '',
    insidetitle: '',
    keyword: '',
    description: '',
    code: '',
})

const onSubmit = () => {
    console.log('submit!')
}


const fileList = ref<UploadUserFile[]>([
    {
        name: 'food.jpeg',
        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
    },
])

const handleChange: UploadProps['onChange'] = (_uploadFile, _uploadFiles) => {
    fileList.value = fileList.value.slice(-3)
}
</script>


<style scoped>

.el-form{
    margin-top: 20px;
    margin-left: 50px;
    
}
.el-input{
    width: 1000px;
}
.textarea{
    width: 1000px;
}
</style>

  