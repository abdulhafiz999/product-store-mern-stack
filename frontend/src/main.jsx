import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes/dist/cjs/index.js";
import { ThemeProvider } from "next-themes";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Theme>
        <App />
      </Theme>
    </ThemeProvider>
  </StrictMode>
);
