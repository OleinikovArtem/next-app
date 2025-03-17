import { signOut } from '@/auth'
import { LogOut } from 'lucide-react'

const LogoutButton = () => {
  return (
    <form className="cursor-pointer"  action={async () => {
      "use server"
      await signOut({ redirectTo: "/" })
    }}>
      <button type="submit" className="max-sm:hidden">Logout</button>
      <LogOut className="sm:hidden text-red-500" />
    </form>
  )
}
export default LogoutButton
