import { LoginForm } from "./components/LoginForm"

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ message?: string }>
}) {
  const params = await searchParams
  const message = params.message
  
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        {message && (
          <div className="mb-4 rounded-md bg-blue-50 p-4 text-blue-800">
            {message}
          </div>
        )}
        <LoginForm />
      </div>
    </div>
  )
}
