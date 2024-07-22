"use server";

import prisma from "@/app/lib/db"

export async function addUser(formData: FormData) {
  await prisma.user.create({
    data: {
      username: formData.get("username") as string,
      password: formData.get("password") as string,
      email: formData.get("email") as string,
      photo: formData.get("photo") as string,
      location: formData.get("location") as string,
      lifestyle: formData.get("lifestyle") as string,
      activities: formData.get("activities") as string,
      aboutMe: formData.get("aboutMe") as string,
    }
    
  })
}

async function returnUsers() {
  const allUsers = await prisma.user.findMany()
  console.log(allUsers)
}

returnUsers()