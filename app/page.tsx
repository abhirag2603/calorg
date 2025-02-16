import { redirect } from "next/navigation";
import { Navbar } from "./components/Navbar";
import { auth } from "./lib/auth";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export default async function Home() {
  const session = await auth();
  if (session?.user) {
    return redirect("/dashboard");
  }

  return (
    <div className="max-w-7xl flex flex-col items-center justify-center mx-auto px-4 sm:px-6 lg:px-8 gap-10 h-screen">
      <Navbar />
      <div className="flex flex-1 flex-col items-center justify-center gap-2">
        <TypewriterEffect
          words={[
            { text: "Effortless Scheduling", className: "text-lg text-gray-600 " },
          ]}
        />
        <TypewriterEffect
          words={[
            { text: "Book Meetings Seamlessly", className: "text-4xl sm:text-6xl font-extrabold text-blue-500" },
          ]}
        />
      </div>
    </div>
  );
}
