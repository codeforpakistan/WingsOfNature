<template>
    <div v-if="currentImage" class="fixed inset-x-0 bottom-0 overflow-hidden bg-gradient-to-b from-black/0 to-black/60">
        <div
            :class="`mx-auto mt-12 mb-12 inline-flex ml-[50%] will-change-auto ${
                transitionEnabled ? 'duration-300' : ''
            }`"
            :style="translateStyle"
            @click.stop=""
        >
            <button
                v-for="i in images"
                :key="i.idx"
                aria-label="go to image"
                :class="`${
                    i.idx === currentImage.idx ? 'brightness-125 scale-125 z-30 rounded-lg' : 'brightness-50'
                } overflow-hidden hover:brightness-110 focus:brightness-110 duration-200 will-change-auto w-24 h-12 border-none outline-none bg-transparent`"
                @click="handleClick(i)"
            >
                <NuxtImg
                    :alt="i.alt"
                    format="webp"
                    :src="getImageSrc(i)"
                    :loading="i.idx === currentImage.idx ? 'eager' : 'lazy'"
                    :width="240"
                    :quality="75"
                    class="w-full h-full object-cover object-center text-transparent"
                />
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Image } from "@/types";
import { getImageSrc } from "@/composables/utils";
import useImages from "@/composables/useImages";

const images = useImages();

const transitionEnabled = ref(false);

const currentImage = useCurrentImage();

const translateStyle = computed(() => {
    if (!currentImage.value) {
        return undefined;
    }
    return {
        transform: `translate3d(-${currentImage.value.idx * 100}px, 0px, 0px)`,
    };
});

onMounted(() => {
    //prevents initial transition from happening on load
    setTimeout(() => (transitionEnabled.value = true), 300);
});

const handleClick = (image: Image) => {
    useNavigateWithTransition(undefined, image);
};
</script>
