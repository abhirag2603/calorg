import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import prisma from "@/app/lib/db";
  import React from "react";
  import Image from "next/image";
  import { Button } from "@/components/ui/button";
  import { CalendarCheck2 } from "lucide-react";
  import Link from "next/link";
import { redirect } from "next/navigation";
import { requireUser } from "@/app/lib/hooks";

  async function getData(userId: any){
    const data= await prisma.user.findUnique({
        where:{
            id:userId,
        },
        select:{
            userName: true,
        }
    })
    
    
    if(!data?.userName){
        return redirect("/onboarding")
    }

    return data;
    }
  
    export default async function  GrantIdRoute() {
    const session = await requireUser();
    const data= await getData(session.user?.id as string
    )

    return (
      <div className="min-h-screen w-screen flex items-center justify-center">
        <Card>
          <CardHeader>
            <CardTitle>You Are Almost Done!</CardTitle>
            <CardDescription>
              We have to now connect your calendar to your account.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="/api/auth">
                <CalendarCheck2 className="size-4 mr-2" />
                Connect Calender to Account
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  };
  
  