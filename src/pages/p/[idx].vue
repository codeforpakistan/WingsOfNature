<template>
    {{ null }}
</template>

<script setup lang="ts">
definePageMeta({
    layout: "gallery",
});

const currentImage = useCurrentImage();

if (currentImage.value) {
    useHead({
        meta: [
            { name: "twitter:image", content: `${currentImage.value.src}` },
            { property: "og:image", content: `${currentImage.value.src}` },
        ],
    });
}
</script>
