import { ReactNode, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  getCurrentUser,
  login as loginToStorage,
  logout as logoutFromStorage,
  registerUser as registerInStorage
} from "../utils/auth";
import { User } from "../types";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(() => getCurrentUser());

  const login = (loginValue: string, password: string): boolean => {
    const loggedInUser = loginToStorage(loginValue, password);

    if (!loggedInUser) {
      return false;
    }

    setUser(loggedInUser);
    return true;
  };

  const register = (loginValue: string , password: string): boolean => {
    const newUser = registerInStorage(loginValue, password);
    if(!newUser){
      return false
    }
    setUser(newUser);
    return true;
  }

  const logout = () => {
    logoutFromStorage();
    setUser(null);
  };

 return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
