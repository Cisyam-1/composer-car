import { App } from 'vue'
import { setupElementplus } from './element-plus'

import ElementMenu from '../components/ElementMenu.vue'

function autoComponent(app:App){
    const components = import.meta.glob('../components/**/*.vue')
    console.log(components)
    app.component('ElementMenu',ElementMenu)
}

export function setupPlugin(app:App){
    autoComponent(app)
    setupElementplus(app)
}