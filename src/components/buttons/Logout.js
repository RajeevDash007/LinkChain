'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { signOut } from 'next-auth/react'
import React from 'react'

function Logout() {
  return (
    <div>
      <button
        onClick={() => signOut()}
        className='text-white p-1 bg-red-600 hover:bg-red-800 shadow-lg rounded-full hover:shadow-xl border-2 border-white flex gap-2 items-center justify-center'
      >
        logout
        <FontAwesomeIcon icon={faRightFromBracket}/>
      </button>
    </div>
  )
}

export default Logout