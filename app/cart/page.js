"use client";
import { useEffect, useState } from "react";

export default function CartPage() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
      setCart(storedCart);
    }
  }, []);

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="max-w-4xl mx-auto px-5 py-12">
      <h2 className="text-3xl font-bold mb-6">🛍️ Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">No items in cart</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} className="flex items-center gap-4 border p-4 mb-4 rounded-lg shadow-sm">
            <img src={item.img} alt={item.name} className="w-24 h-24 object-cover rounded-lg" />

            <div className="flex flex-col flex-grow">
              <p className="text-gray-400 text-sm">{item.category}</p>
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <p className="text-green-600 font-bold">{item.price}</p>
            </div>

            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}
