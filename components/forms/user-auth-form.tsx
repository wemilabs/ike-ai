"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

import { signIn } from "@/lib/auth-client";

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/layout/icons";

export function UserAuthForm() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="grid gap-6">
      <Button
        variant="outline"
        type="button"
        disabled={isLoading}
        onClick={async () => {
          await signIn.social(
            {
              provider: "google",
              callbackURL: "/dashboard",
              errorCallbackURL: "/error",
            },

            {
              onRequest: (ctx) => {
                setIsLoading(true);
              },

              onResponse: (ctx) => {
                setIsLoading(false);
              },

              onError: (ctx) => {
                setIsLoading(false);
                toast.error("Failed to sign in");
              },
            }
          );
        }}
        className="w-full"
      >
        {isLoading ? (
          <Loader2 className="mr-2 size-4 animate-spin" />
        ) : (
          <Icons.google className="mr-2 size-4" />
        )}{" "}
        Continue with Google
      </Button>
    </div>
  );
}
