<!-- <template>
  <el-container>
      <el-aside>
        laksdfl
      </el-aside>
      <el-container>
          <el-header>alsdfa</el-header>
          <el-main>
            <router-view />
          </el-main>
      </el-container>
  </el-container>
</template> -->

<script >
import Menu from '../api/Menu'
export default {
  data() {
    return {
      activeIndex: 1,
      menuData: [],
      isCollapse: false,
      headerlistData: [
        { id: 1, title: '个人中心' },
        { id: 2, title: '修改密码' },
        // { id: 3, title: '退出登录' }
      ],
    }
  },
  created() {
    this.getMenuData();
    console.log(this.menuData)
  },
  methods: {
    logout() {
      window.sessionStorage.clear();
      this.$router.push('/login');
    },
    getMenuData() {
      Menu.tree().then((res) => {
        console.log(res.data.data)
        this.menuData = res.data.data
      })
      // this.menuData = Menu.get()
    },

    toggleCollapse() {
      this.isCollapse = !this.isCollapse;
    },
    handleSelect(e) { this.activeIndex = e }
  }
}
</script>
<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <div calss="header-left">
          <span>MILI</span>
        </div>
        <div class="header-center">
          <el-icon id="fold" :size="20" v-if="isCollapse">
            <Fold />
          </el-icon>
          <el-icon id="fold" :size="20" v-else>
            <Expand />
          </el-icon>
          <element-menu :pid="0" :data="menuData" mode="horizontal" @select="handleSelect" class="headermenu" />
        </div>
        <div class="header-right">
          <el-dropdown>
            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item v-for="item in headerlistData">{{ item.title }}</el-dropdown-item>
                <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </el-header>
      <!-- 侧边框 -->
      <el-container>
        <el-aside :width="isCollapse ? '64px' : '200px'">
            <element-menu :pid="activeIndex" v-for="item in menuData" class="asidemenu" :unique-opened="true"
            :collapse="isCollapse" :collapse-transition="false">
              <template>
                <i class="el-icon-menu"></i>
                <span>{{ item.title }}</span>
              </template>
            </element-menu>
        </el-aside>
        <!-- 主框架 -->
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>



