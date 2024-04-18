<template>
    <!-- <img src="../assets/ilus.jpg" alt="ilustration" /> -->
    <div class="flex flex-wrap justify-center bg-white p-4">
        <img src="../assets/won_i_3.svg" alt="Part 3" class="special-img won_i_3_svg" />
        <img src="../assets/won_i_2.svg" alt="Part 2" class="w-full max-w-xs mx-auto mb-4 md:mr-4" />
        <img src="../assets/won_i_1.svg" alt="Part 1" class="special-img won_i_1_svg" />
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        content: String,
    },
};
</script>
<style scoped>
/* Common styles for won_i_3.svg */
.won_i_3_svg {
    width: 100%;
    max-width: 16rem; /* Adjust max-width as needed */
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 3.5rem;
}
.won_i_1_svg {
    width: 100%;
    max-width: 16rem; /* Adjust max-width as needed */
    margin-left: auto;
    margin-right: auto;
    margin-bottom: -0.8rem;
}

/* Specific style for the special image */
.special-img {
    width: 99%; /* Width is set to 95% */
    height: auto; /* Let the height adjust proportionally */
}
</style>
