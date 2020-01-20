import { Plugin } from '@nuxt/types';
import { NuxtVueI18n } from 'nuxt-i18n';
import { detectBrowserLanguageOption as  detectBrowserLanguage} from '~/i18n/detect-option';

const convert: (isoCode: string) => string = (isoCode: string) => {
  if (isoCode.indexOf('en') === 0)
      return 'en';
  const codes = isoCode.split('-');
  if (codes.length === 2)
      return codes[0] + '-' + codes[1].toUpperCase();
  return isoCode;
}

/**
 * 当前版本的nuxt-i18n检测浏览器语言时，只判断语言代码（不检测地区），因此不能区分简体和繁体
 * 此插件是对源码的修改
 */
const i18nFixedPlugin: Plugin = ({app, req}) => {

    (app.i18n as any).__detectBrowserLanguage = async () => {

        const localeCodes = app.i18n.locales.map((o: NuxtVueI18n.Options.LocaleObject) => o.code);
        const getLocaleCookie = app.i18n.getLocaleCookie;

        /**
         * 以下代码来自：https://github.com/nuxt-community/nuxt-i18n/blob/fb6a6f98ce16c153c3ab22eaae12d05e77ffda94/src/plugins/main.js#L226
         * 只把获取语言code改为获取语言iso-code
         */
        if (detectBrowserLanguage) {
            const { useCookie, alwaysRedirect, fallbackLocale } = detectBrowserLanguage
      
            let browserLocale
      
            if (useCookie && (browserLocale = getLocaleCookie()) && browserLocale !== 1 && browserLocale !== '1') {
              // Get preferred language from cookie if present and enabled
              // Exclude 1 for backwards compatibility and fallback when fallbackLocale is empty
            } else if (process.client && typeof navigator !== 'undefined' && navigator.language) {
              // Get browser language either from navigator if running on client side, or from the headers
              browserLocale = navigator.language; //.toLocaleLowerCase().substring(0, 2)
            } else if (req && typeof req.headers['accept-language'] !== 'undefined') {
              browserLocale = req.headers['accept-language'].split(',')[0]; //.toLocaleLowerCase().substring(0, 2)
            }

            // ios上的req.headers['accept-language']为小写：zh-cn。此处统一修正格式
            browserLocale = convert(browserLocale);
      
            if (browserLocale) {
              // Handle cookie option to prevent multiple redirections
              if (!useCookie || alwaysRedirect || !getLocaleCookie()) {
                let redirectToLocale = fallbackLocale
                // Use browserLocale if we support it, otherwise use fallbackLocale
                if (localeCodes.includes(browserLocale)) {
                  redirectToLocale = browserLocale
                }
      
                if (redirectToLocale && localeCodes.includes(redirectToLocale)) {
                  if (redirectToLocale !== app.i18n.locale) {
                    // We switch the locale before redirect to prevent loops
                    await app.i18n.setLocale(redirectToLocale)
                  } else if (useCookie && !getLocaleCookie()) {
                    app.i18n.setLocaleCookie(redirectToLocale)
                  }
                }
      
                return true
              }
            }
          }
      
          return false
        
    };


}

export default i18nFixedPlugin