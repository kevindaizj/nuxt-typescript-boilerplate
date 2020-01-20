<template>
  <div>
    <header-component/>
    <div class="main-content">
        <nuxt/>
    </div>
    <footer-component/>
    <back-to-top />
    <download-modal/>
  </div>
</template>
<script>
import HeaderComponent from "~/components/common/header/header.vue";
import FooterComponent from "~/components/common/footer/footer.vue";
import BackToTop from "~/components/common/back-to-top/back-to-top.vue";
import DownloadModal from "~/components/download-modal/download-modal.vue";

export default {
  components: {
    HeaderComponent,
    FooterComponent,
    BackToTop,
    DownloadModal
  },
  head() {
    return {
        title: this.$t('browserTab.titleChunk')
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="less">
  @import './default.less';
</style>
