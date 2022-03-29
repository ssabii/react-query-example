import React from 'react'
import useUsers from '../hooks/useUsers'

const UserList = () => {
  const { data } = useUsers()

  return (
    <section>
      <h1>사용자 목록</h1>
      {data &&
        data.map((user: any) => (
          <div key={user.id}>
            {user.username} {user.email}
          </div>
        ))}
    </section>
  )
}

export default UserList
