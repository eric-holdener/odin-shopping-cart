import { Link, Outlet } from "react-router-dom";
import { useState, useContext } from "react";
import CartContext from "../context/cart-context";

export default function Product(props) {
  const [data, setData] = useState(props.product);
  const [quantity, setQuantity] = useState(1);
  const cart = useContext(CartContext);

  function handleChange(event) {
    const value = event.replace(/\+|-/ig, '');
    setQuantity(value);
  }

  function addProductToCart() {
    if (data.id in cart) {
      cart[data.id].quantity += 1
    } else {
      cart[data.id] = {price: data.price, name: data.title, quantity: 1}
    }
  }

  return (
    <>
      {data ? (
        <>
          <Link to={`/product/${props.product.id}`} className="productCard" state={{data: data}}>
            <div className="productCardLeft">
              <img src={data.image} className="productImage"></img>
            </div>
            <div className="productCardRight">
              <p>{data.title}</p>
              <p>{data.price}</p>
              <p>{data.rating.rate}</p>

            </div>
          </Link>
          <div>
            <input type="text" pattern="[0-9]*" value={quantity} onChange={(e) => handleChange(e.target.value)}/>
            <button onClick={() => {
                addProductToCart()
              }}>Add to Cart</button>
          </div>
        </>
      ) : (
        <></>
      )}
      <Outlet />
    </>
  )
}