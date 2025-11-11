import { useEffect, useState, useCallback } from "react";
import { supabase } from "../lib/supabaseClient";

/**
 * PUBLIC_INTERFACE
 * useAuth manages Supabase auth state and provides signin/signup/magic-link methods.
 */
export default function useAuth() {
  const [session, setSession] = useState(null);
  const [user, setUser] = useState(null);
  const [initializing, setInitializing] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;
    supabase.auth.getSession().then(({ data }) => {
      if (!mounted) return;
      setSession(data.session);
      setUser(data.session?.user ?? null);
      setInitializing(false);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, sess) => {
      setSession(sess);
      setUser(sess?.user ?? null);
    });

    return () => {
      mounted = false;
      listener?.subscription?.unsubscribe();
    };
  }, []);

  const signInWithPassword = useCallback(async (email, password) => {
    setError("");
    const { error: e } = await supabase.auth.signInWithPassword({ email, password });
    if (e) setError(e.message);
    return !e;
  }, []);

  const signUpWithPassword = useCallback(async (email, password) => {
    setError("");
    const redirectTo = (process.env.REACT_APP_FRONTEND_URL || window.location.origin) + "/auth/signin";
    const { error: e } = await supabase.auth.signUp({
      email,
      password,
      options: { emailRedirectTo: redirectTo }
    });
    if (e) setError(e.message);
    return !e;
  }, []);

  const sendMagicLink = useCallback(async (email) => {
    setError("");
    const redirectTo = (process.env.REACT_APP_FRONTEND_URL || window.location.origin) + "/";
    const { error: e } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: redirectTo }
    });
    if (e) setError(e.message);
    return !e;
  }, []);

  const signOut = useCallback(async () => {
    setError("");
    const { error: e } = await supabase.auth.signOut();
    if (e) setError(e.message);
    return !e;
  }, []);

  return { session, user, initializing, error, signInWithPassword, signUpWithPassword, sendMagicLink, signOut };
}
