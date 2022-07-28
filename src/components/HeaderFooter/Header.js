import { NavLink } from "react-router-dom"
import ShoppingCart from "../Cart/ShoppingCart"
import { useContext } from "react"

export default function Header(props) {

  return(
    <div className="header">
      <div className="headerSub">
        <NavLink to={"/"} className="headerLinksHome">Home</NavLink>
      </div>
      <div className="headerSub">
        <NavLink to={"/login"} className="headerLinksUser">Login</NavLink>
        <ShoppingCart className="headerLinks"/>
      </div>
    </div>
  )
}