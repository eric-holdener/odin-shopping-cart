import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";
import { useLocation } from "react-router-dom";

export default function Category(props) {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  const location = useLocation();

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
          {console.log(location)}
          {data.map((product) => <Product product={product} key={product.id}/>)}
        </div>
      ) : (
        <><p>Loading...</p></>
      )}
    </>

  )
}