import logo from './logo.svg';
import './App.css';
import { Main, NavComponent } from './components/main/Main';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Counter } from './components/Counter';
import { Route, Routes } from 'react-router-dom';
import { Table } from './components/table/Table';
import { ProductDetails } from './components/productDetails/ProductDetails';
import { Cart } from './components/cart/Cart';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path={`/products`} element={<Main/>}/>
        <Route path={`/cart`} element={<Cart/>}/>
        <Route path={`/table`} element={<Table/>}/>
        <Route path={`/products/:productId`} element ={<ProductDetails/>}/>
        {/* <Route path={`/pr`} element ={<ProductDetails/>}/> */}
      </Routes>
    </>
  );
}
export default App;
