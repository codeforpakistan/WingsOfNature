<template>
    <section class="py-3 my-10 text-md-center py-md-4 py-lg-5 xl:ml-10 xl:mr-10">
        <div class="container flex flex-col items-center gap-3 mx-auto">
            <p class="text-5xl font-bold text-navd">Who we are</p>
            <p class="my-3 text-lg m-md-4 m-lg-5">
                Wings of Nature is collaborative project between Precision Medicine Lab and Code For Pakistan where we
                focus on little flying machines that exists in our nature such as bees, beetles and butterflies which
                are ignored, harmed and about to go extinct because of humans. These are the wings which directly and
                indirectly effects our ecosystems, food and our lives. Let's spread the words and protect them.
            </p>
            <div class="flex flex-wrap justify-between w-full gap-4 px-10">
                <div class="flex flex-col items-center w-full mb-2 md:w-1/2 lg:w-1/3 xl:w-1/4">
                    <h5 class="text-6xl text-navd">15</h5>
                    <p class="text-xl font-bold text-center text-navd">Contributers</p>
                </div>

                <div class="flex flex-col items-center w-full mb-2 md:w-1/2 lg:w-1/3 xl:w-1/4">
                    <h5 class="text-6xl text-navd">10</h5>
                    <p class="text-xl font-bold text-center text-navd">Team Members</p>
                </div>

                <div class="flex flex-col items-center w-full mb-2 md:w-1/2 lg:w-1/3 xl:w-1/4">
                    <h5 class="text-6xl text-navd">200</h5>
                    <p class="text-xl font-bold text-center text-navd">Pictures</p>
                </div>
            </div>

            <p class="mt-8 text-center text-navl"><a class="underline" href="/about">More about us</a></p>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        title: String,
        content: String,
    },
};
</script>
