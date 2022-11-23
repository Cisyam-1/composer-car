import { http } from '../plugin/axios'
import qs from 'qs'

class Menu{
    get(id = 0){
        return http.request({url:'menu/'+id})

        // const arr = [
        //     {id:1,title:'title1',level:1,pid:0,pic:'',router:'',number:3,sort:1},
        //     {id:2,title:'title2',level:1,pid:0,pic:'',router:'',number:3,sort:1},
        //     {id:3,title:'title3',level:1,pid:0,pic:'',router:'',number:3,sort:1},
        //     {id:4,title:'title4',level:1,pid:0,pic:'',router:'',number:3,sort:1},
        //     {id:5,title:'title5',level:1,pid:0,pic:'',router:'',number:3,sort:1},
        //     {id:6,title:'title6',level:1,pid:0,pic:'',router:'',number:3,sort:1},

        //     {id:7,title:'title1_1',level:2,pid:1,pic:'',router:'',number:3,sort:1},
        //     {id:8,title:'title1_2',level:2,pid:1,pic:'',router:'',number:3,sort:1},
        //     {id:9,title:'title1_3',level:2,pid:1,pic:'',router:'',number:3,sort:1},
        //     {id:10,title:'title1_4',level:2,pid:1,pic:'',router:'',number:3,sort:1},

        //     {id:11,title:'title1_1_1',level:3,pid:7,pic:'',router:'crm_order',number:0,sort:1},
        //     {id:12,title:'title1_1_2',level:3,pid:7,pic:'',router:'crm_order',number:0,sort:1},
        //     {id:13,title:'title1_1_3',level:3,pid:7,pic:'',router:'crm_order',number:0,sort:1},
        //     {id:14,title:'title1_1_4',level:3,pid:7,pic:'',router:'crm_order',number:0,sort:1},

        //     {id:15,title:'title2_1',level:2,pid:2,pic:'',router:'',number:3,sort:1},
        //     {id:16,title:'title2_2',level:2,pid:2,pic:'',router:'',number:3,sort:1},
        //     {id:17,title:'title2_3',level:2,pid:2,pic:'',router:'',number:3,sort:1},
        //     {id:18,title:'title2_4',level:2,pid:2,pic:'',router:'',number:3,sort:1},

        //     {id:19,title:'title2_1_1',level:3,pid:15,pic:'',router:'user',number:0,sort:1},
        //     {id:20,title:'title2_1_2',level:3,pid:15,pic:'',router:'user',number:0,sort:1},
        //     {id:21,title:'title2_1_3',level:3,pid:15,pic:'',router:'user',number:0,sort:1},
        //     {id:22,title:'title2_1_4',level:3,pid:15,pic:'',router:'user',number:0,sort:1},
        // ]

        // if(id){
        //     return arr[id]
        // }else{
        //     return arr
        // }

        // return request({url:'menu'})
    }

    show(data:Object){
        return http.request({method:'post',url:'menu/show',data:data})
    }

    list(){
        return http.request({url:'menu/list'})
    }

    tree(){
        return http.request({url:'menu/tree'})
    }

    grant(){
        return http.request({url:'menu/grant'})
    }

    role(){
        return http.request({url:'menu/role'})
    }

    child(){
        return http.request({url:'menu/child'})
    }
    // 获取菜单接口
    all(){
        return http.request({url:'menu'})
    }

    // 获取最大排序值
    sort(pid:number){
        return http.request({
            method:'post',
            url: 'menu/sort',
            data: qs.stringify({pid:pid})
        })
    }
    add(data:object){
        return http.request({
            method:'post',
            url: 'menu/add',
            data: qs.stringify(data)
        })
    }
    save(data:object){
        return http.request({
            method:'post',
            url: 'menu/save',
            data: qs.stringify(data)
        })
    }
    del(id:number|string){
        return http.request({
            method:'post',
            url: 'menu/del',
            data: qs.stringify({id:id})
        })
    }
}

export default new Menu()