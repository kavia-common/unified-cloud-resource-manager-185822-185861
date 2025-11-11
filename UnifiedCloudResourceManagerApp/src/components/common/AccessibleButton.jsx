import React from "react";

/**
 * PUBLIC_INTERFACE
 * AccessibleButton provides a keyboard and screen-reader friendly button.
 */
export default function AccessibleButton({ children, onClick, ...rest }) {
  return (
    <button
      onClick={onClick}
      {...rest}
      style={{
        background: "var(--primary)",
        color: "#0b0b0d",
        border: "1px solid var(--border)",
        borderRadius: 8,
        padding: "8px 12px",
        fontWeight: 600,
        cursor: "pointer"
      }}
    >
      {children}
    </button>
  );
}
