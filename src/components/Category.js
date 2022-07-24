import { useParams } from "react-router-dom";

export default function Category() {
  let params = useParams();
  return (
    <h2>{params.category}</h2>
  )
}