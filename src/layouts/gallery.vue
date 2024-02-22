<template>
    <main class="absolute inset-0 w-full h-full antialiased select-none transform-gpu bg-background">
        <ImageGallery />
        <!-- <ImageCarousel /> -->
        <slot />
    </main>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import useImages from "@/composables/useImages";
import useCurrentImage from "@/composables/useCurrentImage";

const route = useRoute();
const currentImage = useCurrentImage();
const images = useImages();

const fetchImage = () => {
    const image = ref(images.find((image) => image.idx == Number(route.params.idx)));
    if (!image.value) {
        throw createError({
            statusCode: 404,
            message: "Image not found",
        });
    }
    currentImage.value = image.value;
};

fetchImage();

watch(
    () => route.path,
    () => {
        if (route.path.startsWith("/p")) {
            fetchImage();
        }
    }
);
</script>
