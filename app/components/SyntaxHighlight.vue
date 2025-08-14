<script setup>
import { getHighlighter } from 'shiki-es';
const { valueD: theme } = useLocalStorage("theme");


const props = defineProps({
    code: String,
    lang: { type: String, default: 'typescript' }
});
const isDark = theme === 'dark';
const highLightCode = ref('');
const themes = {
    light: 'github-light',
    dark: 'github-dark'
}
onMounted(async () => {
    const highLighter = await getHighlighter({
        theme: isDark ? themes.dark : themes.light, // 'dark-plus'
        lang: 'js'
    });
    let html = highLighter.codeToHtml(props.code, {
        lang: 'js',
        themes: isDark ? themes.dark : themes.light
    });
    html = html.replace('<pre', '<pre class="overflow-x-auto w-full shiki"');
    highLightCode.value = html;
});
// const normalizeLang = (lang) => {
//     const aliases = {
//         javascript : 'js',
//         typescript : 'ts'
//     };
//     return aliases[lang] || lang
// };



// watch(() => theme , async (newValue) => {
//     const highLighter = await getHighlighter({
//         theme: themes[newValue], // 'dark-plus'
//         lang: [props.lang]
//     });
//     highLightCode.value = highLighter.codeToHtml(props.code, {
//         lang: props.lang,
//         themes: themes[newValue]
//     });
//     console.log(highLightCode.value);
    
    
// })
</script>
<template>
    <div v-if="highLightCode" v-html="highLightCode" class="text-sm my-1.5 min-w-full h-full overflow-x-auto"></div>
    <div v-else class="text-blue-500">
        Loading Code 
    </div>
</template>
