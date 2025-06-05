
export const EndPointComments = ({ users }) => {
  return (
    <>
      {users.map( user => <li key={user.id}>  { user.body } </li>)}
    </>
  )
}
