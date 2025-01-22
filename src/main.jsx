import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App.jsx";
import { ContentProvider } from "./contexts/Content.jsx";
import { SaveRedditProvider } from "./contexts/SaveReddit.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContentProvider>
      <SaveRedditProvider>
        <App />
      </SaveRedditProvider>
    </ContentProvider>
  </StrictMode>
);
