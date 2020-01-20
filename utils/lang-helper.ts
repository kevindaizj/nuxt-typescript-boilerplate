/** 前端可识别的语言代码 -> 服务器的语言Key, 如zh-CN -> ZHCN */
export function ISOToServerLang(lang: string): string {
    if (!lang) return lang;
    let serverLang = lang.replace('-', '').toUpperCase();
    if (serverLang.indexOf('EN') === 0)
        serverLang = 'EN'
    return serverLang;
}