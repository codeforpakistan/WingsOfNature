import axios from "axios";
import { ref } from "vue";

export default function useFormSubmission(validateForm, formData) {
    const isProcessing = ref(false);
    const successMessage = ref("");
    const errorMessage = ref("");

    const handleSubmit = async () => {
        if (validateForm(formData)) {
            try {
                isProcessing.value = true;
                const Data = new FormData();
                Data.append("name", formData.name);
                Data.append("email", formData.email);
                Data.append("phone", formData.phone);
                Data.append("category", formData.category);
                Data.append("about", formData.about);
                Data.append("picture", formData.picture);

                const response = await axios.post("/api/post", Data, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                });

                successMessage.value = "Picture uploaded successfully!";
                setTimeout(() => {
                    window.location.reload();
                }, 2000); // 2 seconds
            } catch (error) {
                errorMessage.value = "Error uploading picture: " + error.message;
                setTimeout(() => {
                    window.location.reload();
                }, 2000); // 2 seconds
            } finally {
                isProcessing.value = false;
            }
        } else {
            errorMessage.value = "Please complete the form correctly.";
        }
    };

    return {
        isProcessing,
        successMessage,
        errorMessage,
        handleSubmit,
    };
}
