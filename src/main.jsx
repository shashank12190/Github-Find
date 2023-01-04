import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { GitHubProvider } from "./context/github/GithubContext";
import { AlertProvider } from "./context/alert/AlertContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AlertProvider>
      <GitHubProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </GitHubProvider>
    </AlertProvider>
  </React.StrictMode>
);
