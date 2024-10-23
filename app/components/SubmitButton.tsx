'use client'

import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";
import GoogleLogo from "@/public/google.svg";
import GithubLogo from "@/public/github.svg";
import Image from "next/image";
import { Loader2 } from "lucide-react";

export function GoogleAuthButton() {
    const { pending } = useFormStatus();
    return (
      <>
        {pending ? (
          <Button variant="outline" className="w-full" disabled>
            <Loader2 className="size-4 mr-2 animate-spin" /> Please wait
          </Button>
        ) : (
          <Button variant="outline" className="w-full">
            <Image src={GoogleLogo} className="size-4 mr-2" alt="Google Logo" />
            Sign in with Google
          </Button>
        )}
      </>
    );
  }

  export function GitHubAuthButton() {
    const { pending } = useFormStatus();
    return (
      <>
        {pending ? (
          <Button variant="outline" className="w-full" disabled>
            <Loader2 className="size-4 mr-2 animate-spin" /> Please wait
          </Button>
        ) : (
          <Button variant="outline" className="w-full">
            <Image
              src={GithubLogo}
              className="size-4 mr-2 dark:invert"
              alt="Google Logo"
            />
            Sign in with GitHub
          </Button>
        )}
      </>
    );
  }