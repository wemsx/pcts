<script setup lang="ts">
import PctsItem from './components/PctsItem.vue'
import { pctsStore } from "@/stores/pctsStore";
const store = pctsStore();
</script>

<template>

    <div id="desc" class="app_arch">
        <h2 class="title"> Project Pcts </h2>
    </div>

    <div id="timeline" class="app_arch">
        <div class="content">
        <PctsItem v-for="(item, index) in store.pcts">
            <h2>{{ item.title }}</h2>
            {{ item.sum / item.total }}
        </PctsItem>
        </div>
    </div>

</template>

<style scoped>
.app_arch {
    width: 50vw;
    align-items: center;
    /* 垂直居中 */
    justify-content: center;
    /* 水平居中 */
    border: 1px solid #ccc;
    /* 添加边框便于查看 */
}

#timeline {
  height: 100vh;
  overflow-y: auto; /* 滚动容器 */
  padding: 10vh 0; /* 直接在这里设置内边距 */
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3vh; /* 子元素间距 */
  width: 100%;
}

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

@media (max-width: 1024px) {
    .app_arch {
        width: 100vw;
    }

    .title {
        text-align: center;
    }
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

.content .pcts {
  cursor: pointer;
  transition: 400ms;
}
.content .pcts:hover {
  transform: scale(1.1, 1.1);
}

.content:has(.pcts:hover) > .pcts:not(:hover) {
  filter: blur(10px);
  transform: scale(0.9, 0.9);
}
</style>