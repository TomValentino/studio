'use client'
import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(null); // ← Start with null to avoid mismatch
  const [showCart, setShowCart] = useState(false); // Track visibility of slider cart

  useEffect(() => {
    const stored = localStorage.getItem("cart");
    const parsed = stored ? JSON.parse(stored) : [];
    setCart(parsed);
    console.log("Cart loaded from localStorage:", parsed);
  }, []);

  useEffect(() => {
    if (cart !== null) {
      localStorage.setItem("cart", JSON.stringify(cart));
      console.log("Cart saved to localStorage:", cart);
    }
  }, [cart]);

  const addToCart = (product, version = product.versions[0], quantity = 1) => {
    setCart((prev = []) => {
      const existing = prev.find((item) => item.id === product.id);
      const updatedCart = existing
        ? prev.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          )
        : [
            ...prev,
            {
              id: product.id,
              name: product.name,
              image: product.images[0].src,
              icon: product.icon,
              price: version.price,
              stripePriceId: version.stripePriceId,
              quantity,
            },
          ];
      console.log("Added to cart:", product.name, `Qty: ${quantity}`);
      console.log("Updated cart:", updatedCart);
      return updatedCart;
    });
  };

  const removeFromCart = (id) => {
    setCart((prev = []) => {
      const updatedCart = prev.filter((item) => item.id !== id);
      console.log(`Removed item with id ${id} from cart`);
      console.log("Updated cart:", updatedCart);
      return updatedCart;
    });
  };

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return;
    setCart((prev = []) => {
      const updatedCart = prev.map((item) =>
        item.id === id ? { ...item, quantity } : item
      );
      console.log(`Updated quantity for item ${id} to ${quantity}`);
      console.log("Updated cart:", updatedCart);
      return updatedCart;
    });
  };

  const clearCart = () => {
    setCart([]);
    console.log("Cart cleared");
  };

  const toggleCart = () => {
    setShowCart((prev) => !prev); // Toggle cart visibility
  };

  const totalAmount = cart
    ? cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
    : 0;

  if (cart === null) return null; // Don’t render anything until client hydration is done

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalAmount,
        showCart,
        toggleCart, // Add this to the context
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
