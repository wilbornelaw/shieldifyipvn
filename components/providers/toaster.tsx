"use client";

import { Toaster as SonnerToaster } from "sonner";

export function Toaster() {
  return (
    <SonnerToaster
      closeButton
      richColors
      position="top-right"
      toastOptions={{
        style: {
          background: "#ffffff",
          border: "1px solid #d4d9e3",
          color: "#0b1220",
        },
      }}
    />
  );
}
