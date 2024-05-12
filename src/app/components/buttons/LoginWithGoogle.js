'use client'
import React from 'react'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function LoginWithGoogle() {
  return (
    <div>
      <button onClick={()=>{}} className="p-2 border bg-white shadow-lg flex justify-center gap-6 text-center w-full mt-4 items-center hover:shadow-xl">
            <FontAwesomeIcon icon={faGoogle} className='h-6 text-blue-500'/>
            <span>Sign In with Google</span>
        </button>
    </div>
  )
}

export default LoginWithGoogle
