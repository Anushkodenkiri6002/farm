import Link from "next/link";  
import ShopProducts from "../components/ShopProducts";

const shopProducts = [
  { id: 1, category:"CROP,ORGANIC ",name: "Strawberry", price: "$12.00", img: "https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fproducts%2F1.png&w=1080&q=75" },
  { id: 2, category:"VEGETABLES,WINTER",name: "Organic Carrot", price: "$5.00", img: "https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fproducts%2F2.png&w=1080&q=75" },
  {id:3, category:"FRUITS,JUICY",name:"Fresh Red Seedless",price:"$14.00",img:"https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fproducts%2F3.png&w=1080&q=75"},
  {id:4,category:"FRUITS,JUICY",name:"Organic Sweet Corn",price:"$8.00",img:"https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fproducts%2F4.png&w=1080&q=75"},
  {id:5,category:"FISH,HEALTH",name:"Fresh Fish",price:"$25.00",img:"https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fproducts%2F5.png&w=1080&q=75"},
  {id:6,category:"SEASONAL,FRUIT",name:"Fresh Banana",price:"$13.00",img:"https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fproducts%2F6.png&w=1080&q=75"},
  {id:7,category:"SEASONAL,VEGETABLES",name:"Organic Cucumber",price:"$3,00",img:"https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fproducts%2F7.png&w=1080&q=75"},
  {id:8,category:"SEASONAL,FRUIT",name:"Green Avacado",price:"$6.00",img:"https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fproducts%2F8.png&w=1080&q=75"}
];

export default function ShopPage() {
  return (
    <div>
    

      <div
        className="w-full h-[360px] bg-cover bg-center flex justify-center items-center text-white relative"
        style={{
          backgroundImage: "url(https://png.pngtree.com/thumb_back/fh260/background/20240929/pngtree-professional-photo-of-smart-tractor-working-in-the-field-with-network-image_16274865.jpg)"
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <h1 className="text-4xl font-bold relative z-10">Products</h1>
      </div>
<div>
            
      <ShopProducts products={shopProducts} title="Our Organic Products" />

      <div className="flex gap-4 justify-center mt-12 mb-20">
        <Link href="/shop"className="px-5 py-2 border rounded-full hover:bg-green-500 hover:text-white transition" >1</Link>
        <Link href="/shop/page2"className="px-5 py-2 border rounded-full hover:bg-green-500 hover:text-white transition" >2</Link>
        <Link href="/shop/page3"className="px-5 py-2 border rounded-full hover:bg-green-500 hover:text-white transition" >3</Link>
      </div>
    
    </div>
    </div>
  );
}
