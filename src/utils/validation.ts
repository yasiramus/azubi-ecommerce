export type FormData = Record<string, string>;

export type FormErrors = Record<string, string>;

/**
 * Validate a single field
*/
export const validateField = (name: string, value: string): string => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!value.trim()) return "This field is required";

    if (name === "email" && !emailRegex.test(value)) {
        return "Wrong format";
    }

    if (name === "zip" && !/^\d{5}$/.test(value)) {
        return "ZIP code must be 5 digits";
    }

    return "";
};

/**
 * Validate all fields in form
 */
export const validateAllFields = (data: FormData, paymentMethod: "e-Money" | "Cash on Delivery"
): FormErrors => {
    const errors: FormErrors = {};

    for (const [name, value] of Object.entries(data)) {
        //validate e-Money fields if that method is selected
        if (
            paymentMethod === "Cash on Delivery" &&
            (name === "emoneyNumber" || name === "emoneyPin")
        ) {
            continue;
        }

        const error = validateField(name, value);
        if (error) {
            errors[name] = error;
        }
    }

    return errors;
};

/**is form complete */
export const isFormComplete = (formData: FormData, selected: "e-Money" | "Cash on Delivery") => {
    for (const [key, value] of Object.entries(formData)) {
        const required =
            selected === "e-Money" || (key !== "emoneyNumber" && key !== "emoneyPin");

        if (required && !value.trim()) return false;
    }
    return true;
};
