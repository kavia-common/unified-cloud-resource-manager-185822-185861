import React, { useCallback, useState } from "react";
import useRealtime from "../../hooks/useRealtime";

/**
 * PUBLIC_INTERFACE
 * AuditLog receives broadcasted activity events via Supabase Realtime.
 */
export default function AuditLog() {
  const [events, setEvents] = useState([]);
  const onMessage = useCallback((payload) => {
    setEvents((prev) => [payload?.payload, ...prev].slice(0, 50));
  }, []);
  useRealtime("activity", onMessage);

  return (
    <div>
      <h1>Audit Log</h1>
      <ul>
        {events.map((e, idx) => (
          <li key={idx}>
            <code>{e?.ts}</code> - {e?.event}
          </li>
        ))}
      </ul>
      <p>Note: This is a realtime preview. Persisted audit will be added with Supabase tables.</p>
    </div>
  );
}
