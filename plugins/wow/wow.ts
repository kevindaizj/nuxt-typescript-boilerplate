import Vue from 'vue'
import * as WOW from '@/node_modules/wow.js/dist/wow.min.js';

declare module 'vue/types/vue' {
    interface Vue {
      $wow: any;
    }
}

Vue.prototype.$wow = WOW;