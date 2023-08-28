import React from 'react';
import { Sidebar } from '../Sidebar';
import { AppRoutes } from '../AppRoutes';

export const Dashboard = () => {
  return (
    <div>
    <Sidebar />
    <div>
      <AppRoutes />
    </div>
  </div>
  );
};
