import { supabase } from "../lib/supabaseClient";

/**
 * PUBLIC_INTERFACE
 * useActivityLogger returns a function to log simple activity events.
 * TODO: Persist to Supabase table 'audit_log' with RLS policies.
 */
export default function useActivityLogger() {
  return async function log(event, metadata = {}) {
    try {
      await supabase.channel("activity").send({
        type: "broadcast",
        event: "activity",
        payload: { event, metadata, ts: new Date().toISOString() }
      });
    } catch (e) {
      // noop
    }
  };
}
