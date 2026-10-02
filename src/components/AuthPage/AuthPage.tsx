import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import "./AuthPage.css";
import { FormField } from "../FormField/FormField";
import { Button } from "../Button/Button";
import { AuthFormData } from "../../types";
import { validateLogin } from "../../validate/validateAuth/validateLogin";
import { validatePassword } from "../../validate/validateAuth/validatePassword";

const initialFormData: AuthFormData = {
  login: "",
  password: "",
};

type FormErrors = Partial<Record<keyof AuthFormData, string>>;

export const AuthPage = () => {
  const { user, login, register } = useAuth();

  const [isRegister, setIsRegister] = useState(true);
  const [formData, setFormData] = useState<AuthFormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [authError, setAuthError] = useState("");

  if (user) {
    return <Navigate to="/" replace />;
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof AuthFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (authError) {
      setAuthError("");
    }
  };

  const validate = (): boolean => {
    const loginResult = validateLogin(formData.login);
    const passwordResult = validatePassword(formData.password);

    setErrors({
      login: loginResult.isValid ? undefined : loginResult.message,
      password: passwordResult.isValid ? undefined : passwordResult.message,
    });

    return loginResult.isValid && passwordResult.isValid;
  };

  const changeMode = () => {
    setIsRegister((prev) => !prev);
    setFormData(initialFormData);
    setErrors({});
    setAuthError("");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setAuthError("");

    if (!validate()) {
      return;
    }

    if (isRegister) {
      const ok = register(formData.login, formData.password);
      if (!ok) {
        setAuthError("Пользователь с таким логином уже существует");
      }
    } else {
      const ok = login(formData.login, formData.password);
      if (!ok) {
        setAuthError("Неверный логин или пароль");
      }
    }
  };

  return (
    <div className="auth-page">
      <form className="page-form auth-form" onSubmit={handleSubmit} noValidate>
        <h2 className="auth-form__title">
          {isRegister ? "Регистрация" : "Вход"}
        </h2>

        {authError && <p className="auth-form__error">{authError}</p>}

        <FormField
          label="Логин"
          field="login"
          value={formData.login}
          onChange={handleChange}
          type="text"
          error={errors.login}
        />

        <FormField
          label="Пароль"
          field="password"
          value={formData.password}
          onChange={handleChange}
          type="password"
          error={errors.password}
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
