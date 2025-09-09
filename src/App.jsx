import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import SignUp from './pages/SignUp';
import ItemData from './components/ItemData';
import ItemInformetion from './components/ItemInformetion';
import AddCart from './components/AddCart';
import ClothProduct from './components/ClothProduct';
import Product from './pages/Product';
import Orders from './pages/Orders';
import SignIn from './pages/SignIn';
import UerProfile from './components/UerProfile';
import StoreStock from './pages/Admin/Stock';
import AddProduct from "./pages/Admin/AddProduct"
import AdminLogin from './pages/Admin/AdminLogin';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/stock" element={<StoreStock />} />
          <Route path="/add-product" element={<AddProduct />} />
        </Routes>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='signup' element={<SignUp />} />
          <Route path='signin' element={<SignIn />} />
          <Route path='item' element={<ItemData />} />
          <Route path='product' element={<Product />} />
          <Route path='iteminformetion' element={<ItemInformetion />} />
          <Route path='cart' element={<AddCart />} />
          <Route path='cloth-product' element={<ClothProduct />} />
          <Route path='orders' element={<Orders />} />
          <Route path='user-profile' element={<UerProfile />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
