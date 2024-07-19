"use client";

import LoginForm from "@/app/ui/Login-form";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen p-6 bg-yellow-500 items-center justify-center">
      <LoginForm />
    </main>
  );
}
