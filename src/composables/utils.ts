import type { Image } from "@/types";

export const downloadImage = (image: Image) => {
    const a = document.createElement("a");
    a.setAttribute("href", image.src);
    a.setAttribute("download", image.filename);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
};

export const getNextImageIndex = (images: Image[], currentIndex: number, direction: "PREV" | "NEXT") => {
    const delta = direction === "PREV" ? -1 : 1;
    const nextIndex = (currentIndex + delta + images.length) % images.length;
    return nextIndex;
};

/**
 * @description Returns the image source based on the provider. Currently supported providers are vercel and ipx.
 */
export const getImageSrc = (image: Image) => {
    const $img = useImage();

    switch ($img.options.provider) {
        case "vercel":
            return image.src;
        case "ipx":
            return image.filename;
        default:
            return image.src;
    }
};
