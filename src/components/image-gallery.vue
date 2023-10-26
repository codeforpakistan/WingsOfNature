<template>
    <div
        v-if="currentImage"
        class="w-full h-full fixed inset-0 overflow-auto flex items-center justify-center"
        @click="close"
    >
        <Transition>
            <NuxtImg
                v-if="show"
                :key="currentImage.idx"
                format="webp"
                :preload="true"
                :src="getImageSrc(currentImage)"
                :quality="1"
                :width="10"
                alt="background"
                class="absolute inset-0 w-full h-full object-cover blur-xl brightness-[0.25]"
            />
        </Transition>
        <div class="max-w-mw w-full h-full flex justify-center items-center">
            <Transition name="image">
                <div v-if="show" ref="swipeableRef" class="relative cursor-default" @click.stop="">
                    <Transition>
                        <div
                            v-if="showButtons"
                            class="absolute top-0 left-0 w-full inline-flex justify-between p-4 z-10"
                        >
                            <ImageAction action="close" :image="currentImage" />
                            <div class="inline-flex gap-4">
                                <ImageAction action="download" :image="currentImage" />
                                <ImageAction action="source" :image="currentImage" />
                            </div>
                            <span class="bg-black bg-opacity-50 text-white p-2 rounded absolute bottom-0">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </span>
                        </div>
                    </Transition>
                    <NuxtPicture
                        :quality="55"
                        :src="getImageSrc(currentImage)"
                        :img-attrs="{
                            class: 'max-h-[40rem] w-auto h-auto aspect-auto brightness-110 text-transparent',
                        }"
                        :alt="currentImage.alt"
                        :preload="true"
                    />
                </div>
            </Transition>
        </div>
    </div>
</template>

<script setup lang="ts">
import useGalleryNavigation from "@/composables/useGalleryNavigation";
import { useElementSize } from "@vueuse/core";
import { useRouter } from "vue-router";

const currentImage = useCurrentImage();
const router = useRouter();
const close = () => router.push("/");
const swipeableRef = ref();
const show = useShow();

const { width, height } = useElementSize(swipeableRef);

const showButtons = computed(() => {
    //prevents buttons showing/shifting if parent hasn't reached full size.
    return width.value > 100 && height.value > 40;
});

useGalleryNavigation(swipeableRef);
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.25s ease;
}
.v-enter-from,
.v-leave-to {
    opacity: 0;
}

.image-enter-active,
.image-leave-active {
    transition: all 0.25s ease;
}
.image-enter-from,
.image-leave-to {
    opacity: 0;
}
</style>
