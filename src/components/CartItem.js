import { Dropdown } from "react-bootstrap"

export default function CartItem(props) {
  return(
    <>
      <Dropdown.Item>
        <p>{props.item.price}</p>
      </Dropdown.Item>
    </>
  )
}