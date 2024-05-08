<template>
    <div class="flex flex-col my-10">
        <div class="flex gap-10 mx-10 my-10">
            <NuxtPicture
                :quality="55"
                :src="getImageSrc(image)"
                :img-attrs="{
                    class: 'max-h-[10rem] max-w-[10rem] w-40 h-40 sm:w-25 sm:h-25 aspect-w-1 aspect-h-1 object-cover rounded-lg',
                }"
                :alt="image.alt"
                :preload="true"
            />
            <!-- <div class="flex flex-col justify-center gap-1">
                <h1 class="mb-2 text-lg">Fly Enthusiasm</h1>
                <p>lorem lorem</p>
                <p>lorem</p>
            </div> -->
        </div>
        <main class="flex flex-col items-center w-full min-h-screen p-4 antialiased select-none transform-gpu">
            <div class="w-full h-full mx-auto max-w-mw">
                <!-- <h2 class="mb-4 text-center">Welcome to Wings of Nature, a showcase of diverse critters found in our neihbourhood.</h2> -->
                <div class="gap-4 columns-1 sm:columns-2 xl:columns-3 2xl:columns-4">
                    <NuxtLink
                        v-for="image in images"
                        :key="image.idx"
                        :href="`/p/${image.idx}`"
                        class="relative block w-full mb-5 after:content group cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
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
    </div>
</template>

<script setup lang="ts">
import { getImageSrc } from "@/composables/utils";
import useImages from "@/composables/useImages";
const images = useImages();
// console.log(data);
// const currentImage = useCurrentImage();
// const images = data.filter((image) => image?.email === currentImage.email);
const image = images[4];
</script>
