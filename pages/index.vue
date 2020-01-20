<template>
    <div>
        <div class="banner-section" :style="{ 'background-image': 'url(' + bannerImage + ')'}">
            <div class="banner-container">
                <div class="left">
                    <div class="main-txt">{{$t('main.slogan')}}</div>
                    <div class="detail">
                        <div class="banner-btn">
                            <nuxt-link to="/">
                                <img src="@/assets/images/download_apple.png">
                                <span>{{$t('iosDownload')}}</span>
                            </nuxt-link>
                            <nuxt-link to="/" class="last">
                                <img src="@/assets/images/download_google.png">
                                <span>{{$t('androidDownload')}}</span>
                            </nuxt-link>
                        </div>
                        <div class="ba-desc">
                            <img class="ba-icon" src="@/assets/images/lock_1.png">
                            <span>{{$t('LicensedDesc')}}</span>
                        </div>
                    </div>
                </div>
                <div class="right">
               
                </div>
                <div class="detail lg-hidden">
                    <div class="banner-btn">
                        <nuxt-link to="/">
                            <img src="@/assets/images/download_apple.png">
                            <span>{{$t('iosDownload')}}</span>
                        </nuxt-link>
                        <nuxt-link to="/" class="last">
                            <img src="@/assets/images/download_google.png">
                            <span>{{$t('androidDownload')}}</span>
                        </nuxt-link>
                    </div>
                    <div class="ba-desc">
                        <img class="ba-icon" src="@/assets/images/lock_1.png">
                        <span>{{$t('LicensedDesc')}}</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="common-section" :style="{ 'background-image': 'url(' + bannerImage3 + ')'}">
            <div class="txt-img-container">
                <div class="txt-wrapper wow fadeInUp">
                    <div class="title">{{$t('GlobalRemittance')}}</div>
                    <div class="desc">{{$t('GlobalRemittance.section.sub')}}</div>
                    <div class="l-btn-box">
                        <nuxt-link :to="localePath('remittance')" class="link-btn">{{$t('learnMore')}}</nuxt-link>
                    </div>
                </div>
                <div class="img-wrapper wow fadeInUp" data-wow-delay=".5s">
                    <div class="img-box">
                        <img src="@/assets/images/img_1.png">
                    </div>
                </div>
            </div>
        </div>
        <div class="common-section">
            <div class="txt-img-container right-txt-img-container">
                <div class="txt-wrapper wow fadeInUp">
                    <div class="title">{{$t('FinTech')}}</div>
                    <div class="desc">{{$t('FinTech.section.sub')}}</div>
                    <div class="l-btn-box">
                        <nuxt-link :to="localePath('finTech')" class="link-btn">{{$t('learnMore')}}</nuxt-link>
                    </div>
                </div>
                <div class="img-wrapper wow fadeInUp"  data-wow-delay=".5s">
                    <div class="img-box">
                        <img src="@/assets/images/img_5.png">
                    </div>
                </div>
            </div>
        </div>
        <div class="common-section">
            <div class="txt-img-container">
                <div class="txt-wrapper wow fadeInUp" data-wow-delay=".5s">
                    <div class="title">{{$t('Invitefriends')}}</div>
                    <div class="desc">{{$t('Invitefriends.section.sub')}}</div>
                    <div class="l-btn-box">
                        <nuxt-link :to="localePath('invite')" class="link-btn">{{$t('learnMore')}}</nuxt-link>
                    </div>
                </div>
                <div class="img-wrapper wow fadeInUp" data-wow-delay="1s">
                    <div class="img-box">
                        <img src="@/assets/images/img_3.png">
                    </div>
                </div>
            </div>
        </div>
        
        <div class="common-section">
            <div class="comment-wrapper">
                <div class="section-title">{{$t('CustomerReviews')}}</div>
                <div class="comment-carousel">
                    <client-only placeholder="Loading...">
                        <carousel
                            :autoplay="true"
                            :dots="false"
                            :loop="true"
                            :center="true"
                            :nav="false"
                            :margin="0"
                            :responsive="{ 0:{ items:1}, 600:{items:2}, 1125: { items: 3 } }"
                        >
                            <div
                                class="comment-item"
                                v-for="(item, index) in remarkItems"
                                :key="index"
                            >
                                <div class="avatar">
                                    <img :src="item.avatar">
                                </div>
                                <div class="rating">
                                    <fa
                                        :icon="['fas', 'star']"
                                        v-for="(rateItem, rateIdx) in [1,1,1,1,1]"
                                        :key="rateIdx"
                                    />
                                </div>
                                <div class="comment" :title="item.remark">{{item.remark}}</div>
                                <div class="name">{{item.name}}</div>
                            </div>
                        </carousel>
                    </client-only>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script lang="ts" src="./index.ts"></script>
<style lang="less" scoped>
@import "./index.less";
</style>
