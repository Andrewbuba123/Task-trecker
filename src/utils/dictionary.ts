export const formErrors = {
  type: {
    required: "Введите название выполняемой работы",
    inValid: "В названии присутствуют недопустимые символы",
    minLength: "Минимальный объем названия работы: 10",
  },
  description: {
    required: "Введите описание работы",
    minLength: "Минимальный объем описания работы: 20",
  },
  count: {
    required: "Требуется ввести количество нужных работников",
    positive: "Число должно быть положительным",
    isInteger: "Число должно быть целым",
  },
};

export const authErrors = {
  login: {
    required: "Введите логин",
    minLength: "Логин минимум 3 символа",
  },
  password: {
    required: "Введите пароль",
    minLength: "Пароль минимум 3 символа",
  },
};
