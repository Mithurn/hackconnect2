// src/app/dashboard/page.tsx

import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import LogoutButton from '@/components/LogoutButton'

// This line is crucial. Make sure your function is the default export.
export default async function DashboardPage() {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Dashboard</h1>
      <p className="mb-8">
        You are logged in as:{' '}
        <span className="font-mono text-green-600">{user.email}</span>
      </p>
      <LogoutButton />
    </div>
  )
}