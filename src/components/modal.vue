<template>
    <div v-if="show" class="fixed inset-0 z-50 flex items-center justify-center w-full bg-black bg-opacity-80">
        <div class="relative rounded-lg">
            <div class="absolute flex flex-col space-y-2 top-2 right-2">
                <button
                    class="flex items-center justify-center w-8 h-8 border-2 rounded-lg bg-black-600"
                    @click="close"
                >
                    <XMarkIcon class="w-4 h-4 stroke-white" />
                </button>
                <button
                    class="flex items-center justify-center w-8 h-8 border-2 rounded-lg bg-black-600"
                    @click="openInNewTab"
                >
                    <ArrowUpRightIcon class="w-4 h-4 stroke-white" />
                </button>
            </div>
            <NuxtImg :src="imageSrc" :width="800" :quality="90" class="object-cover rounded-lg" />
            <div class="absolute text-white bottom-4 right-4">
                <span class="bottom-0 p-2 text-white bg-black bg-opacity-50 rounded">{{ about }}</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ArrowDownOnSquareIcon, ArrowUpRightIcon, XMarkIcon } from "@heroicons/vue/20/solid";
import { ref, watch } from "vue";

const props = defineProps({
    show: Boolean,
    imageSrc: String,
    about: String,
});
const emit = defineEmits(["close"]);

const close = () => {
    emit("close");
};

const openInNewTab = () => {
    window.open(props.imageSrc, "_blank");
};

// Close modal when `show` changes to false
watch(
    () => props.show,
    (newVal) => {
        if (!newVal) {
            close();
        }
    }
);
</script>
