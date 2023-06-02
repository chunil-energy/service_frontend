<script setup lang="ts">
import { useOpenMobileNav } from '@/stores/openMobileNav'
import { storeToRefs } from 'pinia';
const store = useOpenMobileNav()
const { opened, scrollY } = storeToRefs(store);
const { toggle, setScrollY } = store;
const handleScroll = () => {
  setScrollY(window.scrollY)
}
window.addEventListener("scroll", handleScroll);
</script>

<template>
  <header class="fixed top-0 left-0 w-screen z-50 transition-colors"
    v-bind:class="{ 'bg-white': scrollY > 10, 'shadow': scrollY > 10 }">
    <div class="mx-layout flex flex-row items-center justify-between py-[19px]">
      <router-link to="/">
        <img src="@/assets/logo.svg" alt="지구하다 로고">
      </router-link>
      <button class="md:hidden p-2 cursor-pointer" @click="toggle">
        <i class="fa-solid fa-bars"></i>
      </button>
      <nav
        class="fixed md:relative top-0 w-screen md:w-auto h-screen md:h-auto flex justify-end bg-black/50 md:bg-transparent md:left-0"
        @click.stop="toggle" v-bind:class="{ 'left-0': opened, 'left-full': !opened }">
        <div
          class="flex flex-col md:flex-row md:items-center gap-[10px] md:gap-[55px] md:max-w-[400px] w-[60vw] md:w-auto px-4 md:px-0 py-10 md:py-0 bg-white md:bg-transparent transition-transform duration-500 md:transition-none md:transform-none"
          v-bind:class="{ 'translate-x-0': opened, 'translate-x-full': !opened }" @click.stop="">
          <router-link to="/about" class="py-3 md:py-0">이용안내</router-link>
          <router-link to="/history" class="py-3 md:py-0">신청내역</router-link>
          <router-link to="/request" class="button-md mt-3 md:mt-0">수거 신청하기</router-link>
        </div>
      </nav>
    </div>
  </header>
</template>