<template>
    <button
        :aria-label="ariaLabel[action]"
        :data-testid="action"
        class="p-2 rounded-full duration-100 bg-gray-800 bg-opacity-80 hover:bg-gray-700 focus:bg-gray-700 outline-gray-100 outline-2 text-white z-[999]"
        @click="handleClick"
    >
        <ArrowDownOnSquareIcon v-if="action === 'download'" class="w-4 h-4 stroke-white stroke-0" />
        <ArrowUpRightIcon v-if="action === 'source'" class="w-4 h-4 stroke-white" />
        <XMarkIcon v-if="action === 'close'" class="w-4 h-4 stroke-white" />
    </button>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { downloadImage } from "@/composables/utils";
import { ArrowUpRightIcon, XMarkIcon, ArrowDownOnSquareIcon } from "@heroicons/vue/20/solid";
import type { ImageActionProps } from "@/types";

const router = useRouter();

const props = defineProps<ImageActionProps>();

const ariaLabel = {
    close: "close image",
    download: "download image",
    source: "open original in new tab",
};

const handleClick = (e: MouseEvent) => {
    switch (props.action) {
        case "close":
            router.push("/");
            break;
        case "source":
            window.open(props.image.src, "_blank");
            break;
        case "download":
            downloadImage(props.image);
            break;
    }
    e.preventDefault();
};
</script>
