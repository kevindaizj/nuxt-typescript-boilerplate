import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class BackToTopComponent extends Vue {

    /**
     * 滚动到此高度则出现
     */
    @Prop({ type: Number, required: false, default: 1000})
    boundary: number;

    /**
     * 媒体查询，小于此尺寸不显示。（IE9及以下不支持）
     */
    @Prop({ type: Number, required: false, default: 767})
    maxWidth: number;
    
    visible = false;
    enabled = true;

    onClick() {
        this.scrollToDocTop();
    }

    private onDocResize() {
        // IE9及以下不支持
        if (!window.matchMedia)
            return;
        if (this.maxWidth > 0) {
          this.enabled = !window.matchMedia(`(max-width: ${this.maxWidth}px)`).matches;
        } else {
          this.enabled = true;
        }
    }
    
    private onDocScroll() {
        const scrollTop = window.pageYOffset;
        if (scrollTop >= this.boundary) {
            this.visible = true;
        } else {
            this.visible = false;
        }
    }

    /**
     * https://stackoverflow.com/questions/21474678/scrolltop-animation-without-jquery
     * @param duration milliseconds
     */
    private scrollToDocTop(duration: number = 1000) {
        const scrollHeight = window.pageYOffset;
        const scrollStep = Math.PI / ( duration / 15 );
        const cosParameter = scrollHeight / 2;

        let scrollCount = 0;
        let scrollMargin = 0;
        const scrollInterval = setInterval( function() {
            if ( window.pageYOffset != 0 ) {
                scrollCount = scrollCount + 1;  
                scrollMargin = cosParameter - cosParameter * Math.cos( scrollCount * scrollStep );
                window.scrollTo( 0, ( scrollHeight - scrollMargin ) );
            } 
            else clearInterval(scrollInterval); 
        }, 15);
    }

    
    mounted() {
        this.onDocResize();
        window.addEventListener('scroll', this.onDocScroll);
        window.addEventListener('resize', this.onDocResize);
    }

    destroyed () {
        window.removeEventListener('scroll', this.onDocScroll);
        window.addEventListener('resize', this.onDocResize);
    }


}