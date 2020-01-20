import Vue from 'vue'
import moment from 'moment'

Vue.filter('formatDate', function (date, fmt) {
    if (!date)
        return '';
    if (fmt == "s")
        return moment(date).utc().format("YYYY-MM-DD");
    else if (fmt == "l")
        return moment(date).utc().format("YYYY-MM-DD HH:mm:ss");
    else if (fmt == "m")
        return moment(date).utc().format("YYYY-MM-DD HH:mm");

    return moment(date).utc().format(fmt);
})