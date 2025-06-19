export type FormData = Record<string, string>;

export type FormErrors = Record<string, string>;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Validate a single field
 */
export const validateField = (name: string, value: string): string => {
    if (!value.trim()) return "This field is required";

    if (name === "email" && !emailRegex.test(value)) {
        return "Wrong format";
    }

    return "";
};

/**
 * Validate all fields in form
 */
export const validateAllFields = (data: FormData): FormErrors => {
    const errors: FormErrors = {};

    for (const [name, value] of Object.entries(data)) {
        const error = validateField(name, value);
        if (error) {
            errors[name] = error;
        }
    }

    return errors;
};
