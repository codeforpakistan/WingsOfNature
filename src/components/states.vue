<template>
    <section class="py-3 my-10 text-md-center py-md-4 py-lg-5 xl:ml-10 xl:mr-10">
        <div class="container flex flex-col items-center gap-3 mx-auto">
            <p class="text-5xl">Who we are</p>
            <p class="my-3 text-lg text-justify m-md-4 m-lg-5 font-poppins">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et corporis earum distinctio, inventore, sequi,
                iusto nostrum facere illo enim expedita quisquam. Consequatur explicabo sed natus temporibus aspernatur
                alias repellendus repellat? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto libero
                mollitia temporibus dolorum vitae dolorem tenetur in. Harum autem consequatur, eos commodi illo aperiam,
                non temporibus hic distinctio deleniti perferendis?
            </p>
            <div class="flex flex-wrap justify-between w-full gap-4 px-10">
                <div class="flex flex-col items-center w-full mb-2 md:w-1/2 lg:w-1/3 xl:w-1/4">
                    <h5 class="text-6xl">45</h5>
                    <p class="text-center">
                        Contributers<br />
                        lorem
                    </p>
                </div>

                <div class="flex flex-col items-center w-full mb-2 md:w-1/2 lg:w-1/3 xl:w-1/4">
                    <h5 class="text-6xl">31</h5>
                    <p class="text-center">Photographers<br />lorem</p>
                </div>

                <div class="flex flex-col items-center w-full mb-2 md:w-1/2 lg:w-1/3 xl:w-1/4">
                    <h5 class="text-6xl">300</h5>
                    <p class="text-center">Pictures<br />Contributed</p>
                </div>
            </div>

            <p class="text-center"><a class="underline" href="/about">More about us</a></p>
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
