<template>
    <div class="container p-4 mx-auto lg:p-10">
        <h2 class="my-8 text-2xl font-bold tracking-wider text-center lg:text-6xl">TEAM</h2>
        <div class="grid grid-cols-2 gap-6 lg:gap-24 md:grid-cols-4 lg:grid-cols-5">
            <div v-for="(member, index) in team" :key="index" class="flex flex-col items-center gap-4">
                <img :src="member.image" :alt="member.name" class="object-cover w-full h-auto rounded-lg" />
                <h3 class="text-2xl font-bold lg:text-3xl">{{ member.name }}</h3>
                <P class="">{{ member.title }}</P>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
    team: {
        type: Array,
        required: true,
    },
});
</script>
