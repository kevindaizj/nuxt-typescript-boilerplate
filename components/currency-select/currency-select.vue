<template>
    <div class="currency-select-container">
        <div class="cs-content" @click="open()">
            <img :src="selectedCurrency.icon" />
            <span>{{selectedCurrency.currency}}</span>
            <span class="down">
                <fa :icon="['fas', 'chevron-down']" />
            </span>
        </div>

        <transition name="slide">
            <div class="cs-dropdown" v-show="show">
                <div class="cs-ls">
                    <div class="cs-item" v-for="(item, index) in currencies" :key="index" @click="select(item)"
                    :class="{'selected': item.currency === selectedCurrency.currency}">
                        <img :src="item.icon" />
                        <span class="txt">{{item.currency}}</span>
                    </div>
                </div>
            </div>
        </transition>
        
        
        
    </div>
</template>

<script lang="ts" src="./currency-select.ts"></script>
<style lang="less" scoped>
    @import './currency-select.less';
</style>