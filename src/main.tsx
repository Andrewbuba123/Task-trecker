import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import { App } from "./components/App/App";
import { AuthProvider } from "./context/AuthProvider";
import { store } from "./store/store";
import "./main.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Корневой элемент не найден");
}

const reactRoot = ReactDOM.createRoot(rootElement);

reactRoot.render(
  <StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Provider>
  </StrictMode>,
);
