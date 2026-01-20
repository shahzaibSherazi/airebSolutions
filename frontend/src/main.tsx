import { createRoot } from "react-dom/client";
import { PrimeReactProvider } from "primereact/api";
import "primeicons/primeicons.css";
import App from "./App.tsx";
import "./index.css";
import "react-phone-number-input/style.css";

createRoot(document.getElementById("root")!).render(
  <PrimeReactProvider value={{ unstyled: true }}>
    <App />
  </PrimeReactProvider>,
);
