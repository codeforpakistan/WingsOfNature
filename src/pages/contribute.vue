<template>
    <div>
        <Hero image="/treecricket.jpg" />
        <ContributeProcess :data="imageProcs" />
        <div class="flex items-center justify-center min-h-screen">
            <div
                class="p-5 mx-auto mt-10 mb-10 bg-white rounded-md shadow-sm max-w-7xl lg:w-4/6 lg:flex lg:space-x-10 lg:items-stretch"
            >
                <div class="flex flex-col justify-between lg:w-1/2">
                    <div>
                        <div v-if="isProcessing" class="mb-4 text-center text-blue-500">Uploading picture...</div>
                        <div v-if="successMessage" class="mb-4 text-center text-green-500">
                            {{ successMessage }}
                        </div>
                        <div v-if="errorMessage" class="mb-4 text-center text-red-500">
                            {{ errorMessage }}
                        </div>
                        <form @submit.prevent="handleSubmit">
                            <div class="mb-4 lg:mb-10">
                                <label class="block mb-3 text-xl font-bold text-gray-700" for="name"> Name </label>
                                <input
                                    id="name"
                                    v-model="formData.name"
                                    class="w-full px-3 py-2 leading-tight text-gray-700 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                                    type="text"
                                    placeholder="Your name"
                                />
                                <p v-if="!validation.name" class="text-xs italic text-red-500">
                                    Please enter your name.
                                </p>
                            </div>
                            <div class="mb-4 lg:mb-10">
                                <label class="block mb-2 text-xl font-bold text-gray-700" for="email"> Email </label>
                                <input
                                    id="email"
                                    v-model="formData.email"
                                    class="w-full px-3 py-2 leading-tight text-gray-700 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                                    type="email"
                                    placeholder="Your email"
                                />
                                <p v-if="!validation.email" class="text-xs italic text-red-500">
                                    Please enter a valid email.
                                </p>
                            </div>
                            <div class="mb-4 lg:mb-10">
                                <label class="block mb-2 text-xl font-bold text-gray-700" for="phone">
                                    Phone Number
                                </label>
                                <input
                                    id="phone"
                                    v-model="formData.phone"
                                    class="w-full px-3 py-2 leading-tight text-gray-700 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                                    type="text"
                                    placeholder="Your phone number"
                                />
                                <p v-if="!validation.phone" class="text-xs italic text-red-500">
                                    Please enter a valid phone number.
                                </p>
                            </div>
                            <div class="mb-4 lg:mb-10">
                                <label class="block mb-2 text-xl font-bold text-gray-700" for="category">
                                    Category
                                </label>
                                <select
                                    id="category"
                                    v-model="formData.category"
                                    class="w-full px-3 py-2 leading-tight text-gray-700 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                                >
                                    <option value="">Select a category</option>
                                    <option value="bees">Bees</option>
                                    <option value="beetles">Beetles</option>
                                    <option value="butterflies">Butterflies</option>
                                </select>
                                <p v-if="!validation.category" class="text-xs italic text-red-500">
                                    Please select a category.
                                </p>
                            </div>
                            <div class="">
                                <label class="block mb-2 text-xl font-bold text-gray-700" for="about">
                                    About the Picture
                                </label>
                                <textarea
                                    id="about"
                                    v-model="formData.about"
                                    class="w-full px-3 py-2 leading-tight text-gray-700 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                                    placeholder="Tell us about the picture"
                                    maxlength="300"
                                ></textarea>
                                <p v-if="!validation.about" class="text-xs italic text-red-500">
                                    Please describe the picture (max 300 characters).
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="flex flex-col justify-between lg:w-1/2">
                    <div>
                        <div class="mb-4 lg:mb-10">
                            <label class="block mb-2 text-xl font-bold text-gray-700" for="file">
                                Upload Picture
                            </label>
                            <input
                                id="file"
                                class="w-full px-3 py-2 leading-tight text-gray-700 focus:outline-none focus:border-blue-500"
                                type="file"
                                @change="handleFileUpload"
                            />
                            <p v-if="!validation.picture" class="text-xs italic text-red-500">
                                Please upload a picture.
                            </p>
                        </div>
                        <div v-if="formData.picturePreview" class="mt-4 lg:mt-10">
                            <img
                                :src="formData.picturePreview"
                                alt="Selected picture"
                                class="w-full max-h-[35vh] object-contain rounded-md shadow-sm"
                            />
                        </div>
                    </div>
                    <div class="mt-4 lg:mt-10">
                        <button
                            class="w-full px-4 py-2 text-2xl font-bold text-white rounded bg-navd hover:bg-mgreen focus:outline-none focus:shadow-outline"
                            type="button"
                            @click="handleSubmit"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, reactive } from "vue";
import useFormSubmission from "~/composables/formSubmission";
import useFormValidation from "~/composables/formValidation";
import useStaticData from "~/composables/staticData";

export default {
    setup() {
        const { imageProcs } = useStaticData();
        const formData = reactive({
            name: "",
            email: "",
            phone: "",
            category: "",
            about: "",
            picture: null,
            picturePreview: "/upload.png", // Set initial preview to the placeholder image
        });

        const { validation, validateForm } = useFormValidation();
        const { isProcessing, successMessage, errorMessage, handleSubmit } = useFormSubmission(validateForm, formData);

        const handleFileUpload = (event) => {
            const file = event.target.files[0];
            formData.picture = file;
            formData.picturePreview = URL.createObjectURL(file);
        };

        return {
            formData,
            validation,
            isProcessing,
            successMessage,
            errorMessage,
            imageProcs,
            handleFileUpload,
            handleSubmit,
        };
    },
};
</script>
