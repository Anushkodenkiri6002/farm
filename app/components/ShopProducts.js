"use client";
export default function ShopProducts({ products, title,  }) {

  return (

        
    <div className="max-w-6xl mx-auto px-5 py-12">
<div>
            <div className="flex items-center justify-between mb-8">
                          
          <p className="text-gray-600 ">
            Showing 8 of 20 results
          </p>
    </div>
      <div className="flex items-center justify-between mb-8">
                
        <select className="border px-3 py-2 rounded">
          <option>Sort by latest</option>
          <option>Sort by price</option>
          <option>Sort by popularity</option>
        </select>
      </div>
      </div>
                                                   
      {title && <h2 className="text-2xl font-bold mb-8">{title}</h2>}
        
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="border rounded-xl p-4 shadow-sm hover:shadow-lg transition">
            <div className="w-full h-56 bg-gray-200 rounded-lg overflow-hidden">
              <img src={product.img} alt={product.name} className="w-full h-full object-cover" />
            </div>

            <h3 className="font-bold text-"></h3>

            <p className="text-gray-400 font-bold mt-3 hover:text-green-600 transition cursor-pointer">
              {product.category}
            </p>
                                                         
            <h3 className="font-semibold text-gray mt-4 hover:text-green-600 transition cursor-pointer">{product.name}</h3>
            <p className="text-green-600 font-bold mt-1 hover:text-green-600 transition cursor-pointer">{product.price}</p>
                            
            <button className="bg-white-500 hover:bg-yellow-600 text-black w-50 py-2 ml-2 mt-4 rounded-full">

              🛍️ Add to Cart
            </button>
          </div>
        ))}
      </div>
              
    </div>
  );
}
