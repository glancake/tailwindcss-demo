<!-- 卡片列表 -->
<template>
  <div class="container">
    <div class="card" v-for="item in items" @mousedown="handleMouseDown" @mouseup="handleMouseUp">
      <h5 class="text-3xl font-bold mb-4 mt-0">{{ item.title }}</h5>
      <!-- <div class="check-circle"></div> -->
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts"  setup>
import { defineOptions, defineProps, ref } from 'vue'

type item = {
  title?: string
}

defineOptions({
  name: 'KCardList'
})
defineProps({
  items: {
    type: Array<item>,
    default: ['default']
  }
})
const timer = ref<number>(0)
const handleMouseDown = () => {
  timer.value = setTimeout(() => {
    console.log('长按');
  }, 500);
}
const handleMouseUp = () => {
  clearTimeout(timer.value)
}

</script>

<style  scoped>
.container {
  @apply p-3
}

.card {
  @apply bg-white rounded shadow border p-6 w-32 mb-10 active:scale-90 transition-transform
}

.check-circle {
  @apply rounded-lg w-5 h-5 fixed bg-red-200
}
</style>