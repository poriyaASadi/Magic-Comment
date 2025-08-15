<script setup>
</script>
<template>
    <main class="w-full h-[calc(100%-4rem)]">
        <section class="w-full h-full px-2">
            <div class="flex w-full h-full flex-col items-center justify-center">
                <div class="flex items-center justify-center flex-col">
                    <h1 class="text-4xl tracking-normal dark:text-white font-bold !font-roboto text-center">
                        <span class="text-cyan-400 dark:text-cyan-800">Search Comment</span>
                        <br>
                        in All Projects
                    </h1>
                    <p class="text-center dark:text-white leading-7 max-w-[700px] my-3 font-Inconsolata text-sm sm:text-base">No more searching and thinking for the right comment for your structure and project. Just move forward with the help of our artificial intelligence and our documentation.</p>
                    <div class="flex  *:tracking-tight flex-col gap-2 *:cursor-pointer">
                        <a href="https://github.com/poriyaASadi/Magic-Comment" class="flex p-3 rounded-md bg-cyan-400 dark:bg-cyan-800 font-bold gap-1 flex-row-reverse items-center">
                             Show GitHub Page
                        <Icon name="grommet-icons:github"/>
                        </a>
                        <NuxtLink to="/documentations" class="font-bold text-center hover:text-cyan-500 dark:text-white pt-2 p-3 rounded-md">Start Comment Now</NuxtLink>
                    </div>
                </div>
                <div>
                    <div class="flex items-center gap-3 p-2 rounded-md border-2 bg-white dark:bg-slate-900 border-cyan-400 dark:border-cyan-800">
                        <ul>
                            <li class="text-green-800 dark:text-cyan-400 font-medium">// comment clean === project clean</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <!-- liner div for button page -->
         <div class="liner-primery-button w-full h-full -z-10 absolute left-0 top-0"></div>
    </main>
</template>