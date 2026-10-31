import "./PageForm.css";
import { FormField } from "../FormField/FormField";
import { Button } from "../Button/Button";
import { PageFormProps } from "../../types";
import { pageFormSchema, PageFormValues } from "./schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const initialFormData: PageFormValues = {
  title: "",
  description: "",
  count: "",
};

export const PageForm = ({ onAddTask }: PageFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PageFormValues>({
    resolver: zodResolver(pageFormSchema),
    defaultValues: initialFormData,
  });

  const onSubmit = (data: PageFormValues) => {
    onAddTask({ ...data, status: "Active" });
    reset();
  };

  return (
    <form className="page-form" onSubmit={handleSubmit(onSubmit)}>
      <FormField
        label="Название"
        type="text"
        {...register("title")}
        error={errors.title?.message}
      />

      <FormField
        label="Описание"
        type="text"
        {...register("description")}
        error={errors.description?.message}
      />

      <FormField
        label="Количество"
        type="text"
        {...register("count")}
        error={errors.count?.message}
      />

      <Button text="Отправить" type="submit" />
    </form>
  );
};
