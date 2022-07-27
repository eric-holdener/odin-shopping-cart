import { Dropdown } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { clear, decrement, increment } from "../../redux/cart-slice";

export default function CartItem(props) {
  const dispatch = useDispatch();

  return(
    <>
      <Dropdown.Item>
        <h6>{props.item.title}</h6>
        <p>Price: ${props.item.price}</p>
        <p>Quantity: {props.item.quantity}</p>
        <p>Total Price: ${parseInt(props.item.price)*props.item.quantity}</p>
        <button onClick={() => dispatch(increment(props.item.id))}>+1</button>
        <button onClick={() => dispatch(decrement(props.item.id))}>-1</button>
      </Dropdown.Item>
    </>
  )
}