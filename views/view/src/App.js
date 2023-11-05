import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { ShopAll } from './pages/ShopAll';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import ContactUs from './pages/ContactUs';
import Profile from './pages/Profile';

function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/shopall' element={<ShopAll />}/>
        <Route path='/signin' element={<SignIn />}/>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/contactus' element={<ContactUs />}/>
        <Route path='/profile' element={<Profile />}/>


      </Routes>
    <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
