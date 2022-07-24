import { Link } from "react-router-dom"

export default function Header(props) {
  return(
    <div className="header">
      <div className="headerSub">
        <Link to={"/"} className="headerLinks">Home</Link>
      </div>
      <div className="headerSub">
        <Link to={"/"} className="headerLinks">User</Link>
        <Link to={"/cart"} className="headerLinks">Cart</Link>
      </div>
    </div>
  )
}