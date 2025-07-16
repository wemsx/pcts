<script setup lang="ts">
import PctsArea from './components/PctsArea.vue'

import { pctsStore } from "@/stores/pctsStore";
const store = pctsStore();
</script>

<template>

    <div id="desc" class="app_arch">
        <h2 class="title"> Project Pcts </h2>
    </div>

    <PctsArea :items="store.pcts" />
</template>

<style scoped>
#desc {
    position: relative;
    height: 100vh;
}

#desc h2 {
    position: absolute;
    top: 50%;
    /* 定位到父容器50%位置 */
    left: 50%;
    transform: translate(-50%, -50%);
    /* 反向偏移自身宽高的50% */
    margin: 0;
}

.title {
    text-align: left;
    color: var(--text-color);
}
</style>
<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body,
html {
    height: 100%;
    width: 100%;
}

#app {
    height: 100vh;
    width: 100%;
}

@media (min-width: 1024px) {
    #app {
        display: flex;
    }
}

.app_arch {
    width: 50vw;
    align-items: center;
    /* 垂直居中 */
    justify-content: center;
    /* 水平居中 */
    border: 1px solid #ccc;
    /* 添加边框便于查看 */
}

@media (max-width: 1024px) {
    .app_arch {
        width: 100vw;
    }

    .title {
        text-align: center;
    }
}
</style>