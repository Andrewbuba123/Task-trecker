import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import "./AuthPage.css";
import { FormField } from "../FormField/FormField";
import { Button } from "../Button/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { authSchema, authFormValues } from "./schema";

const initialFormData: authFormValues = {
  login: "",
  password: "",
};

export const AuthPage = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [authError, setAuthError] = useState("");

  const { user, login, register: registerUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<authFormValues>({
    resolver: zodResolver(authSchema),
    defaultValues: initialFormData,
  });

  if (user) {
    return <Navigate to="/" replace />;
  }

  const changeMode = () => {
    setIsRegister((prev) => !prev);
    reset();
    setAuthError("");
  };

  const onSubmit = (data: authFormValues) => {
    setAuthError("");

    if (isRegister) {
      const ok = registerUser(data.login, data.password);
      if (!ok) {
        setAuthError("Пользователь с таким логином уже существует");
      }
    } else {
      const ok = login(data.login, data.password);
      if (!ok) {
        setAuthError("Неверный логин или пароль");
      }
    }

    reset();
  };

  return (
    <div className="auth-page">
      <form
        className="page-form auth-form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <h2 className="auth-form__title">
          {isRegister ? "Регистрация" : "Вход"}
        </h2>

        {authError && <p className="auth-form__error">{authError}</p>}

        <FormField
          label="Логин"
          type="text"
          {...register("login")}
          error={errors.login?.message}
        />

        <FormField
          label="Пароль"
          type="password"
          {...register("password")}
          error={errors.password?.message}
        />

        <Button
          text={isRegister ? "Зарегистрироваться" : "Войти"}
          type="submit"
        />

        <p className="auth-form__switch">
          {isRegister ? "Уже есть аккаунт? " : "Еще нет аккаунта? "}
          <button
            type="button"
            className="auth-form__switch-btn"
            onClick={changeMode}
          >
            {isRegister ? "Войти" : "Зарегистрироваться"}
          </button>
        </p>
      </form>
    </div>
  );
};
