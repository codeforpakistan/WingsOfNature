import { getNextImageIndex } from "@/composables/utils";
import useImages from "./useImages";
import { Image } from "@/types";

const useNavigateWithTransition = (direction?: "PREV" | "NEXT", image?: Image) => {
    const show = useShow();
    const currentImage = useCurrentImage();
    const router = useRouter();
    const images = useImages();
    if (currentImage.value) {
        if (direction) {
            show.value = false;
            currentImage.value = images[getNextImageIndex(images, currentImage.value.idx, direction)];
            router.push(`/p/${currentImage.value.idx}`);
            setTimeout(() => {
                show.value = true;
            }, 250);
        }

        if (image && image.idx !== currentImage.value.idx) {
            show.value = false;
            currentImage.value = image;
            router.push(`/p/${currentImage.value.idx}`);
            setTimeout(() => {
                show.value = true;
            }, 250);
        }
    }
};

export default useNavigateWithTransition;
