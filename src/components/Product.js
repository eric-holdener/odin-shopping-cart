import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Product(props) {
  const [data, setData] = useState();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetchData().then(product => setData(product))
  }, []);

  async function fetchData() {
    const product = await props.product;
    const result = await fetch(`https://fakestoreapi.com/products/${product.id}`);
    const json = await result.json();
    return json
  }

  function handleChange(event) {
    const value = event.replace(/\+|-/ig, '');
    setQuantity(value);
  }

  function addItemsToCart() {
    for(let i=0; i<quantity; i++) {
      props.addToCart({
        itemId: data.id,
        name: data.title,
        price: data.price
      })
    }
  }

  return (
    <>
      {data ? (
        <div className="productCard">
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
                addItemsToCart()
                }}>Add to Cart</button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
      <Outlet />
    </>
  )
}