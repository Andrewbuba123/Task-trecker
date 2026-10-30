import type React from "react";
type TaskStatus = "Active" | "Completed" | "InProgress";

export interface Task {
  id: string;
  title: string;
  description: string;
  count: number | string;
  status: TaskStatus;
  authorId: string | null;
  assigneeId: string | null;
}

export interface TaskFormData {
  title: string;
  description: string;
  count: number | string;
  status: TaskStatus;
}

export interface AddTaskPayload {
  taskData: TaskFormData;
  userId: string | null;
}

export interface TaskActionPayload {
  id: string;
  userId: string | null;
}

export interface FormFieldProps {
  label: string;
  field: string;
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  error?: string;
}

export interface TaskProps {
  id: string;
  title: string;
  description: string;
  count: number | string;
  onDelete: (id: string) => void;
  onTake?: (id: string) => void;
  onComplete?: (id: string) => void;
  status: TaskStatus;
  authorId: string | null;
  assigneeId: string | null;
}

export interface PageFormProps {
  onAddTask: (data: TaskFormData) => void;
}

export interface TaskListProps {
  tasks: Task[];
  onDelete: (id: string) => void;
  orientation: "vertical" | "horizontal";
  onTake?: (id: string) => void;
  onComplete?: (id: string) => void;
  emptyState?: boolean;
}

export interface ButtonProps {
  text: string;
  type?: "button" | "submit" | "reset";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface ValidationResult {
  isValid: boolean;
  message?: string;
}

export type AuthFormData = {
  login: string;
  password: string;
};

export interface User {
  id: string;
  login: string;
  password?: string;
}

export interface AuthContextValue {
  user: User | null;
  login: (loginValue: string, password: string) => boolean;
  register: (loginValue: string, password: string) => boolean;
  logout: () => void;
}
