import React from 'react'
import LoginWithGoogle from '../components/buttons/LoginWithGoogle'
function page() {
  return (
    <div>
      <div className="bg-violet-200 border p-4 max-w-xs mx-auto text-center">
        <h1 className="text-4xl font-bold text-center mb-4">Sign In</h1>
        <p className="text-slate-500">Choose any one method to Login</p>
        <LoginWithGoogle/>
      </div>
    </div>
  )
}

export default page
