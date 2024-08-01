import Image from "next/image";
import prisma from '@/app/lib/db'
import {addUser} from '@/app/lib/actions'

export default async function Home() {
  const user = await prisma.user.findMany();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <form action={addUser}>
          <input type="text" name="username" className="px-3 py-1 rounded mb-3 mr-3 text-black"/>
          <input type="text" name="email" className="px-3 py-1 rounded mb-3 mr-3 text-black"/>
          <input type="text" name="password" className="px-3 py-1 rounded mb-3 mr-3 text-black"/>
          <input type="text" name="photo" className="px-3 py-1 rounded mb-3 mr-3 text-black"/>
          <input type="text" name="location" className="px-3 py-1 rounded mb-3 mr-3 text-black"/>
          <input type="text" name="lifestyle" className="px-3 py-1 rounded mb-3 mr-3 text-black"/>
          <input type="text" name="activities" className="px-3 py-1 rounded mb-3 mr-3 text-black"/>
          <input type="text" name="aboutMe" className="px-3 py-1 rounded text-black"/>
          <div><button type="submit">Submit</button></div>
        </form>
      </div>
    </main>
  );
}