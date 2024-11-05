"use client";

import { useState } from "react"

export default function UpvoteButton() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => {setCount(count + 1)}} className="bg-blue-500 p-2 rounded-md mt-8">
      Upvote
    </button>
  )
}
