import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";
import { useLocation } from "react-router-dom";
// import { NotificationManager, NotificationContainer } from 'react-notifications';

export default function Category(props) {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState(checkLocalStorage());
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

  useEffect(() => {
    localStorage.setItem("cartContents", JSON.stringify(cart));
  }, [cart]);

  function checkLocalStorage() {
    return (
      JSON.parse(localStorage.getItem('cartContents')) || []
    );
  }

  function addToCart(item) {
    // NotificationManager.success(`${item.name} added to cart.`);
    setCart((prevCartContents) => [...prevCartContents, item]);
  }

  return (
    <>
      {!isLoading ? (
        <div className="productsContainer">
          {console.log(location)}
          {data.map((product) => <Product product={product} key={product.id} addToCart={addToCart}/>)}
        </div>
      ) : (
        <><p>Loading...</p></>
      )}
    </>

  )
}