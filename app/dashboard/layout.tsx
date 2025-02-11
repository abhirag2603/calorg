import { ReactNode } from "react";
import Link from "next/link";
import { Menu, MenuIcon } from "lucide-react";
import { DashboardLinks } from "../components/DashboardLinks";

import { Button } from "@/components/ui/button";
import Logo from "@/public/logo.png";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "../components/ThemeToggle";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { DropdownMenuArrow } from "@radix-ui/react-dropdown-menu";
import { auth, signOut } from "../lib/auth";
import { requireUser } from "../lib/hooks";
import prisma from "../lib/db";
import { redirect } from "next/navigation";
import { Toaster } from "@/components/ui/sonner";


async function getData(userId: any){
const data= await prisma.user.findUnique({
    where:{
        id:userId,
    },
    select:{
        userName: true,
        grantId: true,
    }
})

if(!data?.userName){
    return redirect("/onboarding")
}

if(!data?.grantId){
    return redirect("/onboarding/grant-id")
}


}

export default async function DashboardLayout({children}:{children:ReactNode}) {
    const session = await requireUser();

    const data=await getData(session.user?.id);
    return (
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
             <div className="hidden border-r bg-muted/40 md:block">
             <div className="flex h-full max-h-screen flex-col gap-2">
             <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
             <Link href="/" className="flex items-center gap-2 font-semibold">
                <Image src={Logo} alt="Logo" className="size-6" />
                <p className="text-xl font-bold">
                  Cal<span className="text-primary">Org</span>
                </p>
              </Link>
             </div>
             <div className="flex-1">
              <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                <DashboardLinks/>
              </nav>
            </div>
                </div>
             </div>
             <div className="flex flex-col">
                <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button className="md:hidden shrink-0"
                        size='icon'
                        variant="outline">
                            <Menu className="size-5" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side='right' className="flex flex-col">
                        <nav className="gird gap-2 mt-10">
                            <DashboardLinks/>
                        </nav>

                    </SheetContent>
                </Sheet>
                <div className="ml-auto flex items-center gap-x-4">
                    <ThemeToggle/>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant='secondary' size='icon' className="rounded-full">
                                <img src={session?.user?.image as string} alt='Profile image' className="w-full h-full rounded-full" width={20} height={20} />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>
                                My account
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator/>
                            <DropdownMenuItem asChild><Link href='/dashboard/settings'>Settings</Link></DropdownMenuItem>
                            <DropdownMenuItem asChild><form className="w-full" action={async()=>{
                                "use server"
                                await signOut();
                            }}><button className="text-left w-full">Logout</button></form></DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                </header>
                <main className="flex flex-col flex-1 gap-4 p-4 lg:gap-6 lg:p-6">
                    {children}
                </main>

             </div>
             <Toaster richColors closeButton />
        </div>
    )
    }