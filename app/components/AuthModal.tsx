import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";

import Logo from "@/public/logo.png";
import Image from "next/image";
import GooleLogo from "@/public/google.svg";
import GitHubLogo from "@/public/github.svg";

import { signIn } from "@/app/lib/auth";
import { GitHubAuthButton, GoogleAuthButton } from "./SubmitButton";
import { DialogTitle } from "@radix-ui/react-dialog";

export function AuthModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Try for Free</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[360px]">
        <DialogTitle className="flex justify-center items-center gap-x-2">
          <Image src={Logo} className="size-10" alt="Logo" />
          <p className="text-2xl  font-semibold">
            Cal<span className="text-primary">Org</span>
          </p>
        </DialogTitle>
        <div className="flex flex-col gap-3 mt-5">
          <form
            className="w-full"
            action={async () => {
              "use server";
              await signIn("google");
            }}
          >
            <GoogleAuthButton />
          </form>

          <form
            className="w-full"
            action={async () => {
              "use server";
              await signIn("github");
            }}
          >
            <GitHubAuthButton />
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}