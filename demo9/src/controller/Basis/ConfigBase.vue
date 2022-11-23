<template>
    <div class="config">
        <span>基础设置</span>
    </div>

  <el-form :model="form" label-width="140px">
    <el-form-item label="开启文章类别：">
      <el-radio-group v-model="form.resource">
        <el-radio label="开启" />
        <el-radio label="关闭" />
      </el-radio-group>
    </el-form-item>  
    <el-form-item label="文章类别层次：">
      <el-select v-model="form.region" placeholder="请选择文章类别层次">
        <el-option label="一级" value="shanghai" />
        <el-option label="二级" value="beijing" />
        <el-option label="三级" value="beijing" />
      </el-select>
      <div class="tip">文章类别层次</div>
    </el-form-item>
    <el-form-item label="开启新闻类别：">
      <el-radio-group v-model="form.resource">
        <el-radio label="开启" />
        <el-radio label="关闭" />
      </el-radio-group>
    </el-form-item>  
    <el-form-item label="新闻类别层次：">
      <el-select v-model="form.region" placeholder="请选择新闻类别层次">
        <el-option label="一级" value="shanghai" />
        <el-option label="二级" value="beijing" />
        <el-option label="三级" value="beijing" />
      </el-select>
      <div class="tip">新闻类别层次</div>
    </el-form-item>
    <el-form-item label="开启素材图片类别：">
      <el-radio-group v-model="form.resource">
        <el-radio label="开启" />
        <el-radio label="关闭" />
      </el-radio-group>
    </el-form-item>  
    <el-form-item label="素材图片类别层次：">
      <el-select v-model="form.region" placeholder="请选择素材图片类别层次">
        <el-option label="一级" value="shanghai" />
        <el-option label="二级" value="beijing" />
        <el-option label="三级" value="beijing" />
      </el-select>
      <div class="tip">素材图片类别层次</div>
    </el-form-item>
   
    <el-form-item label="开启素材音频类别：">
      <el-radio-group v-model="form.resource">
        <el-radio label="开启" />
        <el-radio label="关闭" />
      </el-radio-group>
    </el-form-item>  
    <el-form-item label="素材音频类别层次：">
      <el-select v-model="form.region" placeholder="请选择素材音频类别层次">
        <el-option label="一级" value="shanghai" />
        <el-option label="二级" value="beijing" />
        <el-option label="三级" value="beijing" />
      </el-select>
      <div class="tip">素材音频类别层次</div>
    </el-form-item>
   
    <el-form-item label="开启素材视频类别：">
      <el-radio-group v-model="form.resource">
        <el-radio label="开启" />
        <el-radio label="关闭" />
      </el-radio-group>
    </el-form-item>  
    <el-form-item label="素材视频类别层次：">
      <el-select v-model="form.region" placeholder="请选择素材视频类别层次">
        <el-option label="一级" value="shanghai" />
        <el-option label="二级" value="beijing" />
        <el-option label="三级" value="beijing" />
      </el-select>
      <div class="tip">素材视频类别层次</div>
    </el-form-item>
    <el-button type="primary" class="savebutton">确认保存</el-button>
    <el-button>返回</el-button>
   
  </el-form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

// do not use same name with ref
const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

const onSubmit = () => {
  console.log('submit!')
}
</script>

<style scoped>
.el-form{
    margin-top: 20px;
    margin-left: 50px;  
}

.savebutton{
  margin-left: 150px;
}
.el-button{
  margin-top: 20px;
}
</style>

