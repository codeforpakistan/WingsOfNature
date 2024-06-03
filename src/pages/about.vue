<template>
    <div>
        <Hero image="/big_eye.jpg" />
        <div>
            <div class="flex flex-wrap">
                <div class="flex flex-col flex-grow w-full gap-4 px-4 py-10 text-white lg:w-1/2 bg-navl">
                    <h2 class="text-2xl font-bold text-center lg:text-4xl">{{ about.cfp.name }}</h2>
                    <p class="mt-2 font-light lg:text-3xl">{{ about.cfp.about }}</p>
                </div>
                <div class="flex flex-col flex-grow w-full gap-4 px-4 py-10 text-white lg:w-1/2 bg-mgreen">
                    <h2 class="text-2xl font-bold text-center lg:text-4xl">{{ about.pml.name }}</h2>
                    <p class="mt-2 font-light lg:text-3xl">{{ about.pml.about }}</p>
                </div>
            </div>

            <div class="w-full">
                <div class="flex flex-col gap-4 px-4 py-10 text-center text-white lg:py-24 bg-navd">
                    <h2 class="text-2xl font-bold lg:text-4xl">{{ about.won.name }}</h2>
                    <p class="mt-2 font-light lg:text-3xl">{{ about.won.about }}</p>
                </div>
            </div>
        </div>
        <Team :team="about.team" />
    </div>
</template>

<script setup>
import useStaticData from "@/composables/staticData";
const { about } = useStaticData();
</script>
