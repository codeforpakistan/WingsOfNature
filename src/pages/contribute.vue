<template>
    <div class="max-w-md p-5 mx-auto mt-10 mb-10 bg-white rounded-md shadow-sm">
        <form @submit.prevent="handleSubmit">
            <div class="mb-4">
                <label class="block mb-2 text-sm font-bold text-gray-700" for="name"> Name </label>
                <input
                    id="name"
                    v-model="formData.name"
                    class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Your name"
                />
            </div>
            <div class="mb-4">
                <label class="block mb-2 text-sm font-bold text-gray-700" for="email"> Email </label>
                <input
                    id="email"
                    v-model="formData.email"
                    class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Your email"
                />
            </div>
            <div class="mb-4">
                <label class="block mb-2 text-sm font-bold text-gray-700" for="about"> About the Picture </label>
                <textarea
                    id="about"
                    v-model="formData.about"
                    class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    placeholder="Tell us about the picture"
                ></textarea>
            </div>
            <div class="mb-4">
                <label class="block mb-2 text-sm font-bold text-gray-700" for="file"> Upload Picture </label>
                <input
                    id="file"
                    class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    type="file"
                    @change="handleFileChange"
                />
            </div>
            <div class="flex items-center justify-between">
                <button
                    class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Submit
                </button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            formData: {
                name: "",
                email: "",
                about: "",
                picture: null, // To store the file object
            },
        };
    },
    methods: {
        handleFileUpload(event) {
            const file = event.target.files[0];
            this.formData.picture = file;
        },
        async handleSubmit() {
            try {
                const formData = new FormData();
                formData.append("name", this.formData.name);
                formData.append("email", this.formData.email);
                formData.append("about", this.formData.about);
                formData.append("picture", this.formData.picture);

                // Send formData to server
                const response = await fetch("/api/post", {
                    method: "POST",
                    body: formData,
                });

                if (response.ok) {
                    console.log("Picture uploaded successfully");
                    // Reset form after successful upload
                    this.formData.name = "";
                    this.formData.email = "";
                    this.formData.about = "";
                    this.formData.picture = null;
                } else {
                    console.error("Failed to upload picture");
                }
            } catch (error) {
                console.error("Error uploading picture:", error);
            }
        },
    },
};
</script>
