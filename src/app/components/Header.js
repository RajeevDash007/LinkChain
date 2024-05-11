import React from 'react'
import Link from "next/link";
function Header() {
  return (
    <div>
      <header className="bg-purple-700 text-white border-b-4 border-yellow-400 p-4 flex justify-between">
        <div className="flex gap-12 items-center">
          <Link href={"/"} className="text-lg">LINK<span className="text-yellow-400 font-bold">Chain</span></Link>
          <nav className="flex gap-4 text-sm">
            <Link href={"/"}>Home</Link>
            <Link href={"/pricing"}>Pricing</Link>
            <Link href={"/contact"}>Contact</Link>
          </nav>
        </div>

        <div className="text-sm flex gap-4 items-center">
          <Link href={"/login"}>Login</Link>
          <Link href={"/Register"}>Create an account</Link>
        </div>
      </header>
    </div>
  )
}

export default Header
