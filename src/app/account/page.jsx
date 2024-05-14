import { getServerSession } from 'next-auth'
import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route'
import {redirect} from 'next/navigation'

async function AccountPage({searchParams}) {
    const session = await getServerSession(authOptions)
    const desiredUsername = searchParams?.desiredUsername
    if(!session){
        redirect('/');
    }
  return (
    <div>
     <form>
        <h1 className="dark:text-white text-4xl font-bold text-center mb-4 mt-40">
            Your <span className='text-yellow-400'>Username</span>, Your Key <span className='text-yellow-400'>Link</span>
        </h1>
        <h2 className="dark:text-slate-400 text-slate-600 text-2xl font-bold text-center mb-6">
            Choose your Username
        </h2>
        <input type="text" className='block p-2 mx-auto border-2 rounded-lg dark:border-yellow-400 border-purple-500 dark:bg-purple-200 bg-yellow-100 mb-4' placeholder='Your username' defaultValue={desiredUsername} />

        <button type="submit"
          className="bg-slate-700 p-1 px-7 shadow-sm hover:shadow-xl text-white rounded-full hover:bg-slate-900 dark:hover:bg-slate-500 block mx-auto">
            Claim your username
        </button>
     </form>
    </div>
  )
}

export default AccountPage
