import { Vue, Component, Watch } from 'vue-property-decorator';
import { Menu } from '~/models/menu/menu';

@Component
export default class HeaderComponent extends Vue {
  
    openMobileMenus = false;
    menus = this.generateMenus();
    showLangDropdown = false;

    get currentRoute(): string {
        return this.$route.fullPath;
    }

    get currentLangName() {
        const locale: any = this.find(this.$i18n.locales, (i: any) => i.code === this.$i18n.locale);
        return locale.name;
    }

    private find<T>(arr: T[], predicateFunc: (item: T) => boolean): T {
        for(const item of arr) {
            if(predicateFunc(item)) 
                return item;
        }
        return null;
    }

    private generateMenus(): Menu[] {
        const menus: Menu[] = [
            { title: this.$t('homePage'), path: this.localePath('index') },
            { 
                title: this.$t('About'),
                children: [
                    { title: this.$t('FinTech'), path: this.localePath('finTech') },
                    { title: this.$t('Compliance'), path: this.localePath('compliance') }
                ]
            }
        ];
        return menus;
    }

    menuHover(menu: Menu) {
        if (!menu || !menu.children || !menu.children.length) return;
        this.$set(menu, "isHover", true);
    }

    menuLeave(menu: Menu) {
        if (!menu || !menu.children || !menu.children.length) return;
        this.$set(menu, "isHover", false);
    }

    menuTouch(index: any) {
        if (index <= 0 || index >= this.menus.length) return;

        for (let i = 0; i < this.menus.length; i++) {
            const item:any = this.menus[i];
            if (index == i) {
                if (item.isMobileSelected) 
                    this.$set(item, "isMobileSelected", false);
                else 
                    this.$set(item, "isMobileSelected", true);
            } else {
                this.$set(item, "isMobileSelected", false);
            }
        }
    }


    isMenuSelected(menu: Menu): boolean {
        if (this.currentRoute === menu.path || this.currentRoute.indexOf(menu.basePath) === 0) 
            return true;
            
        if (!menu.children || !menu.children.length)
            return false;
        for (const item of menu.children) {
            if (this.currentRoute === item.path || this.currentRoute.indexOf(item.basePath) === 0)
                return true; 
        }
        return false;
    }

    toggleLangPanel(display?: boolean) {
        if (display !== null && display !== undefined) {
            this.showLangDropdown = display;
            return;
        }
        this.showLangDropdown = !this.showLangDropdown;
    }

    showMobileMenu() {
        this.openMobileMenus = !this.openMobileMenus;
        if (!this.openMobileMenus) {
            for (let i = 0; i < this.menus.length; i++) {
                this.$set(this.menus[i], "isMobileSelected", false);
            }
        }
    }

    openDownloadModal() {
        this.$store.commit('TOGGLE_DOWNLOAD_MODAL', true);
        this.openMobileMenus = false;
    }

    @Watch('$route')
    onRouteChange() {
        this.menus = this.generateMenus();
        this.openMobileMenus = false;
        for (let i = 0; i < this.menus.length; i++) {
            this.$set(this.menus[i], "isMobileSelected", false);
        }
    }
  
}