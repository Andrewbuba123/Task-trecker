import "./PageForm.css";
import { FormField } from "../FormField/FormField";
import { Button } from "../Button/Button";
import { useState } from "react";
import { PageFormProps, TaskFormData } from "../../types";
import { validateFormType } from "../../validate/validateTaskForm/validateType";
import { validateFormDescription } from "../../validate/validateTaskForm/validateDescription";
import { validateFormCount } from "../../validate/validateTaskForm/validateCount";

const initialFormData: TaskFormData = {
  title: "",
  description: "",
  count: "",
  status: "Active"
};

type FormErrors = Partial<Record<keyof TaskFormData, string>>;

export const PageForm = ({ onAddTask }: PageFormProps) => {
  const [formData, setFormData] = useState<TaskFormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = (): boolean => {
    const titleResult = validateFormType(formData.title);
    const descriptionResult = validateFormDescription(formData.description);
    const countResult = validateFormCount(String(formData.count));

    setErrors({
      title: titleResult.isValid ? undefined : titleResult.message,
      description: descriptionResult.isValid
        ? undefined
        : descriptionResult.message,
      count: countResult.isValid ? undefined : countResult.message,
    });

    return (
      titleResult.isValid && descriptionResult.isValid && countResult.isValid
    );
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    onAddTask(formData);
    setFormData(initialFormData);
    setErrors({});
  };

  return (
    <form className="page-form" onSubmit={handleSubmit}>
      <FormField
        label="Название"
        field="title"
        value={formData.title}
        onChange={handleChange}
        type="text"
        error={errors.title}
      />

      <FormField
        label="Описание"
        field="description"
        value={formData.description}
        onChange={handleChange}
        type="text"
        error={errors.description}
      />

      <FormField
        label="Количество"
        field="count"
        value={formData.count}
        onChange={handleChange}
        type="text"
        error={errors.count}
      />

      <Button text="Отправить" type="submit" />
    </form>
  );
};
