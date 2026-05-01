import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  const [role, setRole] = useState(null);

  // 🔥 Load role from localStorage
  useEffect(() => {
    const savedRole = localStorage.getItem("role");
    if (savedRole) setRole(savedRole);
  }, []);

  return (
    <BrowserRouter>
      <Routes>

        {/* LOGIN */}
        <Route
          path="/"
          element={<Login setRole={setRole} />}
        />

        {/* PROTECTED DASHBOARD */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard role={role} setRole={setRole} />
            </ProtectedRoute>
          }
        />

        {/* FALLBACK */}
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;