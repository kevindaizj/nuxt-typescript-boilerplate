import { TranslateResult } from "vue-i18n";

export interface Menu {
    title: TranslateResult;
    path?: string;
    basePath?: string;
    children?: Menu[];
}