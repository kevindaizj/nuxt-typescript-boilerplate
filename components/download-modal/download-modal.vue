<template>
    <div>
        <uiv-modal v-model="$store.state.downloadModalStatus" :title="$t('downloadTheApp')" :append-to-body="true" 
        :backdrop="false" :dismiss-btn="false">
            <div class="d-btn-g">
                <nuxt-link to="/">
                    <img src="@/assets/images/download_apple.png">
                    <span>{{$t('iosDownload')}}</span>
                </nuxt-link>
                <nuxt-link to="/">
                    <img src="@/assets/images/download_google.png">
                    <span>{{$t('androidDownload')}}</span>
                </nuxt-link>           
            </div>
            <div slot="footer">
                <a class="close-btn" @click="close()">{{$t('close')}}</a>
            </div>
        </uiv-modal>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Modal as UivModal } from 'uiv';

@Component({
    components: {
        UivModal
    }
})
export default class DownloadModal extends Vue {
    close() {
        this.$store.commit('TOGGLE_DOWNLOAD_MODAL', false);
    }
}
</script>

<style lang="less" scoped>
    .d-btn-g {
        margin: 20px auto;
        text-align: center;
        a {
            display: block;
            margin-bottom: 14px;
            padding: 12px 18px;
            color: #4c5667;
            font-size: 15px;
            line-height: 25px;
            border: 1px solid #ccc;
            border-radius: 30px;
            background: #fff;
            text-decoration: none;
            cursor: pointer;
            overflow: hidden;
            img {
                margin-top: -4px;
                width: 25px;
                height: 25px;
            }
        }
    }
    .close-btn {
        height: 14px;
        line-height: 14px;
        padding: 6px 18px;
        font-size: 15px;
        font-weight: 600;
        color: #F39800;
        text-decoration: none;
        border: 2px solid #F39800;
        border-radius: 30px;
        cursor: pointer;
    }
    .close-btn:hover {
        color: #fff;
        background: #F39800;
    }
</style>