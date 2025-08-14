<script setup>
import datas from '../../json/datas.json';
const route = useRoute();
const result = ref(null);
onMounted(() => {
    const pathQuery = route.query.path.split('/');
    const typeCategory = datas.find(item => {
        return item.name.toLowerCase().split('.')[0] === pathQuery[0].toLowerCase();
    });
    result.value = typeCategory.Data.filter(data => {
        return data.key.toLowerCase() === pathQuery[1].toLowerCase();
    });
});
const highlightCode = (text) => {
  return text.replace(/`([^`]*)`/g, '<span class="text-blue-500 font-mono">$1</span>');
}
</script>
<template>
    <div v-if="result">
        <section>
            <div class="max-w-[1200px] mt-10 mx-auto dark:text-white">
                <div class="w-full h-full p-3 flex flex-col justify-center">
                    <h1 class=" text-2xl font-bold">{{ result[0].title }}</h1>
                    <p class="p-2 mt-2 max-w-[900px]">{{ result[0].description }}</p>
                    <div class=" text-md p-2 max-w-[1000px] w-full">
                        <ul>
                            <li class="font-medium tracking-wide text-lg">difficulty : {{ result[0].difficulty }}</li>
                            <li>
                                <ul class="flex items-center flex-wrap cursor-pointer gap-3">
                                    <li v-for="(tag, index) in result[0].tags" :key="index"
                                        class="text-cyan-800  my-2  font-medium">
                                        #{{ tag }}
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <ul>
                            <li class="text-xl  font-bold">References</li>
                            <li v-for="(reference, index) in result[0].references" :key="index"
                                class="font-bold text-cyan-600 mx-2 list-disc dark:text-cyan-800 my-2">
                                <a :href="reference.url">{{ reference.title }}</a>
                            </li>
                        </ul>
                    </div>
                     <USeparator icon="iconamoon:link-fill" />
                    <div class="mt-2 max-w-[1000px]  w-full">
                        <h4 class="text-2xl px-3 font-medium">Best practices</h4>
                        <ul class="w-full p-3">
                            <li class="my-1 mx-2 list-disc" v-for="(value, index) in result[0].best_practices" :key="index" v-html="highlightCode(value)"></li>
                        </ul>
                    </div>
                    <!-- code -->
                     <div v-for="(value , index) in result[0].examples" :key="index" class="mb-3">
                        <h3 class="text-2xl font-medium mb-1.5">Example : {{ value.title }}</h3>
                        <SyntaxHighlight :code="value.code" :lang="result[0].path.split('/')[0]" />
                        <div class="mt-2" v-html="highlightCode(value.explanation)"></div>
                     </div>
                </div>
            </div>
        </section>
    </div>
</template>