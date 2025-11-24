import React from 'react'
const Footer = () => {
  return (
    <div className='p'>
    <div>
      <div className="bg-green-900 text-white dark:bg-black py-10 px-6 md:px-12">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
    <div>
      <div className="flex items-center gap-2 mb-4">
        <div className="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center">
        </div>
        <h2 className="text-2xl font-bold">AGRICA</h2>
      </div>
      <p className="text-sm leading-relaxed mb-4">
        Happen active county. Winding morning ambition shyness evident to poor.
        Because elderly new to the point to main success.
      </p>
      <div className="flex items-center bg-white rounded-full overflow-hidden w-56">
        <input
          type="email"
          placeholder="Your Email"
          className="flex-grow px-3 py-2 text-gray-700 outline-none"
        />
        <button className="bg-yellow-500 text-white px-4 py-2 font-bold">
          GO
        </button>
      </div>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-4">Explore</h3>
      <ul className="space-y-2 text-sm">
        <li>About Us</li>
        <li>Meet Our Team</li>
        <li>News & Media</li>
        <li>Services</li>
        <li>Contact Us</li>
        <li>Volunteers</li>
      </ul>
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-4">Recent Posts</h3>
      <div className="flex items-start gap-3 mb-4">
        <div className="w-12 h-12  rounded-md">
            <img src="https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumbs%2F3.jpg&w=828&q=75"/>
        </div>
        <div>
          <p className="text-yellow-400 text-xs mb-1">26 AUG, 2025</p>
          <p className="text-sm leading-snug">
            Minuter him own clothes but observe as country.
          </p>
        </div>
      </div>
      <div className="flex items-start gap-3">
        <div className="w-12 h-12 rounded-md">
            <img src="https://agrica-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumbs%2F2.jpg&w=828&q=75"/>
        </div>
        <div>
          <p className="text-yellow-400 text-xs mb-1">08 DEC, 2025</p>
          <p className="text-sm leading-snug">
            Overcame breeding point concerns has terminate
          </p>
        </div>
      </div>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
      <div className="space-y-4 text-sm">
        <div className="flex items-start gap-3">
          <div className="w-6 h-6 rounded-full flex items-center justify-center">
            <img src="https://tse2.mm.bing.net/th/id/OIP._gpmPUCn-JgqLhMt39ywAQHaHa?pid=Api&P=0&h=180"/>
          </div>
          <div>
            <p className="font-semibold">ADDRESS:</p>
            <p>5919 Trussville Crossings Pkwy, Birmingham</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-6 h-6 rounded-full  flex items-center justify-center">
            <img src="https://tse1.mm.bing.net/th/id/OIP.cRGpU9nQqyVH_HXhyRgp_gHaHa?pid=Api&P=0&h=180"/>
          </div>
          <div>
            <p className="font-semibold">EMAIL:</p>
            <p>info@validtheme.com</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-6 h-6 rounded-full flex items-center justify-center">
            <img src="https://tse1.mm.bing.net/th/id/OIP.ylvx870qBKt6qrN8Z5jJBwHaLH?pid=Api&P=0&h=180"/>
          </div>
          <div>
            <p className="font-semibold">PHONE:</p>
            <p>+123 34598768</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="border-t border-gray-600 mt-10 pt-4 text-center text-sm">
    © Copyright 2025. All Rights Reserved by validthemes
  </div>
</div>
    </div>
  </div>  
  )
}

export default Footer
