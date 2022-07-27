import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart-slice";

export default function ProductDetails() {
  const [data, setData] = useState(null);
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.productId}`)
      .then(res => res.json())
      .then(json => setData(json))
  }, [])

  return(
    <div>
      {data ? (
        <>
          <div>
            <img src={data.image} className="productImage"></img>
          </div>
          <div>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
          </div>   
          <div>
            <button onClick={() => {
                  dispatch(addToCart([data, 1]))
                }}>Add to Cart
            </button>
          </div>     
        </>
      ) : (
        <>
         <p>Loading...</p>
        </>
      )}

    </div>
  )
}