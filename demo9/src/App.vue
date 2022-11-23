<!-- <script lang="ts" ></script>
<template>
<div id="app">
    <router-view />
</div> 
</template>

<script>
export default {
  name: 'app'
}
</script> -->


<template>
  <el-config-provider :locale="locale">
    <router-view></router-view>
  </el-config-provider>
</template>

<script>
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'

export default {
  name: 'app',
  components: {
    ElConfigProvider
  },
  setup() {
    return {
      locale: zhCn
    }
  }
}
</script>

 