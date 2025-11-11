import React from "react";
import useFeatureFlags from "../../hooks/useFeatureFlags";

/**
 * PUBLIC_INTERFACE
 * Overview dashboard with simple counters and feature flag status.
 */
export default function Overview() {
  const flags = useFeatureFlags();
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the Unified Cloud Resource Manager.</p>
      <section aria-labelledby="features">
        <h2 id="features">Feature flags</h2>
        <pre style={{ background: "var(--surface)", padding: 12, borderRadius: 8, border: "1px solid var(--border)" }}>
{JSON.stringify(flags, null, 2)}
        </pre>
      </section>
    </div>
  );
}
