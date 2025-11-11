import React from "react";
import { useParams } from "react-router-dom";

/**
 * PUBLIC_INTERFACE
 * ResourceDetail shows details for a resource by provider and id.
 */
export default function ResourceDetail() {
  const { provider, id } = useParams();
  return (
    <div>
      <h1>Resource Detail</h1>
      <p>Provider: {provider}</p>
      <p>Resource ID: {id}</p>
      <p>TODO: Fetch and render resource details.</p>
    </div>
  );
}
