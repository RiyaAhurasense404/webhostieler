import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./context/AuthContext.jsx";
import { WishListProvider } from "./context/WishListContext.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <WishListProvider>
          <App />
        </WishListProvider>
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);

// import { bookHotel } from "./api/hotelsApi"

// bookHotel({
//   hotel_id: "15914332",
//   blockIds: "1591433202_397237548_2_1_0"
// }).then(data => console.log(data))