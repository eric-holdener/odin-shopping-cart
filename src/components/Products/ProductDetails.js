import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ProductDetails() {
  const location = useLocation();
  const [data, setData] = useState(location.state.data);

  return(
    <div>
      <div>
        <img src={data.image} className="productImage"></img>
      </div>
      <div>
        <h1>{data.title}</h1>
        <p>{data.description}</p>
      </div>
    </div>
  )
}