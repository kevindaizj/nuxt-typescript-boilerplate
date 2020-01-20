import Vue from 'vue'
import numeral from 'numeral'

Vue.filter('formatNumber', function (num, fmt) {
    if (!num)
        return '';
    fmt = fmt || '0,0.[00000000]';
    return numeral(num).format(fmt);
})