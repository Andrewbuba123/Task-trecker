import { User } from "../types";

const USERS_KEY = "users";
const SESSION_KEY = "current_user";


export const registerUser = (
  loginValue: string,
  password: string,
): User | null => {
  const users = getAllUsers();

  const exist = users.some((u) => u.login === loginValue);
  if (exist) {
    return null;
  }

  const newUser: User = {
    id: crypto.randomUUID(),
    login: loginValue,
    password,
  };

  users.push(newUser);
  localStorage.setItem(USERS_KEY, JSON.stringify(users));

  const sessionUser: User = { id: newUser.id, login: newUser.login };
  localStorage.setItem(SESSION_KEY, JSON.stringify(sessionUser));
  return sessionUser;
};

export const logout = (): void => {
  localStorage.removeItem(SESSION_KEY);
};

export const login = (loginValue: string, password: string): User | null => {
  const users = getAllUsers();
  const existingUser = users.find(
    (u) => u.login === loginValue && u.password === password,
  );

  if (!existingUser) {
    return null;
  }

  const sessionUser: User = { id: existingUser.id, login: existingUser.login };
  localStorage.setItem(SESSION_KEY, JSON.stringify(sessionUser));
  return sessionUser;
};

export const getAllUsers = (): User[] => {
  try {
    const raw = localStorage.getItem(USERS_KEY);
    return raw ? (JSON.parse(raw) as User[]) : [];
  } catch {
    return [];
  }
};

export const getCurrentUser = (): User | null => {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    return raw ? (JSON.parse(raw) as User) : null;
  } catch {
    return null;
  }
};
