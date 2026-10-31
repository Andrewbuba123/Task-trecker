import { z } from "zod";
import { authErrors } from "../../utils/dictionary";

const MIN_PASSWORD_LENGTH = 3;
const MIN_LOGIN_LENGTH = 3;

export const authSchema = z.object({
  login: z
    .string()
    .trim()
    .min(1, { message: authErrors.login.required })
    .min(MIN_LOGIN_LENGTH, { message: authErrors.login.minLength }),

  password: z
    .string()
    .trim()
    .min(1, { message: authErrors.password.required })
    .min(MIN_PASSWORD_LENGTH, { message: authErrors.password.minLength }),
});

export type authFormValues = z.infer<typeof authSchema>;
