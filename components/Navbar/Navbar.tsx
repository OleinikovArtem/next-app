import Link from 'next/link'
import Image from 'next/image'
import { auth } from '@/auth'
import LoginButton from '@/components/Navbar/LoginButton'
import LogoutButton from '@/components/Navbar/LogoutButton'

const Navbar = async () => {
  const session = await auth()

  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/" >
          <Image src="/logo.png" alt="logo" width={144} height={30}  />
        </Link>

        <div className="flex items-center gap-5 text-black">
          {session && session.user ? (
            <>
              <Link href="/startup/create" >
                <span>Create</span>
              </Link>

              <LogoutButton />

              <Link href={`/user/${session?.user?.id}`} >
                <span>{session?.user?.name}</span>
              </Link>
            </>
          ) : <LoginButton /> }
        </div>
      </nav>
    </header>
  )
}
export default Navbar

