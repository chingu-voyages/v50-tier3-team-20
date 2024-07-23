"use client";

import React from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Page() {
  const { data: session, status } = useSession();
  const router = useRouter();

  return (
    <div>
      {" "}
      <main className="flex flex-col min-h-screen p-6 bg-yellow-500 items-center justify-center">
        {session && <p>{JSON.stringify(session.user)}</p>}
        {!session && status === "loading" && <p>Loading...</p>}
        {/* choice either register or login, in the meantime, it will only be "login" */}
        {!session && status !== "loading" && (
          <Link href={"/logIn"}> Login here</Link>
        )}
      </main>
    </div>
  );
}
