<script setup>
const route = useRoute();</script>
<template>
    <footer v-if="route.path !== '/' " class="absolute left-0 bottom-[100vh-10rem] z-20 bg-slate-100 dark:bg-slate-950 w-full p-3">
        <div>
            <section>
                <div class="flex font-roboto flex-col justify-center items-center">
                    <div class="flex items-center gap-0.5">
                        <Icon name="grommet-icons:code-sandbox" size="30" />
                        <h3>MagicComment</h3>
                    </div>
                    <p class="text-center text-sm my-0.5">Made with love for novice programmers and to guide you</p>
                    <ul class="flex font-medium items-center justify-center flex-wrap gap-3">
                        <li class="flex items-center gap-x-1">
                            <Icon name="grommet-icons:github" size="20" />
                            <a href="#">Developer Github</a>
                        </li>
                        <li>
                            <a href="#">Developer Channel</a>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    </footer>
</template>