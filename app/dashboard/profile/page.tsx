"use client";

import Header from "@/app/ui/Header";
import Upload from "@/app/ui/Upload";

export default async function Page() {
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
