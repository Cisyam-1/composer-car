<template>
   <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                :current-page="queryInfo.pagenum" :page-sizes="[1, 2, 5, 10]" :page-size="queryInfo.pagesize"
                layout="total, sizes, prev, pager, next, jumper" :total="total">
            </el-pagination>
</template>

<script>
export default{
  data(){
    return{
      queryInfo: {
                query: "",
                pagenum: 1, 
                pagesize: 2, 
            },
            userList: [],
            total: 0

    }
  },
  methods:{
    handleSizeChange(newSize) {
            console.log(newSize);
            this.queryInfo.pagesize = newSize;//重新指定每页数据量
            this.getUsersList();//带着新的分页请求获取数据
        },
        //监听 页码值 改变的事件
        handleCurrentChange(newPage) {
            console.log(newPage);
            this.queryInfo.pagenum = newPage;//重新指定当前页
            this.getUsersList();//带着新的分页请求获取数据
        }
  }
}
</script>

<style>
.el-pagination{
    float:right;
    /* margin-top: 10px; */
}
</style>

