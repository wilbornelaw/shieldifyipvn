import type { Metadata } from "next";

import { PlatformLoginsView } from "@/components/shared/platform-logins-view";

export const metadata: Metadata = {
  title: "Platform Login",
  description: "Select a Shieldify IP platform and continue to external login.",
  alternates: {
    canonical: "/platform-logins",
  },
};

export default function PlatformLoginsPage() {
  return <PlatformLoginsView />;
}

