import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './components/Defaults/Homepage';
import Product from './components/Products/Product';
import ProductDetails from './components/Products/ProductDetails';
import Category from './components/Category/Category';
import NotFound from './components/Defaults/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import Store from './redux/store';
import Checkout from './components/Cart/Checkout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Homepage />}/>
            <Route path="products" element={<Product />}>
              <Route path=":category" element={<Category />} />
            </Route>
            <Route path="product/:productId" element={<ProductDetails />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="*" element={<NotFound/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
