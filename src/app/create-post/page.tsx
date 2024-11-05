import { createPost } from "@/actions/actions";

export default function page() {
  return (
    <main className="text-center pt-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">Create Post</h1>

      <form action={createPost} className="h-10 space-x-2 mt-10" >
        <input 
          type="text" 
          name="title" 
          placeholder="Title for new post" 
          className="border rounded text-black h-full" 
        />
        <button className="h-full bg-blue-500 rounded px-4 text-white">
          Submit
        </button>
      </form>
    </main>
  )
}
