

export const EndPointUsers = ({ users }) => {
  return (
    <>
        {users.map( user => <li key={user.id}>  { user.name } </li>)}
    </>
  )
}
