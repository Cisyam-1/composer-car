import { createRouter, createWebHashHistory, Router, RouteRecordRaw } from "vue-router";
import Index from '../view/Index.vue'
import Login from '../view/Login.vue'
import Test from '../view/controller/test/Index.vue'
import User from '../view/controller/user/Index.vue'

function getChildrenRouter(){
    const controllers = import.meta.glob('../controller/**/*.vue')

    const routes = [{path:'/main',name:'main',component:User}] as RouteRecordRaw[]

    Object.keys(controllers).forEach((key)=>{
        // console.log(key)
        const name = key.split('controller/').pop()?.split('.').shift()?.toLocaleLowerCase().replace('/index','') as string
        // console.log('name:'+name)
        const route = {
            path: `/${name}`,
            name: name.replace('/','_'),
            component: controllers[key]
        } as RouteRecordRaw

        routes.push(route)
    })
    console.log(routes)
    return routes



}

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'index',
//             meta: {auth: false},
            component: Index,
            children: getChildrenRouter()
            // children: [
            //     {
            //         path:'/test',
            //         name:'test',
            //         component: Test
            //     },
            //     {
            //         path:'/user',
            //         name:'user',
            //         component: User
            //     }
            // ]
        },
        {
            path: '/',
            name: 'login',
            component: Login
        }
    ]
})

//当router加载之前
router.beforeEach((to,_from,next)=>{
    if(to.meta.auth){
        const uid = localStorage.getItem('uid')
        if(!uid){
            User.get(uid).then((res: { code: number; })=>{
                if(res.code === 0){
                    next()
                }else{
                    localStorage.clear()
                    next('/login')  // 调回到登录页面
                }
            })
        }else{
            next()
        }
    }
    next()
})

export default router
