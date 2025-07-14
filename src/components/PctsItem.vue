<template>
    <div class="pcts">
        <slot></slot>
    </div>
</template>
<script setup>

</script>
<style scoped>
.pcts {
    width: 40vw;
    height: 16vh;
    border: 2px solid red;
    border-radius: 10px;
}

@media (max-width: 1024px) {
    .pcts {
        width: 80vw;
    }
}
</style>