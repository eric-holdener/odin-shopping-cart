import { Link } from "react-router-dom"
import ShoppingCart from "./ShoppingCart" 

export default function Header(props) {
  return(
    <div className="header">
      <div className="headerSub">
        <Link to={"/"} className="headerLinks">Home</Link>
      </div>
      <div className="headerSub">
        <Link to={"/"} className="headerLinks">User</Link>
        <ShoppingCart className="headerLinks"/>
      </div>
    </div>
  )
}