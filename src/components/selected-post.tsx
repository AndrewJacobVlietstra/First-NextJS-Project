import fetchDummyPosts from "@/utility/fetchDummyPosts";
import UpvoteButton from "./upvote-btn";
import fetchDBPosts from "@/utility/fetchDBPosts";
import { notFound } from "next/navigation";

export default async function SelectedPost({ paramsID }: {
  paramsID: number
}) {
  
  // Pulling dummy data from third-party API
  // const data = await fetchDummyPosts(10);
  // const posts = data.posts;

  // Pulling data from our database
  const posts = await fetchDBPosts();

  // Filter through the posts to find the matching postID to URL paramsID
  const [filteredPost] = posts.filter((post) => post.id === paramsID)

  // If post does not exist show "NotFound" component
  if(!filteredPost) {
    notFound();
  }

  return (
      <>
        <h1 className="text-5xl font-semibold mb-7">{filteredPost.title}</h1>
        <p className="max-w-[700px] mx-auto">{filteredPost.body}</p>
        <UpvoteButton />
      </>
  )
}
