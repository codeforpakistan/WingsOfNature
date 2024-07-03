<template>
    <Head>
        <Title>Wings of Nature</Title>
        <Link rel="icon" href="/icon.png" type="image/png" />
        <Meta name="description" content="Where nature meets art" />
    </Head>
    <NuxtLayout>
        <Navbar v-if="!isModalOpen" />
        <NuxtPage />
        <Footer v-if="!isModalOpen" />
    </NuxtLayout>
</template>

<script setup>
const { isModalOpen } = useModalVisibility();
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
