import { Task, User } from "../types";

export const DEMO_USERS: User[] = [
  { id: "demo-user-1", login: "demo1", password: "demo123" },
  { id: "demo-user-2", login: "demo2", password: "demo123" },
];

export const DEMO_TASKS: Task[] = [
  {
    id: "demo-task-1",
    title: "Подготовить макет главной страницы",
    description: "Нарисовать макет главной страницы для десктопа и телефона",
    count: 2,
    status: "Active",
    authorId: "demo-user-1",
    assigneeId: null,
  },
  {
    id: "demo-task-2",
    title: "Написать документацию API",
    description: "Описать все маршруты сервера с примерами запросов и ответов",
    count: 1,
    status: "Active",
    authorId: "demo-user-1",
    assigneeId: null,
  },
  {
    id: "demo-task-3",
    title: "Настроить автоматическую сборку",
    description:
      "Подключить CI, чтобы линтер и сборка запускались на каждый пуш",
    count: 3,
    status: "Active",
    authorId: "demo-user-2",
    assigneeId: null,
  },
  {
    id: "demo-task-4",
    title: "Проверить доступность форм",
    description: "Пройти все формы с клавиатуры и исправить найденные проблемы",
    count: 1,
    status: "Active",
    authorId: "demo-user-2",
    assigneeId: null,
  },
  {
    id: "demo-task-5",
    title: "Добавить тёмную тему",
    description: "Сделать переключатель темы и сохранять выбор пользователя",
    count: 2,
    status: "Inprogress",
    authorId: "demo-user-2",
    assigneeId: "demo-user-1",
  },
  {
    id: "demo-task-6",
    title: "Оптимизировать загрузку картинок",
    description: "Сжать изображения и подключить ленивую загрузку на страницах",
    count: 1,
    status: "Inprogress",
    authorId: "demo-user-1",
    assigneeId: "demo-user-2",
  },
  {
    id: "demo-task-7",
    title: "Исправить ошибки в форме входа",
    description: "Показывать понятные сообщения при неверном логине или пароле",
    count: 1,
    status: "Completed",
    authorId: "demo-user-2",
    assigneeId: "demo-user-1",
  },
  {
    id: "demo-task-8",
    title: "Обновить зависимости проекта",
    description:
      "Обновить пакеты до свежих версий и проверить, что всё собирается",
    count: 2,
    status: "Completed",
    authorId: "demo-user-1",
    assigneeId: "demo-user-2",
  },
];
