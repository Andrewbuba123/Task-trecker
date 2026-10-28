import { formErrors } from "../../utils/dictionary";
import { ValidationResult } from "../../types";

export const validateFormCount = (count: string): ValidationResult => {
  const trimmed = count.trim();

  if (!trimmed) {
    return { isValid: false, message: formErrors.count.required };
  }

  if (!/^\d+$/.test(trimmed)) {
    return { isValid: false, message: formErrors.count.isInteger };
  }

  if (Number(trimmed) <= 0) {
    return { isValid: false, message: formErrors.count.positive };
  }

  return { isValid: true };
};
