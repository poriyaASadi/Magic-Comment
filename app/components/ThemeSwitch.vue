<script setup>
const theme = ref('light');
const applyTheme = () => {
    if (process.client) {
        const isDark = theme.value === 'dark' ||
            (!localStorage.getItem('theme') &&
                window.matchMedia('(prefers-color-scheme: dark)').matches);

        document.documentElement.classList.toggle('dark', isDark);
    }
};
onMounted(() => {
    if (process.client) {
        theme.value = localStorage.getItem('theme') || 'light';
        applyTheme();
    }
});
const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light';
    if (process.client) {
        localStorage.setItem('theme', theme.value);
    }
};
watch(theme, () => {
    applyTheme();
});
</script>

<template>
    <div class="flex items-center *:cursor-pointer" @click="toggleTheme">
        <Icon :name="theme === 'light' ? 'iconamoon:mode-dark-fill' : 'iconamoon:mode-light-fill'" size="30"
            :class="theme === 'light' ? 'text-cyan-500' : 'text-cyan-800'" />
    </div>
</template>