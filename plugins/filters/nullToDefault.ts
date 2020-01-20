import Vue from 'vue';

Vue.filter('nullToDefault', (input: any, defaultValue?: any) => {
    defaultValue = defaultValue || '--';
    if (input === null || input === undefined)
        return defaultValue;
        
    if (typeof input === 'string' && input == '')
        return defaultValue;
    return input;
})