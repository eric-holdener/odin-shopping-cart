import { Navigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";

export default function AuthChecker(props) {
  const { loggedInUser } = useContext(UserContext);
  if (!loggedInUser) {
    return (
      <p>You must be logged in to access this page.</p>
    )
  } else {
    return props.children;
  }

}