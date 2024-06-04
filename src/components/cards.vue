<template>
    <div class="px-8 py-12 md:px-28 bg-navd">
        <p class="block py-2 pl-3 pr-4 mb-8 text-2xl font-bold text-center text-white lg:text-5xl md:border-0 md:p-0">
            CATEGORIES
        </p>
        <div class="grid grid-cols-1 gap-28 sm:grid-cols-2 md:grid-cols-3">
            <RouterLink
                v-for="card in cards"
                :key="card.title"
                class="flex justify-center"
                :to="{ name: 'grid', query: { id: card?.title } }"
            >
                <div
                    class="relative flex flex-col h-[55vh] lg:h-[65vh] w-full overflow-hidden transition duration-100 transform bg-white rounded-lg shadow-lg hover:scale-105 dark:bg-neutral-800"
                >
                    <img class="absolute inset-0 object-cover w-full h-full" :src="`${card.image}`" :alt="card.title" />

                    <div
                        class="relative z-10 flex flex-col justify-end h-full p-6 bg-gradient-to-t from-black to-transparent"
                    >
                        <h5 class="mb-2 text-xl font-bold leading-tight text-white">
                            {{ card.title }}
                        </h5>
                        <p class="text-base text-neutral-200">
                            {{ card.desc }}
                        </p>
                    </div>
                </div>
            </RouterLink>
        </div>
    </div>
</template>

<script setup>
import useStaticData from "@/composables/staticData";
const { cards } = useStaticData();
</script>
