import { NuxtConfigurationRouter } from '@nuxt/types/config/router'

const routing: NuxtConfigurationRouter = {

    extendRoutes(routes, resolve) {
        routes.push({
            name: 'finTech',
            path: '/fintech',
            component: 'pages/fin-tech/fin-tech.vue'
        });

        routes.push({
            name: 'compliance',
            path: '/compliance',
            component: 'pages/compliance/compliance.vue'
        });
        
    }
}


export default routing