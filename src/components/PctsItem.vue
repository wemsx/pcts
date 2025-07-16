<template>
  <div class="pcts">
    <h2>{{ title }}</h2>
    <percentage :percentage="percentage"></percentage>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  percentage: Number
})
import Percentage from './Percentage.vue'
</script>

<style scoped>
.pcts {
  width: 40vw;
  height: 16vh;
  border-radius: 10px;
  color: var(--text-color);
  background-color: blue;
  padding: 1vh 1vw;
  cursor: pointer;
  transition: 400ms;
}

.pcts:hover {
  transform: scale(1.1, 1.1);
}

@media (max-width: 1024px) {
  .pcts {
    width: 80vw;
  }
}
</style>