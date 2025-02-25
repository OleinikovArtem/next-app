import Link from 'next/link'

const users = [
  { id: 1, name: 'User 1' },
  { id: 2, name: 'User 2' },
  { id: 3, name: 'User 3' },
  { id: 4, name: 'User 4' },
]

const UsersPage = () => {
  return (
    <div>
      <h1>Dashboard users</h1>
      <ul className="mt-10">
        {users.map(user => (
          <li key={user.id}>
            <Link href={`/dashboard/users/${user.id}`}>
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UsersPage
