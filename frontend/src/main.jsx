import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import DashboardContextProvider from "./context/DashboardContextProvider.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <DashboardContextProvider>
                <App />
            </DashboardContextProvider>
        </BrowserRouter>
    </StrictMode>
);
