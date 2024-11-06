"use server";

import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createPost(formData: FormData) {
  // Authentication check
  const { isAuthenticated } = getKindeServerSession();
  if(!(await isAuthenticated())) {
    return redirect("/api/auth/login");
  }

  const title = formData.get("title") as string;
  const body = formData.get("body") as string;
  
  // Adding post to database
  await prisma.post.create({
    data: {
      title,
      body,
    }
  })

  // Revalidate cache to show new post immediately
  revalidatePath("/posts");
}
