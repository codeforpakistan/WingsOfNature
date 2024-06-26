import { reactive } from "vue";

export default function useFormValidation() {
    const validation = reactive({
        name: true,
        email: true,
        phone: true,
        category: true,
        about: true,
        picture: true,
    });

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const validatePhone = (phone) => {
        const re = /^(0\d{10,14}|\+?[1-9]\d{1,14})$/;
        return re.test(phone);
    };

    const validateForm = (formData) => {
        validation.name = !!formData.name;
        validation.email = validateEmail(formData.email);
        validation.phone = validatePhone(formData.phone);
        validation.category = !!formData.category;
        validation.about = formData.about.length > 0 && formData.about.length < 300;
        validation.picture = !!formData.picture;

        return Object.values(validation).every(Boolean);
    };

    return {
        validation,
        validateForm,
    };
}
