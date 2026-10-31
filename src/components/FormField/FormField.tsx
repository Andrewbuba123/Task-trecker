import { forwardRef } from "react";
import "./FormField.css";
import { FormFieldProps } from "../../types";

export const FormField = forwardRef<HTMLInputElement, FormFieldProps>(
  ({ label, error, ...inputProps }, ref) => {
    return (
      <label className="form-field">
        <span className="form-field__label">{label}</span>
        <input ref={ref} {...inputProps} />
        {error && <span className="form-field__error-text">{error}</span>}
      </label>
    );
  },
);

FormField.displayName = "FormField";
