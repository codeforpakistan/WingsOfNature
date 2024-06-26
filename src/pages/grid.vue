<template>
    <main
        class="flex flex-col items-center w-full min-h-screen mt-4 antialiased select-none lg:mt-0 lg:p-4 transform-gpu"
    >
        <div class="w-full h-full mx-auto max-w-mw">
            <div class="gap-4 columns-1 md:columns-2 xl:columns-3 2xl:columns-4">
                <div
                    v-for="picture in pictures"
                    :key="picture._id"
                    class="relative block w-full mb-5 after:content group cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
                    @click="handleOpenModal(picture.picture, picture.about)"
                >
                    <NuxtImg
                        :width="640"
                        :quality="75"
                        :src="picture.picture"
                        class="w-full h-full object-cover relative z-10 text-[0px] duration-200"
                    />
                </div>
            </div>
        </div>
        <Modal :show="isModalOpen" :image-src="modalImage" :about="aboutPic" @close="handleCloseModal" />
    </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import getData from "@/composables/getData";
import useModalVisibility from "@/composables/useModalVisibility";
import Modal from "~/components/modal.vue";

const pictures = await getData();
const { isModalOpen, openModal, closeModal } = useModalVisibility();

const modalImage = ref<string>("");
const aboutPic = ref<string>("");

const handleOpenModal = (imageSrc: string, about: string) => {
    modalImage.value = imageSrc;
    aboutPic.value = about;
    openModal();
};

const handleCloseModal = () => {
    closeModal();
};
</script>
