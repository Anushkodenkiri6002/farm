import React from 'react'

const blog = () => {
  return (
    <div>
   <div className="w-full max-w-[1425px] h-auto bg-white flex flex-col items-center justify-start mx-auto py-12 px-6 md:px-16">
  <div className="text-center mb-10">
    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-2">Blog</h2>
  </div>

  <div className="flex flex-col md:flex-row items-center justify-center gap-10">
    <div className="relative w-80 sm:w-96 h-[400px] md:h-[500px] bg-cover rounded-xl overflow-hidden shadow-lg"
      style={{ backgroundImage: "url('https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F8-full.jpg&w=2048&q=75')" }}>
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
        <h3 className="text-white text-2xl font-bold mt-1">Announcing if attachment resolution sentiments</h3>
      </div>
    </div>

    <div className="hidden md:block relative w-80 sm:w-96 h-[400px] md:h-[500px] bg-cover rounded-xl overflow-hidden shadow-lg"
      style={{ backgroundImage: "url('https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F4-full.jpg&w=3840&q=75')" }}>
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
        <h3 className="text-white text-2xl font-bold mt-1">Minuter him own clothes but observe as country</h3>
      </div>
    </div>

    <div className="hidden md:block relative w-80 sm:w-96 h-[400px] md:h-[500px] bg-cover rounded-xl overflow-hidden shadow-lg"
      style={{ backgroundImage: "url('https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F3-full.jpg&w=3840&q=75')" }}>
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
        <h3 className="text-white text-2xl font-bold mt-1">Overcame breeding point concerns has terminate</h3>
    </div>
    </div>
  </div>
  <div className="flex justify-center mt-10 space-x-2">
    <span className="w-3 h-3 bg-green-600 rounded-full"></span>
    <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
    <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
  </div>
  </div>

<div className="bg-[#f5f7f5] py-12 px-4 md:px-8">
  <div className="max-w-6xl mx-auto">
  <div className="text-center mb-10">
  <p className="text-sm text-green-700 font-medium">What We Do</p>
  <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-2">Currently we are<br className="hidden md:block" />selling organic food</h2>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      
      
       <div className="w-64 h-64 md:w-80 md:h-80 bg-gray-200 rounded-md overflow-hidden flex items-center justify-center">

    <img src="https://as1.ftcdn.net/v2/jpg/06/02/37/38/1000_F_602373884_9XEO0W0dbkkgjMii9q8FOikkmJBoCJIK.jpg"/>
  </div>
  <div className="bg-white shadow-md rounded-lg p-6 md:p-10 ml-0 md:ml-8 max-w-xl mt-6 md:mt-0">
    <h2 className="text-3xl font-bold mb-4 relative">
      Testimonials
      <span className="absolute left-0 bottom-0 w-28 h-1 bg-yellow-400 rounded"></span>
    </h2>
    <p className="text-gray-600 italic leading-relaxed mb-5">
      “Targeting consultation discover apartments. Indulgence off under folly death wrote
      cause her way spite. Plan upon yet way get cold spot its week.”
    </p>
    <hr className="border-gray-300 mb-4" />
    <div>
      <p className="font-bold text-gray-800">Matthew J. Wyman</p>
      <p className="text-green-600 text-sm font-medium">Senior Consultant</p>
      <div className="flex items-center mt-2 space-x-1">
        <span className="text-yellow-400 text-lg">★</span>
    <span className="text-yellow-400 text-lg">★</span>
    <span className="text-yellow-400 text-lg">★</span>
      <span className="text-yellow-400 text-lg">★</span>
        <span className="text-yellow-400 text-lg">★</span>
  </div>
    </div></div>
    </div> </div>
</div>
</div>
  )
}

export default  blog
