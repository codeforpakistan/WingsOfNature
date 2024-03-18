<template>
    <Head>
        <Title>Wings of Nature</Title>
        <Link rel="icon" href="/icon.png" type="image/png" />
        <Meta name="description" content="Where nature meets art" />
    </Head>
    <NuxtLayout>
        <Navbar />
        <NuxtPage />
        <footer class="py-3 mt-auto text-center text-white bg-gray-800">
            <p class="text-white-500">
                Wings of Nature is a biodiversity collaboration project between
                <a class="text-yellow-400 no-underline hover:text-green-400" href="https://www.precisionmedicine.pk/"
                    >Precision Medicine Lab</a
                >
                and
                <a class="text-yellow-400 no-underline hover:text-green-400" href="https://codeforpakistan.org"
                    >Code for Pakistan</a
                >
                ❤️
            </p>
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
