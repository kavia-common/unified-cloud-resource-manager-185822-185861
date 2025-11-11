import React, { useEffect, useState } from "react";
import { getProviderClient } from "../../../lib/providers/providerAbstraction";
import Loading from "../../../components/common/Loading";

/**
 * PUBLIC_INTERFACE
 * AWSResources lists resources via providerAbstraction mock.
 */
export default function AWSResources() {
  const [items, setItems] = useState(null);
  const [err, setErr] = useState("");

  useEffect(() => {
    const client = getProviderClient("aws");
    client.listResources().then(setItems).catch((e) => setErr(e.message));
  }, []);

  if (err) return <div role="alert">{err}</div>;
  if (!items) return <Loading />;

  return (
    <div>
      <h1>AWS Resources</h1>
      <ul>
        {items.map((r) => (
          <li key={r.id}>{r.type}: {r.name} ({r.region})</li>
        ))}
      </ul>
    </div>
  );
}
