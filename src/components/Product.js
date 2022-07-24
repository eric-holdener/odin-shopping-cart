import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Product(props) {
  const [data, setData] = useState();

  useEffect(() => {
    fetchData().then(product => setData(product))
  }, [])

  async function fetchData() {
    const product = await props.product;
    console.log(product);
    const result = await fetch(`https://fakestoreapi.com/products/${product.id}`);
    const json = await result.json();
    return json
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
          </div>
        </div>
      ) : (
        <></>
      )}
      <Outlet />
    </>
  )
}