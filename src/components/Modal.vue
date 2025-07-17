<template>
  <div v-if="isOpen" class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <button class="modal-close" @click="closeModal">&times;</button>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  }
});

const emits = defineEmits(['close']);

const closeModal = () => {
  emits('close');
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 2vw;
  border-radius: 8px;
  position: relative;
  max-width: 80vw;
  max-height: 80vh;
  overflow-y: auto;
}

.modal-close {
  position: absolute;
  top: 1vh;
  right: 1vw;
  background: none;
  border: none;
  font-size: 3vw;
  cursor: pointer;
}
</style>