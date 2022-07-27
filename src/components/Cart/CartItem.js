import { Dropdown } from "react-bootstrap"

export default function CartItem(props) {
  return(
    <>
      <Dropdown.Item>
        <h6>{props.item.title}</h6>
        <p>Price: ${props.item.price}</p>
        <p>Quantity: {props.item.quantity}</p>
        <p>Total Price: ${parseInt(props.item.price)*props.item.quantity}</p>
      </Dropdown.Item>
    </>
  )
}