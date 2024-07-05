<template>
    <footer
        :style="{ backgroundImage: `url(${footer.background})` }"
        class="h-[60vh] bg-center bg-cover py-8 text-center text-white"
    >
        <div class="container mx-auto">
            <img :src="footer.logo" alt="Logo" class="w-5/6 h-56 mx-auto mb-2 lg:w-2/6" />
            <p class="w-full px-4 mx-auto text-xl font-light lg:text-3xl lg:w-3/6">
                Wings of Nature is a biodiversity collaboration project between
                <a
                    href="https://www.precisionmedicine.pk/"
                    class="text-white underline hover:text-gray-200"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Precision Medicine Lab
                </a>
                and
                <a
                    href="https://codeforpakistan.org/"
                    class="text-white underline hover:text-gray-200"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Code for Pakistan </a
                >.
            </p>
        </div>
    </footer>
</template>

<script setup>
import useStaticData from "@/composables/staticData";
const { footer } = useStaticData();
</script>
