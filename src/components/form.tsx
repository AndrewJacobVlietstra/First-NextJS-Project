import { createPost } from "@/actions/actions";

export default function Form() {
  return (
    <form action={createPost} className="flex flex-col max-w-[400px] mx-auto gap-2 my-10" >
        <input 
          type="text" 
          name="title" 
          placeholder="Title for new post" 
          className="border rounded text-black h-10 px-3" 
        />
        <textarea 
          name="body" 
          placeholder="Body content for new post"
          className="border rounded px-3 py-2 text-black"
          rows={6}
          required
        />
        <button className="h-10 bg-blue-500 rounded px-4 text-white">
          Submit
        </button>
      </form>
  )
}
