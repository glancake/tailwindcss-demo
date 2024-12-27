<template>
  <button @click="handleClick" :plain="plain" :class="[
    'btn',
    {
      large: size === 'large',
      normal: size === 'normal',
      small: size === 'small',
    },
    {
      primary: type === 'primary' && plain === false,
      success: type === 'success',
      error: type === 'error',
      warn: type === 'warn',
      info: type === 'info',
    },
    { plain: plain === true },
  ]">
    <slot> </slot>
  </button>
</template>

<script setup lang="ts">
import { defineProps, PropType } from 'vue'

type btnSize = 'normal' | 'small' | 'large'
type btnType = 'primary' | 'error' | 'info' | 'warn' | 'success'

defineOptions({
  name: 'KButton',
})

const emit = defineEmits(['inFocus', 'click'])
defineProps({
  size: {
    type: String as PropType<btnSize>,
    default: 'normal',
  },
  type: {
    type: String as PropType<btnType>,
    default: 'primary',
  },
  plain: {
    type: Boolean,
    default: false,
  },
})

const handleClick = () => {
  emit('click')
}
</script>

<style scoped>
.btn {
  @apply border text-white rounded-lg hover:border-transparent;
}

/* 颜色 */
.btn.primary {
  @apply bg-purple-600 hover:bg-purple-500 active:bg-purple-600 border-purple-200;
}

.btn.success {
  @apply bg-green-600 hover:bg-green-500 active:bg-green-600 border-green-200;
}

.btn.error {
  @apply bg-red-600 hover:bg-red-500 active:bg-red-600 border-red-200;
}

.btn.info {
  @apply bg-gray-600 hover:bg-gray-500 active:bg-gray-600 border-gray-200;
}

.btn.warn {
  @apply bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600 border-yellow-200;
}

/* 尺寸 */
.btn.normal {
  @apply h-10 px-5 pb-0.5 font-medium;
}

.btn.large {
  @apply h-14 px-7 py-3 text-lg font-semibold;
}

.btn.small {
  @apply h-6 px-3 text-xs;
}

/* 镂空 */
.plain {
  @apply border-2 rounded-lg hover:border-transparent border-purple-700 hover:bg-purple-500 hover:text-white text-purple-600;
}
</style>
