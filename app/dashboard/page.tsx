import { redirect } from "next/navigation";
import { auth } from "../lib/auth"
import { requireUser } from "../lib/hooks";
import prisma from "../lib/db";
import { notFound } from "next/navigation";
import { EmptyState } from "../components/EmptyState";

async function getData(id: string) {
    const data = await prisma.user.findUnique({
      where: {
        id: id,
      },
  
      select: {
        EventType: {
          select: {
            id: true,
            active: true,
            title: true,
            url: true,
            duration: true,
          },
          orderBy: {
            createdAt: "desc",
          },
        },
      },
    });
  
    if (!data) {
      return notFound();
    }
  
    return data;
  }

export default async function DashboardPage(){
    const session = await requireUser();
    const data= await getData(session.user?.id as string);
    return(
        <>
           {data.EventType.length === 0?(
            <EmptyState
            title="You have no Event Types"
            description="You can create your first event type by clicking the button below."
            buttonText="Add Event Type"
            href="/dashboard/new"
          />
           ):(
            <p>hey we jhave eventds</p>
           )}
        </>
    )
}