<template>
  <div class="top">
    <div class="top1">
      <span>日志管理</span>
    </div>
    <div class="top2">
      <el-input placeholder="关键词"></el-input>
      <el-button class="search">查询</el-button>
      <el-button class="add">新增</el-button>
    </div>
  </div>
  <div class="table">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column type="selection" width="100" />    
      <el-table-column prop="date" label="ID" width="180" />
      <el-table-column prop="name" label="用户" width="180" />
      <el-table-column prop="address" label="类型" />
      <el-table-column prop="name" label="标题" width="180" />
      <el-table-column prop="name" label="时间" width="180" />
      <el-table-column prop="name" label="IP" width="180" />
      <el-table-column prop="name" label="IP地址" width="180" />
      <el-table-column prop="name" label="操作人" width="180" />
      <el-table-column label="修改">
        <el-icon>
          <EditPen />
        </el-icon>
      </el-table-column>
      <el-table-column label="删除">
        <el-icon>
          <Delete />
        </el-icon>
      </el-table-column>
    </el-table>
    <FunctionKey />
  </div>
</template>
  
<script>
import FunctionKey from '../../components/page/FunctionKey.vue'
export default {
  data() {
    return {
      checked1: false,
      tableData: [
        {
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
      ]
    }
  },
  components: {
    FunctionKey,
  },

}

</script>

<style >
.top {
  width: calc(100% - 200px);
  height: 100px;
  padding: 0;
  margin: 0;
}

.top1 {
  margin-bottom: 20px;
}

.top2 {
  display: inline-flex;
}

.search {
  margin-left: 20px;
}
</style>
  