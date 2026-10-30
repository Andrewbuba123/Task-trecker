import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import { HomePage } from "../HomePage/HomePage";
import { UserTasks } from "../UserTasks/UserTasks";
import { AuthPage } from "../AuthPage/AuthPage";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";

export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<AuthPage />} />

      <Route element={<ProtectedRoute />}>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/tasks" element={<UserTasks />} />
        </Route>
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>
);
