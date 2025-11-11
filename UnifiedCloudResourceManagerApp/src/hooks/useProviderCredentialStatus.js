import { useMemo } from "react";
import { getEnvFlags } from "../lib/featureFlags";

/**
 * PUBLIC_INTERFACE
 * useProviderCredentialStatus reports whether credentials are configured.
 * For demo, reads feature flag values. Real app would call secure endpoint.
 */
export default function useProviderCredentialStatus() {
  const flags = getEnvFlags();
  return useMemo(
    () => ({
      aws: !!flags.aws_enabled,
      azure: !!flags.azure_enabled,
      gcp: !!flags.gcp_enabled
    }),
    [flags]
  );
}
