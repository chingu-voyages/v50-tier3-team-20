"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const { data: session, status } = useSession();
  // Log the session for now
  if (session)
    // console.log({ session });
    // if (session) {
    //   window.localStorage.setItem("user", JSON.stringify(session));
    // }
    return (
      <main className="flex flex-col min-h-screen p-6 bg-yellow-500 items-center justify-center">
        {session && <p>{JSON.stringify(session.user)}</p>}
        {!session && status === "loading" && <p>Loading...</p>}
        {/* choice either register or login, in the meantime, it will only be "login" */}
        {!session && status !== "loading" && (
          <Link href={"/logIn"}> Login here</Link>
        )}
      </main>
    );
}
