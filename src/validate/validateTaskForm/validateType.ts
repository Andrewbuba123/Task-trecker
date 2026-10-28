import { formErrors } from "../../utils/dictionary";
import { ValidationResult } from "../../types";

const MIN_TYPE_LENGTH = 10;
const INVALID_CHARS = /[^а-яА-Яa-zA-Z0-9\s\-.,()]/;

export const validateFormType = (type: string): ValidationResult => {
  const trimmedType = type.trim();

  if (!trimmedType) {
    return { isValid: false, message: formErrors.type.required };
  }

  if (trimmedType.length < MIN_TYPE_LENGTH) {
    return { isValid: false, message: formErrors.type.minLength };
  }

  if (INVALID_CHARS.test(type)) {
    return { isValid: false, message: formErrors.type.inValid };
  }

  return { isValid: true };
};
