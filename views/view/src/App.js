import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { ProductDetails } from './pages/ProductDetails';
import { ShopAll } from './pages/ShopAll';
import { ShoppingCart } from './pages/ShoppingCart';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';

function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/product/:id' element={<ProductDetails />}/>
        <Route path='/shopall' element={<ShopAll />}/>
        <Route path='/shoppingcart' element={<ShoppingCart />}/>
        <Route path='/signin' element={<SignIn />}/>
        <Route path='/signup' element={<SignUp />}/>
      </Routes>
    <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
