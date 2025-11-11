import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

/**
 * PUBLIC_INTERFACE
 * MainLayout composes Header, Sidebar, and content area with accessible main landmark.
 */
export default function MainLayout({ children }) {
  return (
    <div>
      <Header />
      <div style={{ display: "flex", maxWidth: 1280, margin: "0 auto" }}>
        <Sidebar />
        <main id="main" tabIndex={-1} style={{ flex: 1, padding: 24 }}>
          {children}
        </main>
      </div>
    </div>
  );
}
