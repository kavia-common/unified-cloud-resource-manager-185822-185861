import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Loading from "../components/common/Loading";

// Auth pages
const SignIn = React.lazy(() => import("../pages/Auth/SignIn"));
const SignUp = React.lazy(() => import("../pages/Auth/SignUp"));
const MagicLink = React.lazy(() => import("../pages/Auth/MagicLink"));

// App pages
const Overview = React.lazy(() => import("../pages/Dashboard/Overview"));
const AWSResources = React.lazy(() => import("../pages/Cloud/AWS/AWSResources"));
const AzureResources = React.lazy(() => import("../pages/Cloud/Azure/AzureResources"));
const GCPResources = React.lazy(() => import("../pages/Cloud/GCP/GCPResources"));
const ResourceDetail = React.lazy(() => import("../pages/Cloud/ResourceDetail"));
const Teams = React.lazy(() => import("../pages/Teams/Teams"));
const Settings = React.lazy(() => import("../pages/Settings/Settings"));
const AuditLog = React.lazy(() => import("../pages/Audit/AuditLog"));

/**
 * PUBLIC_INTERFACE
 * AppRoutes registers all application routes using react-router-dom.
 * Routes covered:
 *  - /auth/* (signin, signup, magic-link)
 *  - / (dashboard)
 *  - /cloud/aws, /cloud/azure, /cloud/gcp
 *  - /cloud/:provider/resources/:id
 *  - /teams, /audit, /settings
 */
export default function AppRoutes() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/auth">
          <Route index element={<Navigate to="/auth/signin" replace />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="magic-link" element={<MagicLink />} />
        </Route>

        <Route
          path="/"
          element={
            <MainLayout>
              <Overview />
            </MainLayout>
          }
        />

        <Route
          path="/cloud/aws"
          element={
            <MainLayout>
              <AWSResources />
            </MainLayout>
          }
        />
        <Route
          path="/cloud/azure"
          element={
            <MainLayout>
              <AzureResources />
            </MainLayout>
          }
        />
        <Route
          path="/cloud/gcp"
          element={
            <MainLayout>
              <GCPResources />
            </MainLayout>
          }
        />
        <Route
          path="/cloud/:provider/resources/:id"
          element={
            <MainLayout>
              <ResourceDetail />
            </MainLayout>
          }
        />

        <Route
          path="/teams"
          element={
            <MainLayout>
              <Teams />
            </MainLayout>
          }
        />
        <Route
          path="/audit"
          element={
            <MainLayout>
              <AuditLog />
            </MainLayout>
          }
        />
        <Route
          path="/settings"
          element={
            <MainLayout>
              <Settings />
            </MainLayout>
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}
