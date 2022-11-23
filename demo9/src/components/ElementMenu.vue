<script>
    export default{
        name: 'element-menu',
        props:{
            'pid'  : 0,
            'data' : {type: Array}
        },
        data(){
            return{}
        },
        method:{}
    }
</script>

<template>
    <el-menu :default-active="activeIndex" class="el-menu-demo" @select="handleSelect">
        <template v-for="item in data" :key="item.id">
            <template v-if="pid == 0">
                <template v-if="item.pid == pid">
                    <el-menu-item :index="`${item.id}`">{{item.title}}</el-menu-item>
                </template>
            </template>
            <template v-else>
                <template v-if="item.pid == pid">
                    <el-sub-menu :index="`${item.id}`">
                        <template #title>{{item.title}}</template>
                        <template v-for="itm in data" :key="itm.id">
                            <el-menu-item :index="`${itm.id}`" v-if="itm.pid == item.id">
                                <router-link :to="{name:itm.router}"> {{itm.title}} </router-link>
                            </el-menu-item>
                        </template>
                    </el-sub-menu>
                </template>
            </template>
        </template>
    </el-menu>
</template>




