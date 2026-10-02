import { ValidationResult } from "../../types";
import { authErrors } from "../../utils/dictionary";

export const validatePassword = (value: string): ValidationResult => {
  if (!value.trim()) {
    return { isValid: false, message: authErrors.password.required };
  }

  if (value.length < 3) {
    return { isValid: false, message: authErrors.password.required };
  }

  return { isValid: true };
};
