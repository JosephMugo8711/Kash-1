import React from 'react';
import { Sidebar } from "./Sidebar";
import { AppRoutes } from "./AppRoutes";

export const PageContent = () => {
  return (
    <div>
      <Sidebar />
      <div>
        <AppRoutes />
      </div>
    </div>
  );
};
