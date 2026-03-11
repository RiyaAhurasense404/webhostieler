import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./context/AuthContext.js";
import { WishListProvider } from "./context/WishListContext.js";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();
const rootElement = document.getElementById("root") as HTMLElement

createRoot(rootElement).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <WishListProvider>
          <App />
          <Toaster position="top-right" />
        </WishListProvider>
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);