<template>
    <div class="pcts" :style="{backgroundColor : 'grey'}">
        <slot></slot>
    </div>
</template>
<script setup>

</script>
<style scoped>
.pcts {
    width: 40vw;
    height: 16vh;
    border-radius: 10px;
    color: var(--text-color);
    padding: 1vh 1vw
}

@media (max-width: 1024px) {
    .pcts {
        width: 80vw;
    }
}
</style>