import { formErrors } from "../../utils/dictionary";
import { ValidationResult } from "../../types";

export function validateFormType(type: string): ValidationResult {
  if (!type || type.trim() === "") {
    return {
      isValid: false,
      message: formErrors.type.required,
    };
  }

  if (type.length < 10) {
    return {
      isValid: false,
      message: formErrors.type.minLength,
    };
  }

  const invalidChars = /[^а-яА-Яa-zA-Z0-9\s\-.,()]/;

  if (invalidChars.test(type)) {
    return {
      isValid: false,
      message: formErrors.type.inValid,
    };
  }

  return {
    isValid: true,
    message: "",
  };
}
