<template>
    <section class="py-3 text-center bg-grey" :class="{ 'bg-navd text-white': data.title === 'Contribute Pictures' }">
        <div class="container flex flex-col items-center gap-1 mx-auto">
            <h1 class="text-6xl font-bold tracking-wide">{{ data.title }}</h1>
            <p class="my-2 text-2xl font-light">
                {{ data.method }}
            </p>
            <div class="flex flex-wrap justify-around w-full lg:gap-2">
                <div
                    v-for="(method, index) in data.methods"
                    :key="index"
                    :class="[
                        'flex',
                        'p-6',
                        'lg:p-1',
                        'w-full',
                        'md:w-1/2',
                        'lg:w-1/3',
                        'xl:w-1/4',
                        'gap-2',
                        'items-center',
                        'lg:flex-col',
                        { 'flex-row-reverse': index % 2 === 1 },
                    ]"
                >
                    <img :src="method.src" :alt="method.title" class="w-1/2 lg:w-full lg:h-[42vh]" />
                    <div>
                        <h5 class="mt-2 text-xl font-bold tracking-wider lg:text-4xl">{{ method.title }}</h5>
                        <p class="mt-2 text-center text-8px lg:text-2xl">{{ method.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
    data: {
        type: Object,
        required: true,
    },
});
</script>
