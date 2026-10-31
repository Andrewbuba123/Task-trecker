import { z } from "zod";
import { formErrors } from "../../utils/dictionary";

const MIN_TITLE_LENGTH = 10;
const MIN_DESCRIPTION_LENGTH = 20;
const VALID_TITLE = /^[а-яА-Яa-zA-Z0-9\s\-.,()]+$/;

export const pageFormSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, formErrors.type.required)
    .min(MIN_TITLE_LENGTH, formErrors.type.minLength)
    .regex(VALID_TITLE, formErrors.type.inValid),

  description: z
    .string()
    .trim()
    .min(1, formErrors.description.required)
    .min(MIN_DESCRIPTION_LENGTH, formErrors.description.minLength),

  count: z
    .string()
    .trim()
    .min(1, formErrors.count.required)
    .regex(/^\d+$/, formErrors.count.isInteger)
    .refine((value) => Number(value) > 0, formErrors.count.positive),
});

export type PageFormValues = z.infer<typeof pageFormSchema>;
