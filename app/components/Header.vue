<script setup>
const route = useRoute();
</script>
<template>
    <header>
        <div class="w-full h-16 flex-row-reverse flex items-center justify-between px-3 *:flex *:items-center *:justify-center">
            <div class="flex items-center gap-2">
                <div v-if="route.path !== '/' ">
                    <button
                        class="bg-cyan-600 dark:bg-cyan-800 flex items-center justify-center  p-0.5 md:px-4 md:py-1 cursor-pointer rounded-full text-white font-medium shadow-md shadow-cyan-100 dark:shadow-cyan-900">
                        <Icon name="arcticons:ai-chat-alt-2" class="md:hidden font-medium" size="30"/>
                        <p class="hidden md:inline-block">Try Modal AI</p>
                    </button>
                </div>
                <ThemeSwitch />
                <Icon name="grommet-icons:code-sandbox" class="dark:text-white" size="30" />
            </div>
            <div>
                <NuxtLink to="/" class="text-cyan-400 dark:text-cyan-800 flex items-center text-2xl font-medium font-roboto">
                    Magic
                    <Icon name="grommet-icons:code-sandbox" size="30" />Comment
                </NuxtLink>
            </div>
        </div>
    </header>
</template>