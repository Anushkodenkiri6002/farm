"use client";
export default function ShopProducts({ products, title }) {
  
  const addToCart = (product) => {
    console.log("product:",product)
    if (typeof window !== "undefined") {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const updatedCart = [...cart, product]; // Store whole product object
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      alert(`${product.name} added to cart!`);
    }
  };

  return (
    <div className="w-full md:-[360] px-5 py-12 dark:bg-black">
      <div>
        <div className="flex items-center justify-between mb-8">
          <p className="text-gray-600 dark:text-white">Showing 8 of 20 results</p>
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
          <div key={product.id} className="border rounded-xl border border-white p-4 shadow-sm hover:shadow-lg transition">
            <div className="w-full h-56 bg-gray-200  rounded-lg overflow-hidden">
              <img src={product.img} alt={product.name} className="w-full h-full object-cover" />
            </div>

            <p className="text-gray-400 font-bold mt-3">{product.category}</p>

            <h3 className="font-semibold mt-2">{product.name}</h3>
            <p className="text-green-600 font-bold mt-1">{product.price}</p>

            <button
              onClick={() => addToCart(product)}
              className="bg-yellow-500 hover:bg-yellow-600 text-black w-full py-2 mt-4 rounded-full"
            >
              🛍️ Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
