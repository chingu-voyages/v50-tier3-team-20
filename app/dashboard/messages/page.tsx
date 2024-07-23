"use client";

import Header from "@/app/ui/Header";
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
      <Header>Messages</Header>
    </main>
  );
}
