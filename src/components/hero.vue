<template>
    <div class="relative columns-1 sm:columns-1 xl:columns-1 2xl:columns-1">
        <div
            class="relative xl:h-[100vh] block w-full after:content after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
        >
            <h5
                class="absolute bottom-0 left-0 z-20 w-3/5 p-4 mb-2 font-light leading-5 text-white bg-black bg-opacity-25 lg:font-normal text-16px lg:leading-10 lg:mt-16 lg:text-3xl sm:w-3/5 lg:w-1/3 lg:top-0 lg:bottom-auto"
            >
                Welcome to Wings of Nature, a showcase of diverse critters found in our neighborhood.
            </h5>
            <NuxtImg
                format="webp"
                :src="image"
                :width="10"
                :quality="1"
                class="absolute inset-0 object-cover w-full h-full"
                alt=""
            />
            <NuxtImg
                :width="640"
                :quality="75"
                format="webp"
                :src="image"
                class="w-full h-full rounded-lg object-cover relative z-10 text-[0px] duration-200"
            />
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    image: {
        type: String,
        required: true,
    },
});
</script>
