"use client";

import React from "react";
import LoginForm from "../ui/Login-form";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Page() {
  const { data: session, status } = useSession();
  // If logged in, it will redirect to the home page
  if (session) {
    return redirect("/");
  }
  return (
    <>
      <main className="flex flex-col min-h-screen p-6 bg-yellow-500 items-center justify-center">
        {/* Loading  */}
        {!session && status === "loading" && <p>Loading...</p>}
        {/* If not yet logged in, it will show the form */}
        {!session && status !== "loading" && <LoginForm />}
      </main>
    </>
  );
}
