<template>
    <div class="collapse-wrapper" :style="{ width }">
      <div class="collapse-header" @click="toggle">
        <slot name="header">
          <div class="default-header">
            {{ title }}
            <span class="arrow" :class="{ 'arrow-up': modelValue }">▼</span>
          </div>
        </slot>
      </div>
      
      <transition name="collapse">
        <div class="collapse-content" v-show="modelValue">
          <slot></slot>
        </div>
      </transition>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    title: {
      type: String,
      default: '点击展开'
    },
    width: {
      type: String,
      default: '300px'
    },
    modelValue: {
      type: Boolean,
      default: false
    }
  });
  
  const emit = defineEmits(['update:modelValue']);
  
  const toggle = () => {
    emit('update:modelValue', !props.modelValue);
  };
  </script>
  
  <style scoped>
  .collapse-wrapper {
    margin: 10px 0;
    border-radius: 4px;
    overflow: hidden;
  }
  
  .collapse-header {
    padding: 10px 15px;
    background-color: #f5f5f5;
    border: 1px solid #ddd;
    cursor: pointer;
    user-select: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .default-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  
  .arrow {
    transition: transform 0.3s;
    font-size: 12px;
  }
  
  .arrow-up {
    transform: rotate(180deg);
  }
  
  .collapse-content {
    border: 1px solid #ddd;
    border-top: none;
    padding: 15px;
    background-color: #fff;
    color:black
  }
  
  /* 过渡效果 */
  .collapse-enter-active,
  .collapse-leave-active {
    transition: all 0.3s ease;
    overflow: hidden;
  }
  
  .collapse-enter-from,
  .collapse-leave-to {
    max-height: 0;
    opacity: 0;
    padding-top: 0;
    padding-bottom: 0;
    border-width: 0;
  }
  </style>