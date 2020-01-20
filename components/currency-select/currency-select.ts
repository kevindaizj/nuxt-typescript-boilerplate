import { Vue, Component, Prop, Model, Watch } from 'vue-property-decorator';
import { CurrencyInfo, ALL_CURRENCIES } from './currency-data';
import { find } from '~/utils/array-helper'

@Component
export default class CurrencySelect extends Vue {


    @Prop({ type: Array, required: true, default: () => []})
    datas: string[];


    @Prop({ type: String, required: true})
    @Model('change')
    currency: string;

    @Watch('currency')
    onCurrencyChange(newVal, oldVal) {
        if (newVal && newVal !== oldVal) {
            this.selectedCurrency = this.initSelectedCurrency();
        }
    }

    currencies: CurrencyInfo[];
    selectedCurrency: any;
    show = false;

    
    created() {
        this.currencies = ALL_CURRENCIES.filter(o => this.datas.some(d => d === o.currency));
        this.selectedCurrency = this.initSelectedCurrency();
    }
    
    private initSelectedCurrency() {
        if (this.currency) {
            return find(this.currencies, o => o.currency === this.currency);
        } else {
            return this.currencies[0];
        }
    }

    mounted() {
        document.addEventListener('click', this.onDocClicked);
    }

    destroyed () {
        document.removeEventListener('click', this.onDocClicked)
    }

    
    private onDocClicked(e) {
        if (!this.$el.contains(e.target))
            this.show = false;
    }
  
    
    open() {
        this.show = true;
    }

    select(item: any) {
        this.selectedCurrency = item;
        this.show = false;
        if (this.currency !== item.currency)
            this.$emit('change', item.currency);
    }


}