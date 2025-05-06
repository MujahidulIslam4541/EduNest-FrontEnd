import React from 'react'
// import bannerImage1 from '../../../assets/bannerImage3.png'
import bannerImage2 from '../../../assets/bannerImage2.png'

const Banner = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-6 px-4 py-10 ">
      {/* Left Banner Image */}
      <div className="flex justify-center">
        <img src={bannerImage2} alt="Banner Left" className="w-full max-w-sm h-auto object-contain rounded-lg" />
      </div>

      {/* Middle Banner Text */}
      <div className="text-center md:text-left space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 ">
          Empower Your Future with <span className="text-indigo-600">EduNest</span>
        </h2>
        <p className="text-gray-600 text-base md:text-lg">
          Master in-demand skills from expert instructors. Learn at your own pace, anytime, anywhere. Start your learning journey today with our curated online courses.
        </p>
        <button className="mt-4 px-6 py-2 bg-indigo-600 text-white font-medium rounded-lg shadow hover:bg-indigo-700 transition">
          Get Started
        </button>
      </div>

      {/* Right Banner Image */}
      <div className="flex justify-center">
        <img src={bannerImage2} alt="Banner Right" className="w-full max-w-sm h-auto object-contain rounded-lg " />
      </div>
    </div>

  )
}

export default Banner
