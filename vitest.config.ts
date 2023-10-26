import Vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import TypeImport from "vite-plugin-vue-type-imports";
import path, { resolve } from "path";

const r = (p: string) => resolve(__dirname, p);

export default {
    plugins: [
        Vue(),
        AutoImport({
            imports: [
                "vue",
                "vue-router",
                // could add 'vue-router' or 'vitest', whatever else you need.
            ],
        }),
        TypeImport(),
    ],
    test: {
        globals: true,
        environment: "happy-dom",
        include: ["./src/**/*.spec.ts"],
        exclude: ["./test/e2e"],
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            "#imports": r("./.nuxt/imports.d.ts"),
        },
    },
};
