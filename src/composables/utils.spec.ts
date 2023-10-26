import { describe, it, expect, vi } from "vitest";
import { downloadImage, getNextImageIndex } from "./utils";
import type { Image } from "@/types";

describe("downloadImage", () => {
    const exampleImage: Image = {
        idx: 0,
        filename: "Atacama-Desert-Chile.jpg",
        alt: "Atacama Desert Chile",
        src: "/_nuxt/images/Atacama-Desert-Chile.jpg",
        width: 1,
        height: 1,
    };
    it("should download correctly", () => {
        /* eslint-disable  @typescript-eslint/no-explicit-any */
        const mockLink = {
            href: "",
            click: vi.fn(),
            download: "",
            setAttribute: vi.fn(),
        } as any;

        const createElementSpy = vi.spyOn(document, "createElement").mockReturnValueOnce(mockLink);
        document.body.appendChild = vi.fn();
        document.body.removeChild = vi.fn();

        downloadImage(exampleImage);

        expect(createElementSpy).toBeCalledWith("a");

        expect(mockLink.setAttribute.mock.calls.length).toBe(2);

        expect(mockLink.setAttribute.mock.calls[0]).toEqual(["href", exampleImage.src]);
        expect(mockLink.setAttribute.mock.calls[1]).toEqual(["download", exampleImage.filename]);

        expect(document.body.appendChild).toBeCalledWith(mockLink);

        expect(mockLink.click).toBeCalled();

        expect(document.body.removeChild).toBeCalledWith(mockLink);
    });
});

describe("getNextImageIndex", () => {
    const imageArrayLength = 5;
    const imageArray = Array(5).fill(0);

    it("should give correct next index from zero in LEFT direction", () => {
        const nextIndex = getNextImageIndex(imageArray, 0, "PREV");
        expect(nextIndex).toEqual(imageArrayLength - 1);
    });

    it("should give correct next index from highest index in RIGHT direction", () => {
        const nextIndex = getNextImageIndex(imageArray, imageArrayLength - 1, "NEXT");
        expect(nextIndex).toEqual(0);
    });
});
