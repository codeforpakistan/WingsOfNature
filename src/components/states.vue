<template>
    <section class="py-3 mx-4 my-10 text-md-center py-md-4 py-lg-5">
        <div class="container flex flex-col items-center gap-3 mx-auto">
            <h1 class="text-4xl font-bold tracking-wider text-black lg:text-6xl">{{ states.title }}</h1>
            <p class="my-8 text-2xl font-light m-md-4 m-lg-5">
                {{ states.content }}
            </p>
            <div class="flex flex-wrap justify-between w-full gap-4 px-10">
                <div
                    v-for="(stat, index) in states.statistics"
                    :key="index"
                    class="flex flex-col items-center w-full p-8 mb-2 text-white rounded-lg bg-navd md:w-1/2 lg:w-1/3 xl:w-1/4"
                >
                    <h5 class="font-bold text-8xl">{{ stat.value }}</h5>
                    <p class="text-xl font-bold text-center">{{ stat.label }}</p>
                </div>
            </div>
            <!-- <p class="mt-8 text-center text-navl">
                <a class="underline" :href="states.linkUrl">{{ states.linkText }}</a>
            </p> -->
        </div>
    </section>
</template>

<script>
import useStaticData from "@/composables/staticData";

export default {
    setup() {
        const { states } = useStaticData();
        return {
            states,
        };
    },
};
</script>
