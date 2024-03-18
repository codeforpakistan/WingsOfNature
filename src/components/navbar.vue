<template>
    <nav class="bg-gray-900 border-gray-200">
        <div class="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
            <a href="/" class="flex items-center">
                <span class="mr-2 text-4xl font-bold text-blue-500">W</span>
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
                    >Wings of Nature</span
                >
            </a>
            <button
                data-collapse-toggle="navbar-default"
                type="button"
                class="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
                    class="flex flex-col p-4 mt-4 font-medium bg-gray-900 border border-gray-100 rounded-lg md:p-0 bg-dark-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
                >
                    <li>
                        <router-link
                            to="/"
                            class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            :class="{ 'bg-blue-700 text-white': $route.path === '/' }"
                            >Home</router-link
                        >
                    </li>
                    <li>
                        <router-link
                            to="/contribute"
                            class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            :class="{ 'bg-blue-700 text-white': $route.path === '/contribute' }"
                            >Contribute</router-link
                        >
                    </li>
                    <li>
                        <router-link
                            to="/about"
                            class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            :class="{ 'bg-blue-700 text-white': $route.path === '/about' }"
                            >About</router-link
                        >
                    </li>
                </ul>
                <!-- <button @click="toggleDarkMode">
          <SunIcon v-if="!darkMode" class="w-5 h-5" />
          <MoonIcon v-else class="w-5 h-5" />
        </button> -->
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
    data() {
        return {
            darkMode: false,
        };
    },
    methods: {
        toggleDarkMode() {
            this.darkMode = !this.darkMode;
            document.documentElement.setAttribute("data-theme", this.darkMode ? "dark" : "light");
        },
    },
});
</script>
