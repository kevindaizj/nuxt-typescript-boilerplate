<template>
    <div class="custom-back-to-top" v-if="enabled" :class="{'cbtt-visible': visible}" @click="onClick()">
         <fa icon="chevron-up"/>
    </div>
</template>


<script lang="ts" src="./back-to-top.ts"></script>
<style lang="less" scoped>
    @import './back-to-top.less';
</style>