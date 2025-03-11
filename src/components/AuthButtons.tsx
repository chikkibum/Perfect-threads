"use client";

import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";

interface AuthButtonsProps {
  user: {
    id: string;
    name?: string | null;
    email: string;
    image?: string | null;
  } | null;
  isAdmin: boolean;
}

export default function AuthButtons({ user, isAdmin }: AuthButtonsProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleSignOut = async () => {
    setIsLoading(true);
    try {
      await authClient.signOut();
      window.location.href = "/";
    } catch (error) {
      console.error("Sign out error:", error);
      setIsLoading(false);
    }
  };

  const handleSignIn = async (provider: "google" | "github") => {
    setIsLoading(true);
    try {
      await authClient.signIn.social({ provider });
    } catch (error) {
      console.error("Sign in error:", error);
      setIsLoading(false);
    }
  };

  if (user) {
    return (
      <>
        <button
          onClick={handleSignOut}
          disabled={isLoading}
          className={buttonVariants({
            size: "sm",
            variant: "outline",
          })}
        >
          {isLoading ? "Signing out..." : "Sign out"}
        </button>
        {isAdmin ? (
          <Link
            href="/dashboard"
            className={buttonVariants({
              size: "sm",
              variant: "outline",
            })}
          >
            Dashboard 🫡
          </Link>
        ) : null}
        <Link
          href="/configure/upload"
          className={buttonVariants({
            size: "sm",
            className: "hidden sm:flex items-center gap-1",
          })}
        >
          Create Tshirt
          <ArrowRight className="ml-1.5 h-5 w-5" />
        </Link>
      </>
    );
  }

  return (
    <>
      <button
        onClick={() => handleSignIn("google")}
        disabled={isLoading}
        className={buttonVariants({
          size: "sm",
          variant: "outline",
        })}
      >
        {isLoading ? "Loading..." : "Sign up"}
      </button>

      <button
        onClick={() => handleSignIn("github")}
        disabled={isLoading}
        className={buttonVariants({
          size: "sm",
          variant: "outline",
        })}
      >
        {isLoading ? "Loading..." : "Login"}
      </button>

      <div className="h-8 w-px bg-zinc-200 hidden sm:block" />

      <Link
        href="/configure/upload"
        className={buttonVariants({
          size: "sm",
          className: "hidden sm:flex items-center gap-1",
        })}
      >
        Create Tshirt
        <ArrowRight className="ml-1.5 h-5 w-5" />
      </Link>
    </>
  );
}
