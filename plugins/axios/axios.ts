import { Plugin } from '@nuxt/types'

const axiosInterceptor: Plugin = ({ $axios, redirect }) => {

     $axios.onRequest(config => {

     });

     $axios.onError(error => {
        const status = error.response.status;
        if(process.server) {
            if (status.toString().startsWith('4')) {
                redirect('/400')
            }
            if (status === 500) {
                redirect('/sorry')
            }
        }
     });
}

export default axiosInterceptor;

