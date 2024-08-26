import DetailProductPage from "./pages/DetailProductPage";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";
import ProductsPage from "./pages/ProductsPage";
import ProfilePage from "./pages/ProfilePage";
import RegisterPage from "./pages/RegisterPage";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />

        <Route path="/profile" element={<ProfilePage />} />

        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<DetailProductPage />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
