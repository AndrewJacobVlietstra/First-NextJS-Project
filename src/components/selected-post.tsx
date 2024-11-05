import fetchDummyPosts from "@/utility/fetchDummyPosts";
import UpvoteButton from "./upvote-btn";

export default async function SelectedPost({ postID }: {
  postID: string
}) {
  
  const data = await fetchDummyPosts(10);
  const posts = data.posts;
  const [filteredPost] = posts.filter((post) => post.id == postID)

  return (
      <>
        <h1 className="text-5xl font-semibold mb-7">{filteredPost.title}</h1>
        <p className="max-w-[700px] mx-auto">{filteredPost.body}</p>
        <UpvoteButton />
      </>
  )
}
