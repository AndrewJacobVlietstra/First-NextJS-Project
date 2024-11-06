import Form from "@/components/form";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default async function page() {
  return (
    <main className="text-center pt-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">Create Post</h1>

      <Form />

      <LogoutLink className="border rounded bg-black p-2">
        Log Out
      </LogoutLink>
    </main>
  )
}
