<template>
    <Head>
        <Title>Wings of Nature</Title>
        <Link rel="icon" href="/icon.png" type="image/png" />
        <Meta name="description" content="An image gallery built with Nuxt 3" />
    </Head>
    <NuxtLayout>
        <Navbar />
        <NuxtPage />
        <footer class="text-center py-3 bg-gray-800 text-white mt-auto">
            <p class="text-white-500">Wings of Nature is a biodiversity collaboration project between <a class="no-underline text-yellow-400 hover:text-green-400" href="https://www.precisionmedicine.pk/">Precision Medicine Lab</a> and <a class="no-underline text-yellow-400 hover:text-green-400" href="https://codeforpakistan.org">Code for Pakistan</a> ❤️</p>
        </footer>
    </NuxtLayout>
</template>

<script setup>
useHead({
    htmlAttrs: {
        lang: "en",
    },
});
</script>

<style>
.layout-enter-active,
.layout-leave-active {
    transition: all 350ms;
}
.layout-enter-from,
.layout-leave-to {
    filter: grayscale(0.5);
    opacity: 0;
    filter: blur(1rem);
}
</style>
