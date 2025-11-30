"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);   

  return (
    <div>
      
      <div className="w-full bg-gray-950 flex flex-row justify-between items-center px-5 py-2">
        <img
          src="https://public-assets.envato-static.com/assets/logos/envato_market-dd390ae860330996644c1c109912d2bf63885fc075b87215ace9b5b4bdc71cc8.svg"
          alt=""
          className="w-32"
        />
        <button className="hidden md:block bg-green-700 text-white px-5 py-2 rounded-xl">
          Buy Now
        </button>
      </div>

   
      <div className="w-full bg-green-950 text-white font-bold flex flex-row items-center px-5 py-2 gap-3">
        <img
          src="https://i.pinimg.com/736x/21/a0/6a/21a06a1a4fe7fc5f86735d3f603dea0f.jpg"
          className="w-10 h-10"
        />
        <p className="text-sm md:text-lg">
          Opening Hours : Sunday–Friday, 08:00 am – 05:00 pm
        </p>
        <img
          src="https://i.pinimg.com/736x/0d/d9/45/0dd9459bf6c00fd6d0ee407dbf50ccad.jpg"
          className="w-10 h-10 hidden md:block"
        />
        <p className="hidden md:block text-lg">+880 1234 56789</p>
      </div>

     
      <nav className="flex items-center justify-between px-6 md:px-10 py-4 bg-white dark:bg-black shadow-sm relative">

      
        <img
          src="https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo.png&w=1920&q=75"
          className="w-40 h-10 object-contain"
        />

       
        <div className="hidden md:flex space-x-6 items-center">
          <button onClick={() => router.push("/")} className="hover:underline">Home</button>
          <button onClick={() => router.push("/cart")} className="hover:underline">Cart</button>
          <button onClick={() => router.push("/services")} className="hover:underline">Services</button>
          <button onClick={() => router.push("/blog")} className="hover:underline">Blog</button>
          <button onClick={() => router.push("/shop")} className="hover:underline">Shop</button>

          <button
            onClick={() => document.documentElement.classList.toggle("dark")}
            className="px-3 py-2 rounded-lg bg-gray-200"
          >
            🌙
          </button>

          <button className="border border-orange-400 px-3 py-2 rounded-full hover:bg-orange-400 hover:text-white">
            Register
          </button>
        </div>

        
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✖" : "☰"}
        </button>

        {open && (
          <div className="absolute top-20 left-0 w-full bg-white dark:bg-black shadow-md flex flex-col p-5 space-y-4 md:hidden z-50">

            <button onClick={() => router.push("/")} className="py-2 border-b">Home</button>
            <button onClick={() => router.push("/cart")} className="py-2 border-b">Cart</button>
            <button onClick={() => router.push("/services")} className="py-2 border-b">Services</button>
            <button onClick={() => router.push("/blog")} className="py-2 border-b">Blog</button>
            <button onClick={() => router.push("/shop")} className="py-2 border-b">Shop</button>

            <button
              onClick={() => document.documentElement.classList.toggle("dark")}
              className="py-2 border-b"
            >
              Toggle Dark Mode 🌙
            </button>

            <button className="border border-orange-400 px-3 py-2 rounded-full hover:bg-orange-400 hover:text-white w-32">
              Register
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
