import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource-variable/plus-jakarta-sans";
import "@fontsource-variable/jetbrains-mono";
import "../index.css";
import PmApp from "./PmApp";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PmApp />
  </StrictMode>,
);
