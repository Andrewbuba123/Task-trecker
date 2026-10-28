import { ValidationResult } from "../../types";
import { authErrors } from "../../utils/dictionary";

const MIN_PASSWORD_LENGTH = 3;

export const validatePassword = (value: string): ValidationResult => {
  if (!value.trim()) {
    return { isValid: false, message: authErrors.password.required };
  }

  if (value.length < MIN_PASSWORD_LENGTH) {
    return { isValid: false, message: authErrors.password.minLength };
  }

  return { isValid: true };
};
