import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function CategoryCard(props) {
  const [category, setCategory] = useState(props.category);
  const [link, setLink] = useState();
  const [linkSet, setLinkSet] = useState(false);
  
  return(
    <Link to={`/products/${category}`} className="categoryLink">
      <div className="categoryCard">
        <p>Placeholder Text for image</p>
        <h2>{category}</h2>
      </div>
    </Link>
  );
}