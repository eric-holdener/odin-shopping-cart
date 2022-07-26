import { Link } from "react-router-dom"
import ShoppingCart from "./ShoppingCart" 

export default function Header(props) {
  return(
    <div className="header">
      <div className="headerSub">
        <Link to={"/"} className="headerLinksHome">Home</Link>
      </div>
      <div className="headerSub">
        <Link to={"/"} className="headerLinksUser">User</Link>
        <ShoppingCart className="headerLinks"/>
      </div>
    </div>
  )
}