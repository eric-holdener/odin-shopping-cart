import { Outlet } from "react-router-dom";

export default function Product() {
  return (
    <div>
      <p>Product</p>
      <Outlet />
    </div>
  )
}