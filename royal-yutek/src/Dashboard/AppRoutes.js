import React from "react";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./Pages/Dashboard";
import { Balance } from "./Pages/Balance";
import { Profile } from "./Pages/Profile";

export const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/balance" element={<Balance />} />
        <Route path="/dashboard/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};
