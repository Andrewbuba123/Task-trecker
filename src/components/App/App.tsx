import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import { HomePage } from "../HomePage/HomePage";
import { UserTasks } from "../UserTasks/UserTasks";
import { Task, TaskFormData } from "../../types";

import { AuthPage } from "../AuthPage/AuthPage";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";
import { useAuth } from "../../hooks/useAuth";

export const App = () => {
  const { user } = useAuth();

  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTaskData: TaskFormData) => {
    const taskWithId: Task = {
      id: String(Date.now()),
      title: newTaskData.title,
      description: newTaskData.description,
      count: newTaskData.count,
      status: newTaskData.status,
      authorId: user?.id ?? null,
      assigneeId: null,
    };
    setTasks((prev) => [...prev, taskWithId]);
  };

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const takeTask = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? { ...task, assigneeId: user?.id ?? null, status: "Inprogress" }
          : task,
      ),
    );
  };

  const completeTask = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, status: "Completed" } : task,
      ),
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<AuthPage />} />

        <Route element={<ProtectedRoute />}>
          <Route element={<Layout tasks={tasks} />}>
            <Route
              path="/"
              element={
                <HomePage
                  tasks={tasks}
                  onAddTask={addTask}
                  onDeleteTask={deleteTask}
                  onTakeTask={takeTask}
                />
              }
            />

            <Route
              path="/tasks"
              element={
                <UserTasks
                  tasks={tasks}
                  onDeleteTask={deleteTask}
                  onCompleteTask={completeTask}
                />
              }
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
