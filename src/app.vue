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
