import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./pages/Home";
import LoginPage from "./pages/Login";
import Register from "./pages/Register";
import Users from "./pages/Users";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
