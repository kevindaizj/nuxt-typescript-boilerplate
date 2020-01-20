<template>
    <div class="header">
        <div class="header-wrap">  
            <div class="menu-toggle-btn" :class="{'open': openMobileMenus }" @click="showMobileMenu()" >
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div class="lang-panel" @click="toggleLangPanel()" @mouseover="toggleLangPanel(true)" @mouseout="toggleLangPanel(false)">
                <span>
                    <fa class="lg-icon" :icon="['fas', 'globe']" /> 
                    {{currentLangName}} 
                    <fa :icon="['fas', 'chevron-down']" />
                </span>
                <transition name="fade">
                    <div class="lang-dropdown" v-show="showLangDropdown">
                        <div class="triangle"></div>
                        <template v-for="(localeItem, localeIdx) in $i18n.locales">
                            <nuxt-link :to="switchLocalePath(localeItem.code)" :key="localeIdx" class="lang-item">
                                {{localeItem.name}}
                            </nuxt-link>
                        </template>
                    </div>
                </transition>
            </div>

            <div class="header-logo">
                <nuxt-link to='/'>
                    <!-- <img src="@/assets/images/logo-default.png"> -->
                </nuxt-link>
            </div>

            <div class="header-menu-container">
 
                <div class="menu-panel">
                    <div class="menu-item" v-for="(item, index) in menus" :key="index"
                        @mouseover="menuHover(item)"
                        @mouseout="menuLeave(item)"
                        :class="{selected: isMenuSelected(item) }">

                        <nuxt-link v-if="!item.children || !item.children.length" class="menu-link" :to="item.path">
                            {{item.title}}
                        </nuxt-link>
                        <a v-if="item.children && item.children.length" class="menu-link" href="javascript:void(0);">
                            {{item.title}}
                            <span v-if="item.children" class="collapse-i">
                                <fa :icon="['fas', 'chevron-down']" />
                            </span>
                        </a>

                        <template v-if="item.children && item.children.length">
                            <transition name="fade">
                                <div class="sub-menu-panel" v-show="item.isHover">
                                    <div class="sub-menu-item" v-for="(sub, subIdx) in item.children" :key="subIdx"
                                    :class="{selected: isMenuSelected(sub) }">
                                        <nuxt-link class="sub-menu-link"  :to="sub.path">
                                            {{sub.title}}
                                        </nuxt-link>
                                    </div>
                                </div>
                            </transition>
                        </template>

                    </div>
                </div>
                <div class="operation-panel">
                    <a @click.prevent="openDownloadModal()" class="link-btn">
                       <fa :icon="['fas', 'mobile-alt']" /> 
                       <span>{{$t('header.Download')}}</span>
                    </a>
                </div>
            </div>

        </div>

        
        <transition name="slide" >
            <div class="mobile-menu-container" v-show="openMobileMenus">
                <div class="mobile-menu-wrapper">
                    <div class="mobile-menu-panel">
                        <div v-for="(item, index) in menus" :key="index">
                            <nuxt-link v-if="!item.children || !item.children.length" class="mobile-menu-item" :to="item.path"
                            :class="{selected: isMenuSelected(item) }">
                                {{item.title}}
                            </nuxt-link>
                            <a v-if="item.children && item.children.length" class="mobile-menu-item" href="javascript:void(0);"
                                @click="menuTouch(index)"
                                :class="{ selected: isMenuSelected(item), touched: item.isMobileSelected }">
                                {{item.title}}
                                <div v-if="item.children" class="collapse-i">
                                    <fa :icon="['fas', 'chevron-down']" />
                                </div>
                            </a>

                            
                            <template v-if="item.children && item.children.length">
                                <transition name="fade">
                                    <div class="mobile-sub-menu-panel" v-show="item.isMobileSelected">
                                        <nuxt-link class="mobile-sub-menu-link" :to="sub.path" v-for="(sub, subIdx) in item.children" :key="subIdx"
                                        :class="{selected: isMenuSelected(sub) }">
                                            {{sub.title}}
                                        </nuxt-link>
                                    </div>
                                </transition>
                            </template>

                        </div>
                        
                    </div>
                    <div class="mobile-operation-panel">
                        <a @click.prevent="openDownloadModal()" class="link-btn">
                            <fa :icon="['fas', 'mobile-alt']" /> 
                            <span>{{$t('header.Download')}}</span>
                        </a>
                    </div>
                </div>
            </div>
        </transition>
        
    </div>
</template>

<script lang="ts" src="./header.ts"></script>
<style lang="less" scoped>
    @import './header.less';
</style>