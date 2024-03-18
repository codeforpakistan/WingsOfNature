<template>
    <main class="flex flex-col items-center w-full min-h-screen p-4 antialiased select-none transform-gpu">
        <div class="w-full h-full mx-auto max-w-mw">
            <h2 class="mb-4 text-center">
                Welcome to Wings of Nature, a showcase of diverse critters found in our neihbourhood.
            </h2>
            <div class="xl:ml-10 xl:mr-10 columns-1 sm:columns-1 xl:columns-1 2xl:columns-1">
                <NuxtLink
                    :key="image.idx"
                    :href="`/p/${image.idx}`"
                    class="relative xl:h-[70vh] block w-full mb-5 after:content group cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
                >
                    <NuxtImg
                        format="webp"
                        :src="getImageSrc(image)"
                        :width="10"
                        :quality="1"
                        class="absolute inset-0 object-cover w-full h-full rounded-lg"
                        alt=""
                    />
                    <NuxtImg
                        :id="image.idx"
                        :width="640"
                        :quality="75"
                        format="webp"
                        :src="getImageSrc(image)"
                        :alt="image.alt"
                        class="w-full h-full rounded-lg object-cover relative z-10 text-[0px] duration-200"
                        :style="{ aspectRatio: image.width / image.height }"
                    />
                    <span class="sr-only">{{ image.alt }}</span>
                </NuxtLink>
            </div>

            <hr class="xl:ml-10 xl:mr-10 my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
            <div class="xl:ml-10 xl:mr-10">
                <div class="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
                    <RouterLink v-for="card in cards" :key="card.title" class="flex justify-center" :to="'/grid'">
                        <div
                            class="flex flex-col h-full bg-white rounded-lg shadow-md dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0 sm:rounded-r-none"
                        >
                            <NuxtImg class="rounded-lg" :src="card.image" :alt="card.title" />

                            <div class="flex-grow p-6">
                                <h5
                                    class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50"
                                >
                                    {{ card.title }}
                                </h5>
                                <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                                    {{ card.desc }}
                                </p>
                            </div>
                            <div
                                class="px-6 py-3 mt-auto text-center border-t-2 border-neutral-100 dark:border-neutral-600 dark:text-neutral-50"
                            >
                                <small>Some text</small>
                            </div>
                        </div>
                    </RouterLink>
                </div>
            </div>
            <States />
        </div>
    </main>
</template>

<script setup lang="ts">
import { getImageSrc } from "@/composables/utils";
import useImages from "@/composables/useImages";
import States from "~/components/states.vue";

const images = useImages();
const image = images[4];
const cards = [
    {
        image: getImageSrc(images[0]),
        title: "Insects One",
        desc: "This card has supporting text below as a natural lead-in to additional content.",
    },
    {
        image: getImageSrc(images[2]),
        title: "Insects Two",
        desc: "This card has supporting text below as a natural lead-in to additional content.",
    },
    {
        image: getImageSrc(images[3]),
        title: "Insects Three",
        desc: "This card has supporting text below as a natural lead-in to additional content.",
    },
];
</script>
