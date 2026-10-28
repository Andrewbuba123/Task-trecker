import { formErrors } from "../../utils/dictionary";
import { ValidationResult } from "../../types";

const MIN_DESCRIPTION_LENGTH = 20;

export const validateFormDescription = (
  description: string,
): ValidationResult => {
  const trimmedDescription = description.trim();

  if (!trimmedDescription) {
    return { isValid: false, message: formErrors.description.required };
  }

  if (trimmedDescription.length < MIN_DESCRIPTION_LENGTH) {
    return { isValid: false, message: formErrors.description.minLength };
  }

  return { isValid: true };
};
