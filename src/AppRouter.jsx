import { Routes, Route } from 'react-router-dom';
import App from './App';
import ProductList from './ProductList';
import CartItem from './CartItem';
import AboutUs from './AboutUs';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/plants" element={<ProductList />} />
      <Route path="/cart" element={<CartItem />} />
      <Route path="/about" element={<AboutUs />} />
    </Routes>
  );
}

export default AppRouter;
