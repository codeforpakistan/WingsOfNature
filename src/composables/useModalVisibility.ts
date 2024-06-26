import { ref } from "vue";

const isModalOpen = ref(false);

export default function useModalVisibility() {
    const openModal = () => {
        isModalOpen.value = true;
    };

    const closeModal = () => {
        isModalOpen.value = false;
    };

    const toggleModal = () => {
        isModalOpen.value = !isModalOpen.value;
    };

    return {
        isModalOpen,
        openModal,
        closeModal,
        toggleModal,
    };
}
