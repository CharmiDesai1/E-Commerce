import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Cart from "./screens/Cart";
import Home from "./screens/Home";
import Login from './screens/Login';
import ProductScreen from "./screens/Product";
import SignUp from "./screens/SignUp";
import Wishlist from "./screens/WishList";

function App() {

  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/:name/wishlist' element={<Wishlist />} />
        <Route path='/:name/cart' element={<Cart />} />
        <Route path='/home/:name' element={<Home />} />
        <Route path='/product/:id' element={<ProductScreen />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
