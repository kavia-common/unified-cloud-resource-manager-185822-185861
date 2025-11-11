import React from "react";
import { NavLink } from "react-router-dom";

/**
 * PUBLIC_INTERFACE
 * Sidebar provides persistent navigation to cloud providers and sections.
 */
export default function Sidebar() {
  const linkStyle = ({ isActive }) => ({
    display: "block",
    padding: "8px 12px",
    color: isActive ? "var(--text)" : "var(--muted)",
    background: isActive ? "rgba(79, 140, 255, 0.08)" : "transparent",
    borderRadius: 8,
    textDecoration: "none"
  });

  return (
    <aside
      aria-label="Primary"
      style={{
        width: 260,
        borderRight: "1px solid var(--border)",
        padding: 16
      }}
    >
      <div style={{ marginBottom: 16 }}>
        <strong style={{ color: "var(--muted)", fontSize: 12, letterSpacing: 0.8 }}>
          Overview
        </strong>
        <nav>
          <ul style={{ listStyle: "none", margin: "8px 0 16px 0", padding: 0 }}>
            <li>
              <NavLink to="/" style={linkStyle} end>
                Dashboard
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <div>
        <strong style={{ color: "var(--muted)", fontSize: 12, letterSpacing: 0.8 }}>
          Providers
        </strong>
        <nav aria-label="Cloud providers">
          <ul style={{ listStyle: "none", margin: "8px 0 0 0", padding: 0, display: "grid", gap: 6 }}>
            <li><NavLink to="/cloud/aws" style={linkStyle}>AWS</NavLink></li>
            <li><NavLink to="/cloud/azure" style={linkStyle}>Azure</NavLink></li>
            <li><NavLink to="/cloud/gcp" style={linkStyle}>GCP</NavLink></li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}
