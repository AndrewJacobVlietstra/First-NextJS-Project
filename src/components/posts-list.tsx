import Link from "next/link"
import fetchDummyPosts from "@/utility/fetchDummyPosts";

export default async function PostsList() {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  const data = await fetchDummyPosts(10);

  return (
    <ul>
      {
        data.posts.map((post) => (
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
