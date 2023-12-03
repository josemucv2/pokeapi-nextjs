
/**
 * Regular expression pattern for validating email addresses.
 */
export const PATTERNS_EMAIL = "^([a-zA-Z0-9]+[._%+-]?)+[a-zA-Z0-9]+[@]([a-zA-Z]+[.-])+[a-zA-Z]{1,3}";
/**
 * Validates if a value is required.
 * @param {string | boolean} value - The value to be validated.
 * @returns {string} - The error message if the value is empty, otherwise an empty string.
 */
export const validateRequired = (value: string | boolean): string => {
    const empty = value === undefined || value === null || value === "" || value === false;
    if (empty) return "Campo Requerido";
    return "";
};

/**
 * Validates if an email is valid.
 * @param {string} value - The email to be validated.
 * @returns {string} - The error message if the email is invalid or empty, otherwise an empty string.
 */
export const validateEmail = (value: string): string => {
    if (validateRequired(value)) return validateRequired(value)

    if (!new RegExp(PATTERNS_EMAIL).test(value)) return "Email Invalido";
    return "";
};
