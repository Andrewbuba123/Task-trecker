import { formErrors } from "../../utils/dictionary";
import { ValidationResult } from "../../types"; 

export function validateFormDescription(description: string): ValidationResult {
  const trimmedDescription = description?.trim() || "";
  
  if (!description || description.trim() === "") {
    return {
      isValid: false,
      message: formErrors.description.required,
    };
  }

  if (trimmedDescription.length < 20) {
    return {
      isValid: false,
      message: formErrors.description.minLength,
    };
  }

  return {
    isValid: true,
    message: "",
  };
}