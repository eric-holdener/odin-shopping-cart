import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";

export default function Category() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  let params = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${params.category}`)
    .then(res=>res.json())
    .then(json=>{
      setData(json);
    })
    .then(list => {
      setIsLoading(false);
    })
  }, []);


  return (
    <>
      {!isLoading ? (
        <div className="productsContainer">
          {data.map((product) => <Product product={product} key={product.id}/>)}
        </div>
      ) : (
        <><p>Loading...</p></>
      )}
    </>

  )
}