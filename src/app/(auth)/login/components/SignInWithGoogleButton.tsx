"use client";
import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/client";
import React from "react";

const SignInWithGoogleButton = () => {
  const handleGoogleSignIn = async () => {
    const supabase = createClient();
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/confirm`,
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
      },
    });

    if (error) {
      console.error("Google OAuth error:", error);
      window.location.href = `/error?message=${encodeURIComponent(error.message)}`;
    } else if (data.url) {
      window.location.href = data.url;
    }
  };

  return (
    <Button
      type="button"
      variant="outline"
      className="w-full"
      onClick={handleGoogleSignIn}
    >
      Login with Google
    </Button>
  );
};

export default SignInWithGoogleButton;