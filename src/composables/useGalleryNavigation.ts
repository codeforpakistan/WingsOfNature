import { onKeyStroke, useSwipe } from "@vueuse/core";
import useNavigateWithTransition from "./useNavigateWithTransition";
import { useRouter } from "vue-router";

export const PREV_NAVIGATION_KEYS = ["ArrowLeft", "ArrowUp", "a", "A", "w", "W"];
export const NEXT_NAVIGATION_KEYS = ["ArrowRight", "ArrowDown", "d", "D", "s", "S"];

export const useGalleryNavigation = (swipeableRef: Ref<HTMLElement>) => {
    const router = useRouter();

    const { direction } = useSwipe(swipeableRef, {
        onSwipeEnd() {
            if (direction.value === "RIGHT") {
                useNavigateWithTransition("PREV");
            }
            if (direction.value === "LEFT") {
                useNavigateWithTransition("NEXT");
            }
        },
    });

    onKeyStroke(PREV_NAVIGATION_KEYS, () => {
        useNavigateWithTransition("PREV");
    });
    onKeyStroke(NEXT_NAVIGATION_KEYS, () => {
        useNavigateWithTransition("NEXT");
    });
    onKeyStroke("Escape", () => router.push("/"));
};

export default useGalleryNavigation;
