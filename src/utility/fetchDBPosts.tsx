import prisma from "@/lib/db";

export default async function fetchDBPosts() {
  const posts = await prisma.post.findMany();
  return posts;
}
