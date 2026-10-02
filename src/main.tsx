import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { App } from "./components/App/App";
import { AuthProvider } from "./context/AuthProvider";
import "./main.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Корневой элемент не найден");
}

const reactRoot = ReactDOM.createRoot(rootElement);

reactRoot.render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>,
);
