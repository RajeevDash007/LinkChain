import React from 'react'
import LoginWithGoogle from '@/components/buttons/LoginWithGoogle'
function page() {
  return (
    <div>
      <div className="bg-slate-900 border p-4 max-w-xs mx-auto text-center rounded-md mt-40">
        <h1 className="text-4xl font-bold text-center mb-4 text-slate-100">Sign In</h1>
        <p className="text-slate-300">Choose any one method to Login</p>
        <LoginWithGoogle/>
      </div>
    </div>
  )
}

export default page
