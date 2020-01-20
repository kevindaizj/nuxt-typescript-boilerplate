import { NuxtVueI18n } from 'nuxt-i18n';
import { detectBrowserLanguageOption } from './detect-option';

export const i18nConfig: NuxtVueI18n.Options.AllOptionsInterface = {
    strategy: 'prefix_except_default',
    locales: [
        { code: 'en', iso: 'en-US', name: 'English', file: 'en.json' },
        { code: 'zh-HK', iso: 'zh-HK', name: '繁體中文', file: 'zh-HK.json' },
        { code: 'zh-CN', iso: 'zh-CN', name: '简体中文', file: 'zh-CN.json' },
    ],
    defaultLocale: 'en',
    lazy: true,
    detectBrowserLanguage: detectBrowserLanguageOption,
    langDir: 'i18n/locale/',
    parsePages: true,
    vueI18n: {
        fallbackLocale: 'en'
    }
};