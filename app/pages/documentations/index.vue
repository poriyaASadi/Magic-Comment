<script setup lang="js">
import datas from '../../json/datas.json';
const items = ref(['TypeScript', 'Javascript', 'Nuxt.js', 'Next.js', 'Vue.js', 'React.js']);
const isError = ref('');
const isLoading = ref(true);
const activeData = ref([]);
// composables
const { valueD: activeCategory, setValue: setActiveCategory } = useLocalStorage("category", "Javascript");
const value = ref("Javascript");

onMounted(() => {
    //findData(unref(value.value));
    findData(value.value);
    if (activeCategory && activeCategory !== '') {
        findData(activeCategory);
        value.value = activeCategory;
    } else {
        findData(unref(value.value));
    }
});
watch(() => value.value, (newValue) => {
    setActiveCategory(newValue);
    isLoading.value = true;
    activeData.value = [];
    findData(newValue);
});
function findData(dataName) {
    const foundItem = datas.find(data => data.name === dataName);
    if (foundItem) {
        activeData.value = foundItem;
    } else {
        throw new Error("error : FreamWork not found :(");
        isError.value = 'FreamWork not found :(';
        activeData.value = [];
    }
    isLoading.value = false;
};
</script>
<template>
    <section class="mt-10 px-2 max-w-[1200px] mx-auto">
        <div class="flex items-center flex-col justify-center w-full">
            <div class="text-center">
                <h2 class="font-roboto text-2xl md:text-3xl font-medium">Choose the <span
                        class="text-cyan-400 dark:text-cyan-800">framework</span> you
                    want to work with.</h2>
                <p class="">You can also collaborate with us on GitHub.</p>
            </div>
            <div class="mt-3">
                <USelect v-model="value" color="neutral" :items="items"
                    class="w-48 hover:cursor-pointer dark:text-white border-cyan-400" />
            </div>
            <div class="mt-10 p-3">
                <div v-if="isLoading" class="dark:text-white">
                    <div>
                        <ul class="grid grid-cols-1 md:grid-cols-2 gap-3 auto-rows-fr">
                            <li v-for="(value,index) in 6" :key="index" class="bg-white rounded-lg dark:bg-transparent w-[20rem]">
                                <div class="flex w-full items-center gap-4 p-3">
                                    <USkeleton class="min-h-12 min-w-12 rounded-full" />
                                    <div class="grid gap-2 w-full">
                                        <USkeleton class="h-4 w-full" />
                                        <USkeleton class="h-4 w-full" />
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div v-else-if="isError" class="dark:text-white">{{ isError }}</div>
                <ul v-else class="grid grid-cols-1 md:grid-cols-2 gap-3 auto-rows-fr">
                    <li v-for="(value, index) in activeData.Data" :key="index" class="h-full">
                        <div class="w-full h-full">
                            <div
                                class="p-3 h-full flex flex-col justify-between w-full rounded-md  bg-white dark:bg-slate-900 shadow-md border border-cyan-300 dark:border-cyan-800">
                                <NuxtLink :to="`/info?path=${value.path}`"
                                    class="inline-block text-xl mb-1.5 font-bold font-roboto">
                                    {{ value.title }}
                                </NuxtLink>
                                <p class="text-sm">
                                    {{ value.description }}
                                </p>
                                <ul class="flex items-center gap-3 flex-wrap mt-1.5">
                                    <li v-for="(tag, index) in value.tags" :key="index"
                                        class="font-bold text-cyan-700 text-sm">
                                        {{ tag }}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>