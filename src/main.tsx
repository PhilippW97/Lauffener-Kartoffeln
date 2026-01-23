import { createRoot } from "react-dom/client";
import App from "./app/App";
import "./styles/index.css";

import { CartProvider } from "./context/CartContext";

  createRoot(document.getElementById("root")!).render(
    <CartProvider>
      <App />
    </CartProvider>
  );
  