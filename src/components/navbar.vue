<template>
    <nav class="border-gray-200 bg-navd">
        <div class="flex flex-wrap items-center justify-between max-w-screen-xl p-2 mx-auto">
            <a href="/" class="flex items-center">
                <img src="../assets/logo.png" width="180" height="60" />
            </a>
            <button
                data-collapse-toggle="navbar-default"
                type="button"
                class="inline-flex items-center justify-center w-10 h-10 p-2 mr-4 text-sm text-gray-500 bg-gray-100 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200"
                aria-controls="navbar-default"
                aria-expanded="false"
                @click="toggleMenu"
            >
                <span class="sr-only">Open main menu</span>
                <svg
                    class="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 14"
                >
                    <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 1h15M1 7h15M1 13h15"
                    />
                </svg>
            </button>
            <div
                id="navbar-default"
                :class="{ hidden: !menuOpen, block: menuOpen, 'w-full': true, 'md:block': true, 'md:w-auto': true }"
            >
                <ul
                    class="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg lg:space-x-24 md:space-x-16 bg-nav md:p-0 md:flex-row md:mt-0 md:border-0"
                >
                    <li>
                        <router-link
                            to="/"
                            class="block py-2 pl-3 pr-4 text-2xl text-white rounded lg:text-5xl md:border-0 md:p-0"
                            :class="{ '': $route.path === '/' }"
                            ><h1>Home</h1></router-link
                        >
                    </li>
                    <li>
                        <router-link
                            to="/contribute"
                            class="block py-2 pl-3 pr-4 text-2xl text-white rounded lg:text-5xl md:border-0 md:p-0"
                            :class="{ '': $route.path === '/contribute' }"
                            ><h1>Contribute</h1></router-link
                        >
                    </li>
                    <li>
                        <router-link
                            to="/about"
                            class="block py-2 pl-3 pr-4 text-2xl text-white rounded lg:text-5xl md:border-0 md:p-0"
                            :class="{ '': $route.path === '/about' }"
                            ><h1>About</h1></router-link
                        >
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
    name: "Navbar",
    setup() {
        const menuOpen = ref(false);
        const toggleMenu = () => {
            menuOpen.value = !menuOpen.value;
        };
        return { menuOpen, toggleMenu };
    },
});
</script>
