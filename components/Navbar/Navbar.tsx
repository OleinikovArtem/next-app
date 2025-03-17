import Link from "next/link"
import Image from "next/image"
import { auth } from "@/auth"
import LoginButton from "@/components/Navbar/LoginButton"
import LogoutButton from "@/components/Navbar/LogoutButton"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { BadgePlus } from "lucide-react"

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
                <span className="max-sm:hidden">Create</span>
                <BadgePlus className="sm:hidden"  />
              </Link>

              <LogoutButton />

              <Link href={`/user/${session?.id}`}>
                <Avatar className="size-10">
                  <AvatarImage
                    src={session?.user?.image || ""}
                    alt={session?.user?.name || ""}
                  />
                  <AvatarFallback>AV</AvatarFallback>
                </Avatar>
              </Link>
            </>
          ) : <LoginButton /> }
        </div>
      </nav>
    </header>
  )
}
export default Navbar

