export interface CurrencyInfo {
    currency: string;
    icon: string;
}

export const ALL_CURRENCIES: CurrencyInfo[] = [
    { currency: 'HKD', icon: require('@/assets/images/flag-round/hk.svg') },
    { currency: 'USD', icon: require('@/assets/images/flag-round/us.svg') },
    { currency: 'CNY', icon: require('@/assets/images/flag-round/cn.svg') },
    { currency: 'JPY', icon: require('@/assets/images/flag-round/jp.svg') },
    { currency: 'GBP', icon: require('@/assets/images/flag-round/gb.svg') },
    { currency: 'EUR', icon: require('@/assets/images/flag-round/eu.svg') },
    { currency: 'AUD', icon: require('@/assets/images/flag-round/au.svg') },
    { currency: 'NZD', icon: require('@/assets/images/flag-round/nz.svg') },
    { currency: 'CAD', icon: require('@/assets/images/flag-round/ca.svg') },
    { currency: 'TWD', icon: require('@/assets/images/flag-round/tw.svg') },
    { currency: 'SGD', icon: require('@/assets/images/flag-round/sg.svg') },
    { currency: 'PHP', icon: require('@/assets/images/flag-round/ph.svg') },
    { currency: 'IDR', icon: require('@/assets/images/flag-round/id.svg') },
    { currency: 'MYR', icon: require('@/assets/images/flag-round/my.svg') },
    { currency: 'THB', icon: require('@/assets/images/flag-round/th.svg') }
];