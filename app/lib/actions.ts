"use server";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { ExistingUser } from "./types";
import prisma from "@/app/lib/db"

// ...

export async function authenticate(formData: ExistingUser) {
  try {
    return await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}



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