import { useContext } from "react"
import CartContext from "../context/cart-context"
import CartItem from "./CartItem";
import { Dropdown } from "react-bootstrap";
import { DropdownButton } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import { useEffect, useState } from "react";
import { isCompositeComponentWithType } from "react-dom/test-utils";

export default function ShoppingCart() {
  const cart = useContext(CartContext);
  const [empty, setEmpty] = useState(true);

  useEffect(() => {
    console.log("use effect")
    console.log()
    isEmpty();
  }, [cart])

  function isEmpty() {
    if (empty === false && Object.keys(cart).length > 0) {
      setEmpty(true);
    };
  }

  function populateCart() {
    if (Object.keys(cart).length === 0) {
      console.log("empty")
      return (
        <Dropdown.Item>It looks like your cart is empty.</Dropdown.Item>
      )
    } else {
      for (const [key, value] of Object.entries(cart)) {
        console.log(`key = ${key}, value =`)
        console.log(value)
        return (<CartItem key={key} item={value} />)
      }
    }
  }

  return (
    <div className="headerLinksCart">
        <Dropdown className="dropdownZIndex">
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Cart
          </Dropdown.Toggle>
          <Dropdown.Menu className="dropdownZIndex">
            {!empty ? (
              <>
                {Object.keys(cart).map((value, idx) => {
                    <CartItem item={value} />
                  }
                )} 
              </>
            ): (
              <Dropdown.Item>It looks like your cart is empty.</Dropdown.Item>
            )}
          </Dropdown.Menu>
        </Dropdown> 
    </div>
  )
}