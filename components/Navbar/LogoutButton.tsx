import { signOut } from '@/auth'

const LogoutButton = () => {
  return (
    <form action={async () => {
      "use server"
      await signOut({ redirectTo: "/" })
    }}>
      <button type="submit">Logout</button>
    </form>
  )
}
export default LogoutButton
