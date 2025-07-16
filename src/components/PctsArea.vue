<template>
    <div id="timeline" class="app_arch">
        <div class="content">
            <PctsItem v-for="(item, index) in items" :key="index" :title="item.title"
                :percentage="item.sum / item.total" />
        </div>
    </div>
</template>
<script setup>
import PctsItem from './PctsItem.vue'

defineProps({
    items: {
        type: Array,
        required: true
    }
})
</script>
<style scoped>
#timeline {
    height: 100vh;
    overflow-y: auto;
    padding: 10vh 0;
}

.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3vh;
    width: 100%;
}

.content:has(.pcts:hover)>.pcts:not(:hover) {
    filter: blur(10px);
    transform: scale(0.9, 0.9);
}
</style>