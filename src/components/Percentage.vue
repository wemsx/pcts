<template>
<div class="progress">
    <div class="progressBar pctsControl" :style="{ '--percentage-width': percentage*100+'%' }">
    </div>
</div>
目标达成 {{ percentage*100+'%' }}
</template>
<script setup>
defineProps({
    percentage: Number
})
</script>
<style scoped>
.progress {
  padding: 6px;
  background: rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  box-shadow: inset 0 0.5px 1px rgba(0, 0, 0, 0.25), 0 2px rgba(255, 255, 255, 0.08);
}

.progressBar {
  height: 20px;
  border-radius: 12px;
}

.pctsControl {
  width: var(--percentage-width);
  background-image: linear-gradient(to right, #F7981E, #FFD201);
  animation: progressAnimationStrike 3s ease
}

@keyframes progressAnimationStrike {
  from {
    width: 0
  }

  to {
    width: var(--percentage-width)
  }
}
</style>