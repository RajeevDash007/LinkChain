import React from 'react'
import Link from "next/link";
import { getServerSession } from 'next-auth';
import { authOptions } from '../app/api/auth/[...nextauth]/route';
import Image from 'next/image';
import Logout from './buttons/Logout';
async function Header() {
  const session = await getServerSession(authOptions)
  console.log(session)
  return (
    <div>
      <header className="bg-purple-700 text-white border-b-4 border-yellow-400 p-4 flex justify-between">
        <div className="flex lg:gap-12 gap-8 items-center">
          <Link href={"/"} className="text-sm lg:text-lg">LINK<span className="text-yellow-400 font-bold">Chain</span></Link>
          <nav className="flex gap-4 text-[10px] lg:text-sm">
            <Link href={"/"}>Home</Link>
            <Link href={"/pricing"}>Pricing</Link>
            <Link href={"/contact"}>Contact</Link>
          </nav>
        </div>

        <div className="text-[12px] lg:text-sm flex gap-4 items-center">
          {!!session && (
            <>
            <Link href="/account" className='text-white flex justify-center items-center gap-2'>
              <Image
              src={session?.user?.image}
              alt="profile"
              width={30}
              height={30}
              className='rounded-full border-white border-spacing-1 border-2'
              />
              {session?.user?.name}
            </Link>
            <Logout/>
            </>
          )}
          
          {!session && (
            <>
              <Link href={"/login"}>Login</Link>
              <Link href={"/Register"}>Sign Up</Link>
            </>
          )}
        </div>
      </header>
    </div>
  )
}

export default Header
