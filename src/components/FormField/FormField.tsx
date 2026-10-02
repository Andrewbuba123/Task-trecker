import "./FormField.css";
import { FormFieldProps } from "../../types";

export const FormField = ({
  label,
  field,
  value,
  onChange,
  type,
  error,
}: FormFieldProps) => {
  return (
    <label className="form-field">
      <span className="form-field__label">{label}</span>
      <input name={field} type={type} value={value} onChange={onChange} />
      {error && <span className="form-field__error-text">{error}</span>}
    </label>
  );
};
