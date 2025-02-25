import React from 'react'

type Params = {
  userId: string
}

const UserDetailsPage = async ({ params }: { params: Params }) => {
  const { userId } = await params
  return (
    <div>
      <h1 className="text-3xl ">User Profile {userId}</h1>
    </div>
  )
}

export default UserDetailsPage
