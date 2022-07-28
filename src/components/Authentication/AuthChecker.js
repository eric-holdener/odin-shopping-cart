export default function AuthChecker(props) {
  if (!loggedInUser) {
    return (
      <p>You must be logged in to access this page.</p>
    )
  }
  return props.children
}