<template>
    <footer
        :style="{ backgroundImage: `url(${footer.background})` }"
        class="h-[60vh] bg-center bg-cover py-8 text-center text-white"
    >
        <div class="container mx-auto b">
            <img :src="footer.logo" alt="Logo" class="w-5/6 h-56 mx-auto mb-2 lg:w-2/6" />
            <p class="w-full px-4 mx-auto text-xl font-light lg:text-2xl lg:w-3/6">{{ footer.oneliner }}</p>
        </div>
    </footer>
</template>

<script setup>
import useStaticData from "@/composables/staticData";
const { footer } = useStaticData();
</script>
