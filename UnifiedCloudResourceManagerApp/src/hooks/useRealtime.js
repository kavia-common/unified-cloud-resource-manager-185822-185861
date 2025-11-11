import { useEffect } from "react";
import { supabase } from "../lib/supabaseClient";

/**
 * PUBLIC_INTERFACE
 * useRealtime attaches to a channel and calls the handler on messages.
 */
export default function useRealtime(channelName, handler) {
  useEffect(() => {
    if (!channelName) return;

    const channel = supabase.channel(channelName).on("broadcast", { event: "activity" }, (payload) => {
      handler?.(payload);
    });

    channel.subscribe();

    return () => {
      try { supabase.removeChannel(channel); } catch {}
    };
  }, [channelName, handler]);
}
