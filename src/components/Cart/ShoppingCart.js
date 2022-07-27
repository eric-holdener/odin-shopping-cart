import CartItem from "./CartItem";
import { Dropdown } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ShoppingCart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  return (
    <div className="headerLinksCart">
        <Dropdown className="dropdownZIndex">
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Cart
          </Dropdown.Toggle>
          <Dropdown.Menu className="dropdownZIndex">
            {cart && cart.map((product) => {
              return <CartItem item={product} key={product.id}/>
            })}
          </Dropdown.Menu>
        </Dropdown> 
    </div>
  )
}