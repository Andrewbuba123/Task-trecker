import { formErrors } from "../../utils/dictionary";
import { ValidationResult } from "../../types";

export function validateFormCount(count: string): ValidationResult {
  if (!count || count.trim() === "") {
    return {
      isValid: false,
      message: formErrors.count.required,
    };
  }

  const num = Number(count);

  if (!Number.isInteger(num)) {
    return {
      isValid: false,
      message: formErrors.count.isInteger,
    };
  }

  if (isNaN(num)) {
    return {
      isValid: false,
      message: formErrors.count.inValid,
    };
  }

  if (num <= 0) {
    return {
      isValid: false,
      message: formErrors.count.positive,
    };
  }

  return {
    isValid: true,
    message: "",
  };
}
