import { getServerSession } from 'next-auth'
import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route'

async function AccountPage() {
    const session = await getServerSession(authOptions)
  return (
    <div>
      Welcome {session.user?.name}
    </div>
  )
}

export default AccountPage
