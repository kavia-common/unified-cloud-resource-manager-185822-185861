import React from "react";
import { Link } from "react-router-dom";
import AccessibleButton from "../common/AccessibleButton";

/**
 * PUBLIC_INTERFACE
 * Header renders the top navigation bar with app name and quick links.
 */
export default function Header() {
  return (
    <header
      role="banner"
      style={{
        borderBottom: "1px solid var(--border)",
        background: "var(--surface)",
        position: "sticky",
        top: 0,
        zIndex: 10
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 16,
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 16px",
          maxWidth: 1280,
          margin: "0 auto"
        }}
      >
        <Link to="/" aria-label="Go to dashboard">
          <strong>Cloud Manager</strong>
        </Link>
        <nav aria-label="Top navigation">
          <ul style={{ display: "flex", gap: 12, listStyle: "none", margin: 0, padding: 0 }}>
            <li><Link to="/teams">Teams</Link></li>
            <li><Link to="/audit">Audit</Link></li>
            <li><Link to="/settings">Settings</Link></li>
          </ul>
        </nav>
        <AccessibleButton
          aria-label="User account menu button"
          onClick={() => alert("Profile menu stub")}
        >
          Account
        </AccessibleButton>
      </div>
    </header>
  );
}
