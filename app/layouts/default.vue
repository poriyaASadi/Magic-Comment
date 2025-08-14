<script setup lang="js">
import Header from '../components/Header.vue';
</script>
<template>
    <div class="w-full relative z-10 min-h-screen !h-screen overflow-y-auto overflow-hidden *:font-Inconsolata bg-slate-100 dark:bg-slate-950 transition-all duration-75">
        <Header/>
        <slot/>
        <Footer/>
    </div>
</template>