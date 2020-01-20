<template>
	<div>
		<div class="custom-pagination-container">
			<div class="custom-pagination-panel">
                <div class="empty-block" v-if="displayPageItems && !displayPageItems.length">{{$t('noDatas')}}</div>
				<div v-show="displayPageItems && displayPageItems.length" class="page-ul" :style="{'text-align': align}">
                    
                    <nuxt-link class="page-item" :to="linkGen(currentPage - 1)" v-if="currentPage - 1 >= 1">
                        <fa icon="angle-left"/>
                    </nuxt-link>
                    <div v-else class="page-item disabled">
                        <fa icon="angle-left"/>
                    </div>

                    <nuxt-link :to="linkGen(item.num)" class="page-item" :class="{'current': item.current }" 
                        v-for="(item, index) in displayPageItems" :key="index">
                        {{item.num}}
                    </nuxt-link>

                    <nuxt-link :to="linkGen(currentPage + 1)" class="page-item" v-if="currentPage + 1 <= numberOfPages">
                        <fa icon="angle-right"/>
                    </nuxt-link>
                    <div v-else class="page-item disabled" >
                        <fa icon="angle-right"/>
                    </div>

				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		currentPage: {
            required: true,
            type: Number,
        },
		totalItem: {
            required: true,
            type: Number,
        },
		itemPerPage: {
			type: Number,
			default: 5
		},
		align: {
            type: String,
            default: 'center',
            validator: function (value) {
                return ['left', 'center', 'right'].indexOf(value) !== -1
            }
        },
		linkGen: {
            type: Function,
            default: function(pageNum) {
                return '/' + pageNum;
            }
        }
	}, 
	data() {
        return {
            numberOfPages: 0,
            displayPageItems: null
		}
    },
    created() {
        this.calculateNumberOfPages();
        this.getPageItems();
    },
    methods: {
        calculateNumberOfPages() {
            this.numberOfPages = Math.floor(this.totalItem / this.itemPerPage) + ( (this.totalItem % this.itemPerPage) > 0 ? 1 : 0);
        },
        getPageItems() {
            const count = Math.min(this.numberOfPages, this.itemPerPage);
            const start = this.numberOfPages - this.currentPage >= count ? this.currentPage : (this.numberOfPages - count + 1);
            
            let pageItems = [];
            for(let i = 0; i < count; i++) {
                const num =  start + i;
                const current = this.currentPage == num;
                
                pageItems.push({
                    num: num,
                    current: current
                });
            }

            this.displayPageItems = pageItems;
        }
    }
};
</script>

<style lang="less" scoped>
@import "./pagination.less";
</style>



