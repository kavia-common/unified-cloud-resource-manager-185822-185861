import React from "react";
import { can } from "../../lib/rbac";

/**
 * PUBLIC_INTERFACE
 * Teams management placeholder.
 */
export default function Teams() {
  const canEdit = can("admin", "write");
  return (
    <div>
      <h1>Teams</h1>
      <p>Manage team members and roles.</p>
      <p>RBAC check (admin write): {String(canEdit)}</p>
    </div>
  );
}
