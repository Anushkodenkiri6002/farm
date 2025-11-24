import React from 'react'
import  {useRouter} from "next/navigation"
const Navbar = () => {
   let router=useRouter()
  return (
    <div>
           <div className="w-full h-20px bg-gray-950 sm:w-360px flex flex-row md:gap-x-270" >
      <img src="https://public-assets.envato-static.com/assets/logos/envato_market-dd390ae860330996644c1c109912d2bf63885fc075b87215ace9b5b4bdc71cc8.svg" alt="Farm Banner" className="w-50 h-15 pl-5 "/>
      <button className="hidden md:block pr-5 bg-green-700 text-white w-30 h-12 rounded-xl mt-1">Buy Now</button>
     </div>
     <div className="w-full h-20px bg-green-950 sm:w-360px flex flex-row text-white font-bold items:center" > 
      <div className="w-15 h-15 pl-5 pt-3">
      <img src="https://i.pinimg.com/736x/21/a0/6a/21a06a1a4fe7fc5f86735d3f603dea0f.jpg"/>
     </div>
     <p className="pt-3 pl-5 text:xl md:text-2xl">Opening Hours : Sunday- Friday, 08:00 am - 05:00pm</p>
     
     <img src="https://i.pinimg.com/736x/0d/d9/45/0dd9459bf6c00fd6d0ee407dbf50ccad.jpg" className="w-15 h-15 pl-3 pt-2 pb-2"/>
     <p className="hidden md:block pt-3">+880 1234 56789</p>
      </div>
   <nav className="flex items-center justify-between px-6 md:px-10 py-4 bg-white dark:bg-black shadow-sm">
  <div className="flex items-center space-x-3">
    <img 
      src="https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo.png&w=1920&q=75" 
      className="w-40 h-10 object-contain" 
      alt="Logo"
    />
  </div>
<button onClick={()=>{
                        router.push("/");
                    }} className=" hidden md:block hover:underline  hover:text-red-200 dark:text-white">Home</button>
                    <button onClick={()=>{
                        router.push("/cart")
                    }} className=" hidden md:block hover:underline  hover:text-red-200  dark:text-white">Cart</button>
                    <button onClick={()=>{
                        router.push("/services")
                    }} className=" hidden md:block hover:underline  hover:text-red-200  dark:text-white">services</button>
                    <button onClick={()=>{
                        router.push("/blog")
                    }} className=" hidden md:block hover:underline  hover:text-red-200  dark:text-white">Blog</button>
                    <button onClick={()=>{
                        router.push("/shop")
                    }} className=" hidden md:block hover:underline  hover:text-red-200  dark:text-white">Shop</button>
                    <button onClick={() => {document.documentElement.classList.toggle("dark");
  }}
  className="hidden md:block px-3 py-2 rounded-lg bg-gray-200 ">
  🌙
</button>

  
  <div className="flex items-center space-x-4 md:space-x-6">
    <div className="relative">
      <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
        <span className="text-indigo-700 text-xl">🛒</span>
      </div>
      <span className="absolute -top-1 -right-1 bg-orange-400 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">0</span>
    </div>

    <button className="border border-orange-400 text-gray-700 dark:text-white px-3 md:px-2 py-2 rounded-full font-semibold hover:bg-orange-400 hover:text-white  transition">
      Register
    </button>
  </div>
</nav>

    </div>
  )
}

export default Navbar
