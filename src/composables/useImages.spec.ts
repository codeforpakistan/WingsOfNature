import { describe, it, expect } from "vitest";
import useImages from "./useImages";

describe("useImages", () => {
    it("should match images snapshot", () => {
        const images = useImages();
        //width/height is undefined as it is not available in the test environment (rollup does not process the images).
        expect(images).toMatchInlineSnapshot(`
          [
            {
              "alt": "Atacama Desert Chile",
              "filename": "Atacama-Desert-Chile.jpg",
              "height": undefined,
              "idx": 0,
              "src": "/images/Atacama-Desert-Chile.jpg",
              "width": undefined,
            },
            {
              "alt": "Hallstatter See Austria",
              "filename": "Hallstatter-See-Austria.jpg",
              "height": undefined,
              "idx": 1,
              "src": "/images/Hallstatter-See-Austria.jpg",
              "width": undefined,
            },
            {
              "alt": "Night sky Italy",
              "filename": "Night-sky-Italy.jpg",
              "height": undefined,
              "idx": 2,
              "src": "/images/Night-sky-Italy.jpg",
              "width": undefined,
            },
            {
              "alt": "Wadi Rum Village Jordan Sunset",
              "filename": "Wadi-Rum-Village-Jordan-Sunset.jpg",
              "height": undefined,
              "idx": 3,
              "src": "/images/Wadi-Rum-Village-Jordan-Sunset.jpg",
              "width": undefined,
            },
            {
              "alt": "a red panda",
              "filename": "a-red-panda.jpg",
              "height": undefined,
              "idx": 4,
              "src": "/images/a-red-panda.jpg",
              "width": undefined,
            },
            {
              "alt": "coon",
              "filename": "coon.jpg",
              "height": undefined,
              "idx": 5,
              "src": "/images/coon.jpg",
              "width": undefined,
            },
            {
              "alt": "ebeltoft denmark",
              "filename": "ebeltoft-denmark.jpg",
              "height": undefined,
              "idx": 6,
              "src": "/images/ebeltoft-denmark.jpg",
              "width": undefined,
            },
            {
              "alt": "iceland aurora borealis",
              "filename": "iceland-aurora-borealis.jpg",
              "height": undefined,
              "idx": 7,
              "src": "/images/iceland-aurora-borealis.jpg",
              "width": undefined,
            },
            {
              "alt": "kitteh",
              "filename": "kitteh.jpg",
              "height": undefined,
              "idx": 8,
              "src": "/images/kitteh.jpg",
              "width": undefined,
            },
            {
              "alt": "llama",
              "filename": "llama.jpg",
              "height": undefined,
              "idx": 9,
              "src": "/images/llama.jpg",
              "width": undefined,
            },
            {
              "alt": "victoria peak",
              "filename": "victoria-peak.jpg",
              "height": undefined,
              "idx": 10,
              "src": "/images/victoria-peak.jpg",
              "width": undefined,
            },
          ]
        `);
    });
});
