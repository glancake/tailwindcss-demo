<template>
  <div>
    <div v-for="menuItem in menus">
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMenu } from "@/layout/menu/useMenu";
defineOptions({ name: "Menu" });
const { menus, currentKey, click } = useMenu()
</script>

<style scoped>
.blur-radius-box {
  background-color: rgba(78, 79, 83, 0.4);
  border-radius: 0.7rem;
  margin: 1rem;
}

.nav-ul-item {
  @apply mb-2 h-9 text-center text-white flex justify-center font-sans font-semibold text-base;
  @apply items-center rounded-md hover:scale-95 transition-transform cursor-pointer;
  @apply active:scale-90
}

.nav-ul-item:hover {
  background-color: rgb(146 151 179 / 40%);

}
</style>