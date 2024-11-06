import Link from "next/link"
import fetchDummyPosts from "@/utility/fetchDummyPosts";
import fetchDBPosts from "@/utility/fetchDBPosts";

export default async function PostsList() {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  // const data = await fetchDummyPosts(10);
  const posts = await fetchDBPosts();
  
  return (
    <ul>
      {
        posts.map((post) => (
          <li key={post.id} className="mb-4">
            <Link href={`/posts/${post.id}`}>
              {post.title}
            </Link>
          </li>
        ))
      }
    </ul>
  )
}
