import React from "react";

/**
 * PUBLIC_INTERFACE
 * Loading skeleton spinner for Suspense fallbacks and async loads.
 */
export default function Loading() {
  return (
    <div role="status" aria-live="polite" style={{ padding: 24 }}>
      Loading…
    </div>
  );
}
