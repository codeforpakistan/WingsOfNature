<template>
    <main class="antialiased transform-gpu w-full min-h-screen flex flex-col items-center select-none p-4">
        <div class="mx-auto max-w-mw w-full h-full">
            <div class="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
                <NuxtLink
                    v-for="image in images"
                    :key="image.idx"
                    :href="`/p/${image.idx}`"
                    class="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
                >
                    <NuxtImg
                        format="webp"
                        :src="getImageSrc(image)"
                        :width="10"
                        :quality="1"
                        class="w-full h-full rounded-lg object-cover blur-lg saturate-[2] absolute inset-0"
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
        </div>
    </main>
</template>

<script setup lang="ts">
import { getImageSrc } from "@/composables/utils";
import useImages from "@/composables/useImages";

const images = useImages();
</script>
