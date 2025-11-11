import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { getEnvFlags } from "../lib/featureFlags";

/**
 * PUBLIC_INTERFACE
 * useFeatureFlags combines build-time flags with project flags from Supabase table 'feature_flags'.
 * Schema: feature_flags(id uuid, key text, enabled boolean, description text)
 */
export default function useFeatureFlags() {
  const [flags, setFlags] = useState(getEnvFlags());

  useEffect(() => {
    let mounted = true;

    async function fetchFlags() {
      const { data, error } = await supabase.from("feature_flags").select("key, enabled");
      if (!mounted) return;
      if (!error && Array.isArray(data)) {
        const merged = { ...getEnvFlags() };
        for (const row of data) merged[row.key] = !!row.enabled;
        setFlags(merged);
      }
    }

    fetchFlags();

    // Subscribe for realtime updates if table is enabled for realtime
    const channel = supabase
      .channel("feature-flags")
      .on("postgres_changes", { event: "*", schema: "public", table: "feature_flags" }, fetchFlags)
      .subscribe();

    return () => {
      mounted = false;
      supabase.removeChannel(channel);
    };
  }, []);

  return flags;
}
