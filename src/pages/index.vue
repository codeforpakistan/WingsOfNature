<template>
    <main class="flex flex-col items-center w-full min-h-screen antialiased select-none transform-gpu">
        <div class="w-full h-full mx-auto max-w-mw">
            <Hero image="/e_wasp.png" />
            <Cards />
            <States />
            <CritterProcs :data="critterProcs" />
            <CritterProcs :data="imageProcs" />
        </div>
    </main>
</template>

<script setup lang="ts">
import getData from "@/composables/getData";
import useStaticData from "@/composables/staticData";
const { critterProcs, imageProcs } = useStaticData();
// const data = await getData();
</script>
