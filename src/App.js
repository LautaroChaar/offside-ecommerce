import { Suspense, lazy } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import './App.css';
import { Layout, Loading } from "./components";

const HomeView = lazy(() => import('./pages/Home/Home'));
const CartView = lazy(() => import('./pages/Cart/Cart'));
const CheckoutView = lazy(() => import('./pages/CheckoutForm/CheckoutForm'));
const ProductDetailView = lazy(() => import('./pages/ProductDetail/ProductDetail'));


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<Loading/>}>
          <Layout>
            <Routes>
              <Route path="/home" element={ <HomeView/> } />
              <Route path="/:section" element={ <HomeView/> } />
              <Route path="/product/:id" element={ <ProductDetailView/> } />
              <Route path="/cart" element={ <CartView/> } />
              <Route path="/checkout" element={ <CheckoutView/> }/>
              <Route path='*' element={ <Navigate to="/home" replace /> } />
            </Routes>
          </Layout>
        </Suspense>
      </BrowserRouter>      
    </div>
  );
}

export default App;
