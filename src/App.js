import './App.css';
import HeaderFooter from './components/HeaderFooter';
import { Outlet } from "react-router-dom";
import { CartProvider } from "./context/cart-context"

function App() {

  const cart = {};
  return (
    <div className='app-container'>
      <CartProvider value={cart}>
        <HeaderFooter>
          <div className='contentContainer'>
            <Outlet />
          </div>
        </HeaderFooter>
      </CartProvider>
    </div>
  );
}

export default App;
