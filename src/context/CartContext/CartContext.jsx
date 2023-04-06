import { createContext, useEffect, useState } from "react";
 
export const cartContext = createContext(null);
 
const defaultCart = [];
const defaultCartCount = 0;
const defaultTotalToPay = 0;
const cartLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]');
const quantityLocalStorage = JSON.parse(localStorage.getItem('quantity') || '0');
const priceLocalStorage = JSON.parse(localStorage.getItem('price') || '0');

const CartContext = ({ children }) => {
  
  const [cart, setCart] = useState(cartLocalStorage);
  const [cartCount, setCartCount] = useState(quantityLocalStorage);
  const [totalToPay, setTotalToPay] = useState(priceLocalStorage);

  useEffect (() => {
    localStorage.setItem('cart', JSON.stringify(cart));
	}, [cart]);

  useEffect (() => {
    localStorage.setItem('quantity', JSON.stringify(cartCount));
	}, [cartCount]);

  useEffect (() => {
    localStorage.setItem('price', JSON.stringify(totalToPay));
	}, [totalToPay]);

  const increaseCartCount = (quantity) => {
    setCartCount(cartCount + quantity); 
  }

  const decreaseCartCount = product => {
    setCartCount(cartCount - product.quantity);
  }
 
  const isInCart = (productId) =>
    cart.some((product) => product.id === productId);
 
  const updateProductQuantity = (product, quantity) =>{
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + quantity,
              totalPrice: item.totalPrice + (product.price * quantity) 
            }
          : item
      )
    );
    setTotalToPay(totalToPay + (product.price * quantity));
  } 
 
  const addNewProduct = (product, quantity) => {
    setCart((prevCart) => [...prevCart, { ...product, quantity, totalPrice: product.price * quantity }]);
    setTotalToPay(totalToPay + (product.price * quantity));
  }
 
  const addItem = (product, quantity) => {
    if (isInCart(product.id)) {
      updateProductQuantity(product, quantity);
    } else {
      addNewProduct(product, quantity);
    }
  };
 
  const removeProduct = (product) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== product.id));
    decreaseCartCount(product);
    setTotalToPay(totalToPay - (product.price * product.quantity));
  };
 
  const clear = () => {
    setCart(defaultCart);
    setCartCount(defaultCartCount);
    setTotalToPay(defaultTotalToPay);
  }
 
  const getQuantity = (productId) => {
    const item = cart.find((product) => product.id === productId);
    return item ? item.quantity : 0;
  };
  
  return (
    <>
      <cartContext.Provider 
      value={{ 
        addItem,
        getQuantity, 
        cart, 
        removeProduct, 
        increaseCartCount, 
        cartCount, 
        clear, 
        totalToPay 
      }} >
        {children}
      </cartContext.Provider>
    </>
  );
}

export default CartContext;