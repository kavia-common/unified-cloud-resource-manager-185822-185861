import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { isEmail, required } from "../../lib/validation";
import AccessibleButton from "../../components/common/AccessibleButton";

/**
 * PUBLIC_INTERFACE
 * SignIn page for email/password auth.
 */
export default function SignIn() {
  const { signInWithPassword, error } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const nav = useNavigate();

  async function onSubmit(e) {
    e.preventDefault();
    if (!isEmail(email) || !required(password)) return;
    setBusy(true);
    const ok = await signInWithPassword(email, password);
    setBusy(false);
    if (ok) nav("/");
  }

  return (
    <div style={{ maxWidth: 420, margin: "10vh auto", padding: 24, border: "1px solid var(--border)", borderRadius: 12, background: "var(--surface)" }}>
      <h1>Sign in</h1>
      {error && <div role="alert" style={{ color: "#f66" }}>{error}</div>}
      <form onSubmit={onSubmit}>
        <div style={{ marginBottom: 12 }}>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 style={{ width: "100%", padding: 8, borderRadius: 8, border: "1px solid var(--border)" }} />
        </div>
        <div style={{ marginBottom: 12 }}>
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" value={password}
                 onChange={(e) => setPassword(e.target.value)}
                 style={{ width: "100%", padding: 8, borderRadius: 8, border: "1px solid var(--border)" }} />
        </div>
        <AccessibleButton type="submit" disabled={busy} aria-busy={busy}>
          {busy ? "Signing in…" : "Sign in"}
        </AccessibleButton>
      </form>
      <p style={{ marginTop: 12 }}>
        <Link to="/auth/magic-link">Use magic link</Link> ·{" "}
        <Link to="/auth/signup">Create an account</Link>
      </p>
    </div>
  );
}
