<template>
    <div
        v-if="currentImage"
        class="fixed inset-0 flex items-center justify-center w-full h-full overflow-auto"
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
        <div class="flex items-center justify-center w-full h-full max-w-mw">
            <Transition name="image">
                <div v-if="show" ref="swipeableRef" class="relative cursor-default" @click.stop="">
                    <!-- <Transition>
                        <div
                            v-if="showButtons"
                            class="absolute top-0 left-0 z-10 inline-flex justify-between w-full p-4"
                        >
                            <ImageAction action="close" :image="currentImage" />
                            <div class="inline-flex gap-4">
                                <ImageAction action="download" :image="currentImage" />
                                <ImageAction action="source" :image="currentImage" />
                            </div>
                            <div class="absolute bottom-0 p-2 text-white bg-black bg-opacity-50 rounded">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </div>
                        </div>
                    </Transition> -->
                    <Transition>
                        <div v-if="showButtons" class="absolute top-0 right-0 z-10 flex flex-col gap-4 p-4">
                            <ImageAction action="close" :image="currentImage" />
                            <ImageAction action="download" :image="currentImage" />
                            <ImageAction action="source" :image="currentImage" />
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
                    <div class="absolute flex items-center gap-2 text-white top-4 left-4">
                        <div class="w-10 h-10 overflow-hidden rounded-full">
                            <NuxtPicture
                                :quality="55"
                                :src="getImageSrc(currentImage)"
                                :img-attrs="{
                                    class: 'w-full h-full object-cover',
                                }"
                                :alt="currentImage.alt"
                                :preload="true"
                            />
                        </div>
                        <span>{{ currentImage.alt }}</span>
                    </div>

                    <div class="absolute text-white bottom-4 right-4">
                        <span class="bottom-0 p-2 text-white bg-black bg-opacity-50 rounded">{{
                            currentImage.alt
                        }}</span>
                    </div>
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
