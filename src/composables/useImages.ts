import { filename as getFileName } from "pathe/utils";
import slugify from "slugify";
import type { Image } from "@/types";

const imageGlobWithMetadata = import.meta.glob("../../images/*.{jpg,jpeg,png,webp}", {
    eager: true,
    //use vite-imagetools metadata
    query: {
        metadata: "",
    },
});

const imageGlob = import.meta.glob("../../images/*.{jpg,jpeg,png,webp}", {
    eager: true,
});

export type ImageMetadata = {
    width: number;
    height: number;
};

const tempCateg = ["Bees", "Butterflies", "Beetles"];

export const imagesMetadata: ImageMetadata[] = Object.entries(imageGlobWithMetadata).map(([, value]) => {
    const data = value as unknown as ImageMetadata;
    return data;
});

const useImages = (): Image[] => {
    const images: Image[] = Object.entries(imageGlob).map(([key, value], index) => {
        const filename: string = getFileName(key);

        const { default: src } = value as unknown as { default: string };

        return {
            idx: index,
            src: src,
            filename: key.split("/").pop()!,
            alt: slugify(filename).replaceAll("-", " "),
            width: imagesMetadata[index].width,
            height: imagesMetadata[index].height,
            email: index / 2 === 0 ? "test@gmail.com" : "",
            category: tempCateg[index % tempCateg.length],
        };
    });
    return images;
};

export default useImages;
