<template>
  <div class="footer">
      <div class="main-section">
         <div class="main-wrapper">
             <div class="left">
                 <div class="logo-box">
                     <!-- <img src="@/assets/images/logo-default.png" /> -->
                 </div>
                 <div class="txt">
                    {{$t('company.intro')}}
                 </div>
             </div>
             <div class="right">
                 <div class="link-item">
                     <div class="f-title">{{$t('boilerplate.Cap')}}</div>
                     <ul>
                         <li><nuxt-link :to="localePath('remittance')">{{$t('GlobalRemittance')}}</nuxt-link></li>
                         <li><nuxt-link :to="localePath('rate')">{{$t('RatesAndServices')}}</nuxt-link></li>
                         <li><nuxt-link :to="localePath('aboutUs')">{{$t('AboutUs')}}</nuxt-link></li>
                         <li><nuxt-link :to="localePath('finTech')">{{$t('FinTech')}}</nuxt-link></li>
                         <li><nuxt-link :to="localePath('contactUs')">{{$t('contactUs')}}</nuxt-link></li>
                     </ul>
                 </div>
                 <div class="link-item">
                     <div class="f-title">{{$t('learnMore.Cap')}}</div>
                     <ul>
                         <li><nuxt-link :to="localePath('helpCenter')">{{$t('HelpCenter')}}</nuxt-link></li>
                         <li><nuxt-link :to="localePath('blog')">{{$t('Blog')}}</nuxt-link></li>
                         <li><nuxt-link :to="localePath('fee')">{{$t('Fee')}}</nuxt-link></li>
                         <li><nuxt-link :to="localePath('invite')">{{$t('Invitefriends')}}</nuxt-link></li>
                     </ul>
                 </div>
                 <div class="link-item">
                     <div class="f-title">{{$t('terms.Cap')}}</div>
                     <ul>
                         <li><nuxt-link :to="localePath('privacy')">{{$t('PrivacyPolicy')}}</nuxt-link></li>
                         <li><nuxt-link :to="localePath('terms')">{{$t('TermsAndConditions')}}</nuxt-link></li>
                         <li><nuxt-link :to="localePath('disclaimer')">{{$t('Disclaimer')}}</nuxt-link></li>
                     </ul>
                 </div>
                 <div class="link-item">
                     <div class="f-title">{{$t('followus.Cap')}}</div>
                     <div class="socials">
                         <div class="social-btn fb">
                             <fa :icon="['fab', 'facebook-f']" />
                         </div>
                         <div class="social-btn tw">
                             <fa :icon="['fab', 'twitter']" />
                         </div>
                         <div class="social-btn ig">
                             <fa :icon="['fab', 'instagram']" />
                         </div>
                     </div>
                 </div>
             </div>
         </div>
      </div>

      <div class="bottom-section">
         <div class="bottom-wrapper">
             <p>{{$t('licence.intro')}}</p>
             <p>© {{year}} {{$t('copyright.desc')}}</p>
         </div>
      </div>
  </div>
</template>

<script lang="ts" src="./footer.ts"></script>

<style lang="less" scoped>
    @import './footer.less';
</style>


