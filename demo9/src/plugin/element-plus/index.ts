import { App}  from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/es/components/message/style/css'
import '../../assets/css/global.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

function autoElementplusIcon(app:App){
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
    } 
}

export function setupElementplus(app:App){
    app.use(ElementPlus)
    autoElementplusIcon(app)
}