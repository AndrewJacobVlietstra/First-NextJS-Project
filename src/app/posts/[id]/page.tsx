import SelectedPost from "@/components/selected-post"
import { Suspense } from "react";

export default async function PostDisplay({ params }: {
  params: {id: string}
}) {
  const postID = params.id;

  return (
    <main className="px-7 pt-24 text-center">
      <Suspense fallback="Loading...">
        <SelectedPost postID={postID} />
      </Suspense>
    </main>
  )
}
