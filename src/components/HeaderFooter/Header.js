import { NavLink } from "react-router-dom"
import ShoppingCart from "../Cart/ShoppingCart"

export default function Header(props) {
  return(
    <div className="header">
      <div className="headerSub">
        <NavLink to={"/"} className="headerLinksHome">Home</NavLink>
      </div>
      <div className="headerSub">
        <NavLink to={"/"} className="headerLinksUser">User</NavLink>
        <ShoppingCart className="headerLinks"/>
      </div>
    </div>
  )
}