import { Vue, Component } from 'vue-property-decorator';
import { Context } from '@nuxt/types';
import CurrencySelect from '~/components/currency-select/currency-select.vue';
import { Tooltip as UivTooltip } from 'uiv';

@Component({
  components: {
    CurrencySelect,
    UivTooltip
  }
})
export default class Index extends Vue {

  bannerImage = require("@/assets/images/banner_1.png");
  bannerImage2 = require("@/assets/images/banner_2.png");
  bannerImage3 = require("@/assets/images/banner_3.png");


  get remarkItems() {
      return [
        { avatar: require("@/assets/images/user/default.jpg"), name: 'Carol', remark: this.$t('CustomerReviews1')},
        { avatar: require("@/assets/images/user/default.jpg"), name: 'Andrew Lee', remark: this.$t('CustomerReviews2')},
        { avatar: require("@/assets/images/user/default.jpg"), name: 'Tracy', remark: this.$t('CustomerReviews3')},
        { avatar: require("@/assets/images/user/default.jpg"), name: 'Nathalie', remark: this.$t('CustomerReviews4')},
        { avatar: require("@/assets/images/user/default.jpg"), name: 'Huong', remark: this.$t('CustomerReviews5')}
      ];
  }

  
  async asyncData(context: Context) {
    //  const currenciesReq = context.$axios.$post('/api/public/currencies', { data: {}});
     return {
     }
  }

  start() {
     this.$store.commit('TOGGLE_DOWNLOAD_MODAL', true);
  }

  created() {
  }

  mounted() {
    new this.$wow({ mobile: false }).init();
  }

}