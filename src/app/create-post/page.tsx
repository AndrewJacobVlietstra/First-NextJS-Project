import { createPost } from "@/actions/actions";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";


export default async function page() {
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    return redirect('/api/auth/login?post_login_redirect_url=/create-post');
  }

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
