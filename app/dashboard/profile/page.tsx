"use client";

import Header from "@/app/ui/Header";
import Upload from "@/app/ui/Upload";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Page() {
  const { data: session, status } = useSession();
  const router = useRouter();
  if (status !== "loading" && !session) {
    return router.push("/");
  }
  return (
    <main>
      <Header>Profile</Header>
      <div className="flex justify-center">
        <div className="h-[90%] w-[95%] bg-customYellowWhite mt-5 p-10">
          <div>
            <div className="text-black text-3xl">Photo</div>
            <Upload />
          </div>
        </div>
      </div>
    </main>
  );
}
