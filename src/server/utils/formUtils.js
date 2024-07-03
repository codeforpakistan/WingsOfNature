export const extractAndValidateFormData = (body, requiredFields) => {
    const formData = {};
    requiredFields.forEach((field) => {
        const item = body.find((i) => i.name === field);
        if (!item) throw new Error(`Missing form field: ${field}`);
        formData[field] = item;
    });
    return formData;
};
