import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import RoutingSystem from "./routes/RoutingSystem";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RoutingSystem />
  </StrictMode>
);
