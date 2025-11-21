export default function ServicesPage() {
  const services = [
    {
      title: "AGRICULTURE",
      subtitle: "PRODUCTS",
      description:
        "Seeing rather her you not esteem men settle genius excuse. Deal say over means age from. Comparison new melancholy son devonshire to the dispatched.",
      image:
        "https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F2.png&w=1920&q=75",
    },
    {
      title: "FRESH",
      subtitle: "VEGETABLES",
      description:
        "Perming rather her you not esteem men settle genius excuse. Deal say over means age from. Comparison new melancholy son devonshire to the dispatched.",
      image:
        "https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F3.png&w=1920&q=75",
    },
    {
      title: "DAIRY",
      subtitle: "PRODUCTS",
      description:
        "Seeing rather her you not esteem men settle genius excuse. Deal say over means age from. Comparison new melancholy son devonshire to the dispatched.",
      image:
        "https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F4.png&w=1920&q=75",
    },
  ];

  const products = [
    { name: "Blueberry", image: "https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F9.png&w=1080&q=75" },
    { name: "Strawberry", image: "https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F10.png&w=1080&q=75" },
    { name: "Cabbage", image: "https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F11.png&w=1080&q=75" },
    { name: "Maize", image: "https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F12.png&w=1080&q=75" },
    { name: "Orange", image: "https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F13.png&w=1080&q=75" },
    { name: "Apples", image: "https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F14.png&w=1080&q=75" },
  ];

  return (
    <div>

      <div
        className="w-full h-[360px] bg-cover bg-center flex justify-center items-center text-white relative"
        style={{
          backgroundImage:
            "url(https://png.pngtree.com/thumb_back/fh260/background/20240929/pngtree-professional-photo-of-smart-tractor-working-in-the-field-with-network-image_16274865.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <h1 className="text-4xl font-bold relative z-10">Services</h1>
      </div>


      <div className="min-h-screen bg-[#e5f0e9] py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-md p-10 hover:shadow-xl transition duration-300"
            >
              <div className="w-full mb-6 flex justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-40 h-40 object-contain"
                />
              </div>

              <h2 className="text-2xl font-extrabold tracking-wide hover:text-green-700 transition">
                {item.title}
              </h2>

              <p className="text-green-600 font-semibold mt-1 hover:text-green-800 transition">
                {item.subtitle}
              </p>

              <p className="text-gray-600 mt-4 leading-relaxed text-[15px]">
                {item.description}
              </p>

              <div className="mt-6">
                <button className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center text-2xl hover:bg-green-500 active:scale-95 transition">
                  →
                </button>
              </div>
            </div>
          ))}
        </div>


        <section className="w-full grid grid-cols-1 md:grid-cols-2 mt-20">
          <div className="p-16 flex flex-col justify-center bg-white">
            <h1 className="text-[65px] font-extrabold text-green-700 leading-tight">
              Healthy Life <br />
              With Fresh <br />
              Products
            </h1>
          </div>

          <div className="bg-[#194D42] text-white p-12 grid grid-cols-2 sm:grid-cols-3 gap-10">
            {products.map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <img src={item.image} className="w-20 h-20 object-contain" />
                <p className="mt-3 text-xl font-medium">{item.name}</p>
              </div>
            ))}
          </div>
        </section>


        <section className="mt-24 flex flex-col items-center">
          <p className="text-green-600 font-semibold">Customers’ Review</p>
          <h2 className="text-4xl font-bold mt-2 mb-10">What people say?</h2>

          <div className="bg-white max-w-3xl p-12 rounded-3xl shadow text-center">
            <div className="text-yellow-500 text-xl mb-4">⭐⭐⭐⭐⭐</div>

            <p className="text-gray-600 leading-relaxed">
              “Targeting consultation discover apartments. Indulgence off under folly
              death wrote cause her way spite. Plan upon yet way get cold spot its week.
              Seeing rather her you not esteem men settle genius excuse.”
            </p>

            <div className="mt-10 flex flex-col items-center">
              <img
                src="https://i.pravatar.cc/100?img=12"
                className="w-20 h-20 rounded-full border-4 border-green-500"
              />
              <h3 className="font-bold mt-3">Matthew J. Wyman</h3>
              <p className="text-sm text-gray-500">Senior Consultant</p>
            </div>

            <div className="flex gap-3 justify-center mt-6">
              <div className="w-3 h-3 bg-green-600 rounded-full" />
              <div className="w-3 h-3 bg-gray-400 rounded-full" />
            </div>
          </div>
        </section>


        <section className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-10 items-center">

          <div className="flex justify-center">
            <img
              src="https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F9.png&w=1200&q=75"
              className="w-[350px] rounded-xl border-[10px] border-yellow-400"
            />
          </div>

          <div>
            <h2 className="text-2xl font-bold">Pure & Organic</h2>
            <p className="text-gray-600 mt-3">
              Continued at up to zealously necessary breakfast. Surrounded sir motionless
              she end literature. Gay direction neglected but supported yet her.
            </p>

            <h2 className="text-2xl font-bold mt-10">Always Fresh</h2>
            <p className="text-gray-600 mt-3">
              Continued at up to zealously necessary breakfast. Surrounded sir motionless
              she end literature. Gay direction neglected but supported yet her.
            </p>
          </div>

          <div className="flex flex-col gap-12 items-center">
            
            <div className="flex flex-col items-center">
              <div className="w-36 h-36 rounded-full border-4 border-green-500 flex items-center justify-center">
                <span className="text-3xl font-bold text-green-600">83%</span>
              </div>
              <p className="mt-3 font-semibold">Organic Solutions</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-36 h-36 rounded-full border-4 border-yellow-500 flex items-center justify-center">
                <span className="text-3xl font-bold text-yellow-500">60%</span>
              </div>
              <p className="mt-3 font-semibold">Quality Agriculture</p>
            </div>

          </div>

        </section>

      </div>
    </div>
  );
}
