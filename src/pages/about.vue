<template>
    <div class="flex flex-col items-center justify-center gap-4 p-8 mx-auto max-w-mw">
        <!-- <div class="grid w-full h-full grid-cols-3 gap-4 p-8 mx-auto max-w-mw"> -->
        <h1 class="col-span-3 mb-6 text-4xl font-bold text-navd">Team</h1>
        <main class="flex flex-wrap justify-between w-full gap-4 px-10">
            <div class="mx-auto max-w-mw">
                <div class="justify-between sm:columns-2 md:columns-3 lg:columns-7 2xl:columns-8">
                    <div>
                        <router-link
                            v-for="image in images"
                            :key="image.idx"
                            to="/profile"
                            class="relative block w-full mb-5 after:content group cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
                        >
                            <NuxtPicture
                                :quality="55"
                                :src="getImageSrc(image)"
                                :img-attrs="{
                                    class: 'max-h-[10rem] max-w-[10rem] w-40 h-40 sm:w-25 sm:h-25 aspect-w-1 aspect-h-1 object-cover rounded', // Added 'rounded-full' class and fixed width and height
                                }"
                                :alt="image.alt"
                                :preload="true"
                            />
                        </router-link>
                    </div>
                </div>
            </div>
        </main>
        <hr class="xl:ml-10 xl:mr-10 my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
        <h1 class="col-span-3 mb-4 text-4xl font-bold text-navd">Contributers / Artists</h1>
        <main class="flex flex-wrap justify-between w-full gap-4 px-10">
            <div class="mx-auto max-w-mw">
                <div class="justify-between sm:columns-2 md:columns-3 lg:columns-7 2xl:columns-8">
                    <div>
                        <router-link
                            v-for="image in images"
                            :key="image.idx"
                            to="/profile"
                            class="relative block w-full mb-5 after:content group cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
                        >
                            <NuxtPicture
                                :quality="55"
                                :src="getImageSrc(image)"
                                :img-attrs="{
                                    class: 'max-h-[10rem] max-w-[10rem] w-40 h-40 sm:w-25 sm:h-25 aspect-w-1 aspect-h-1 object-cover rounded', // Added 'rounded-full' class and fixed width and height
                                }"
                                :alt="image.alt"
                                :preload="true"
                            />
                        </router-link>
                    </div>
                </div>
            </div>
        </main>

        <!-- <img class="object-cover w-full h-64 col-span-3 mb-8" src="https://via.placeholder.com/800" alt="About image" />
        <p class="col-span-3 mb-4 text-lg">
            Wings of Nature is a collaborative project between Precision Medicine Lab and Code For Pakistan where we
            focus on little flying machines that exist in our nature such as bees, beetles and butterflies which are
            ignored, harmed and about to go extinct because of humans. These are the wings which directly and indirectly
            affect our ecosystems, food and our lives.
        </p>
        <img class="object-cover w-full h-64 mb-8" src="https://via.placeholder.com/800" alt="Placeholder image" />
        <img class="object-cover w-full h-64 mb-8" src="https://via.placeholder.com/800" alt="Placeholder image" />
        <img class="object-cover w-full h-64 mb-8" src="https://via.placeholder.com/800" alt="Placeholder image" />
        <p class="col-span-3 text-lg">Let's spread the words and protect them.</p> -->
    </div>
</template>

<script>
import { getImageSrc } from "@/composables/utils";
import useImages from "@/composables/useImages";

export default {
    name: "About",
    path: "/about",
    data() {
        return {
            images: useImages(),
        };
    },
    methods: {
        getImageSrc,
    },
};
</script>
