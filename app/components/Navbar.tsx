import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.png";

import { AuthModal } from "./AuthModal";

export function Navbar() {
    return (
      <div className="relative flex flex-col w-full py-5 mx-auto md:flex-row md:items-center md:justify-between">
        <div className="flex flex-row items-center justify-between text-sm lg:justify-start">
          <Link href="/" className="flex items-center gap-2">
            <Image src={Logo} className="size-10" alt="Logo" />
  
            <h4 className="text-3xl font-semibold">
              Cal<span className="text-primary">Org</span>
            </h4>
          </Link>
        </div>
          <AuthModal />
        
      </div>
    );
  }