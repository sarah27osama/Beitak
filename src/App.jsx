import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./components/authentication/ProtectedRoute";

// Authentication Pages
import Login from "./pages/authentication/Login";
import SignUp from "./pages/authentication/SignUp";
import VerifyEmail from "./pages/authentication/VerifyEmail";
import ForgotPassword from "./pages/authentication/ForgotPassword";
import ResetPassword from "./pages/authentication/ResetPassword";

// Customer Pages
import CustomerDashboard from "./pages/customer/CustomerDashboard";

export default function App() {
  return (
    <Routes>
      {/* التحويل التلقائي لصفحة تسجيل الدخول مؤقتاً لحد ما زميلك يخلص الـ Home */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* روابط الـ Authentication العامة */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/verify-email" element={<VerifyEmail />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />

      {/* روابط الـ Customer المحمية */}
      <Route
        path="/customer/dashboard"
        element={
          <ProtectedRoute allowedRole="customer">
            <CustomerDashboard />
          </ProtectedRoute>
        }
      />

      {/* أي رابط غلط يرجع للرئيسية */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
