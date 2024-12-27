<template>
  <div class="min-h-screen flex flex-col z-10 relative  ">
    <header class=" h-16 p-3 blur-radius-box">Header</header>

    <div class="flex-1 flex flex-col sm:flex-row ">
      <Menu></Menu>

      <main class="flex-1  flex flex-col justify-around blur-radius-box">
        <RouterView></RouterView>

      </main>

      <aside class="sm:w-32 p-3 blur-radius-box text-white">Right Sidebar</aside>
    </div>

    <footer class="p-3 blur-radius-box text-white">Footer</footer>
  </div>
</template>

<script setup lang="ts">
import Menu from '@/layout/menu/Menu.vue'
import { RouterView } from 'vue-router';
defineOptions({ name: 'Root' })

</script>

<style scoped>
.blur-radius-box {
  background-color: rgba(16 18 27 / 40%);
  border-radius: 0.7rem;
  margin: 1rem;
}
</style>