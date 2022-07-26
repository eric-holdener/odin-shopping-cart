import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Product(props) {
  const [data, setData] = useState(props.product);
  const [quantity, setQuantity] = useState(1);

  function handleChange(event) {
    const value = event.replace(/\+|-/ig, '');
    setQuantity(value);
  }

  return (
    <>
      {data ? (
        <Link to={`/product/${props.product.id}`} className="productCard" state={{data: data}}>
          <div className="productCardLeft">
            <img src={data.image} className="productImage"></img>
          </div>
          <div className="productCardRight">
            <p>{data.title}</p>
            <p>{data.price}</p>
            <p>{data.rating.rate}</p>
            <div>
              <input type="text" pattern="[0-9]*" value={quantity} onChange={(e) => handleChange(e.target.value)}/>
              <button onClick={() => {
                  // do something
                }}>Add to Cart</button>
            </div>
          </div>
        </Link>
      ) : (
        <></>
      )}
      <Outlet />
    </>
  )
}