import { ValidationResult } from "../../types";
import { authErrors } from "../../utils/dictionary";

export const validateLogin = (value: string): ValidationResult => {
  const trimmed = value.trim();

  if (!trimmed) {
    return { isValid: false, message: authErrors.login.required };
  }

  if (trimmed.length < 3) {
    return { isValid: false, message: authErrors.login.minLength };
  }

  return { isValid: true };
};