import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import HotelsPage from "../pages/HotelsPage";
import HotelDetailPage from "../pages/HotelDetailPage";
import BookingPage from "../pages/BookingPage";
import WishListPage from "../pages/WishListPage";
import NotFoundPage from "../pages/NotFoundPage";
import Layout from "../components/layout/Layout";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/hotels" element={<HotelsPage />} />
            <Route path="/hotels/:id" element={<HotelDetailPage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/wishlist" element={<WishListPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
