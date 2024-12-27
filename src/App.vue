<script setup lang="ts">
// import { reactive, ref, onMounted } from 'vue'
// import sentences from '@/assets/sentence/sentence-10000.json';
// import Sentence from '@/types/sentence.ts'
import { RouterView } from 'vue-router';

defineOptions({
  name: 'App',
})

// type tab = {
//   name: string,
//   icon?: string,
//   checked: boolean
// }

// const tabs: tab[] = reactive<tab[]>(
//   [
//     { name: "Home", icon: 'house', checked: true },
//     { name: "Like", icon: 'heart', checked: false },
//     { name: "Search", icon: 'search', checked: false },
//     { name: "Profile", icon: 'file-lines', checked: false },
//   ]
// )
// const sentenceMaxIndex = ref(9999)
// let sentence1 = ref<Array<Sentence>>([])

// // 定义滑块的位置
// let bgLeft = ref(0)

// onMounted(() => {
//   // 获取滑块的位置
//   const firstBarLeft = (document.querySelector('.bar') as HTMLElement).offsetLeft
//   bgLeft.value = firstBarLeft - 8
//   const randomIndex = getRandomIndex()
//   sentence1.value = sentences.slice(randomIndex, randomIndex + 50)
// })

// const handleBarClick = (event: Event, item: tab) => {
//   bgLeft.value = (event.currentTarget as HTMLElement).offsetLeft - 8
//   tabs.forEach((tab) => {
//     tab.checked = tab.name === item.name
//   })
//   const randomIndex = getRandomIndex()
//   sentence1.value = sentences.slice(randomIndex, randomIndex + 50)
// }

// const getRandomIndex = () => {
//   const min = 0
//   const max = sentenceMaxIndex.value - 50
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }


</script>

<template>
  <!-- 最小高度为100vh flex弹性布局 列-->
  <!-- <div class="fixed top-0 bottom-0 h-full w-full">
    <video class="h-full w-full object-cover" autoplay loop muted>
      <source src="@/assets/video/bg-video.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div> -->
  <RouterView></RouterView>
</template>

<style scoped lang="css">
body {
  @apply w-full h-max
}





.main-header {
  height: 4.5rem;
  padding: 0.5rem;

}

.main-header .bar {
  @apply delay-75 transition-all duration-300;
  @apply flex w-32 p-2 justify-center items-center font-mono text-lg rounded-3xl m-2 hover:cursor-pointer;
}



.card-lists {

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: rgba(16 18 27 / 40%);
  border-radius: 0 0 0.7rem 0.7rem;
  flex-grow: 1;
  width: 100%;
}

.main-card {
  background-color: rgb(146 151 179 / 13%);
  @apply h-20 min-w-32 p-2 rounded-md shadow-md backdrop-blur-xl items-center flex justify-center font-mono text-lg cursor-pointer;
  @apply transition-transform transform hover:scale-110 m-3 text-blue-300;
}
</style>
