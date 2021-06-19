
import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';
import MainLayout from 'src/layouts/MainLayout';
import AccountView from 'src/views/account/AccountView';
import ManageOrdersView from 'src/views/oders/ManageOrdersView';
import DashboardView from 'src/views/reports/DashboardView';
import LoginView from 'src/views/auth/LoginView';
import NotFoundView from 'src/views/errors/NotFoundView';
import RegisterView from 'src/views/auth/RegisterView';
import SettingsView from 'src/views/settings/SettingsView';
import AcountingView from 'src/views/customer/AccountingView';
import CustomerTabView from './views/customer/CustomerTabView';
import CustomerListView from './views/customer/CustomerListView';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'dashboard', element: <DashboardView /> },
      { path: 'manage_oders', element: <ManageOrdersView /> },
      { path: 'acounting', element: <AcountingView /> },
      { path: 'customers', element: <CustomerTabView /> },
      { path: 'account', element: <AccountView /> },
      { path: 'settings', element: <SettingsView /> },
      { path: '*', element: <Navigate to="/login" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <LoginView /> },
      { path: 'register', element: <RegisterView /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to="/app/login" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
