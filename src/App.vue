<script setup lang="ts">
import PctsArea from './components/PctsArea.vue'
import SettingsArea from './components/SettingsArea.vue';
import { pctsStore } from "@/stores/pctsStore";
const pctsStoreRef = pctsStore();
import { settingStore } from "@/stores/settingStore";
const settingStoreRef = settingStore();
</script>

<template>

    <div id="desc" class="app_arch">
        <div class="controling">
            <div class="title"> {{ settingStoreRef.settings.ProjectTitle }} </div>
            <SettingsArea class="settings"></SettingsArea>
        </div>
    </div>

    <PctsArea :items="pctsStoreRef.pcts" />
</template>

<style scoped>
#desc {
    position: relative;
    height: 100vh;
}

.controling {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    /* 关键：改为垂直排列 */
    justify-content: center;
    /* 垂直居中 */
    align-items: center;
    /* 水平居中 */
    gap: 2vh;
    /* 垂直间距 */
}

.title {
    text-align: left;
    font-weight: bold;
    font-size: 4rem;
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
html,
#app {
    height: 100%;
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