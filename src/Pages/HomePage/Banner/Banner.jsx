import React from 'react';
import bannerImage1 from '../../../assets/istockphoto-1919863292-612x612.jpg';
import bannerImage2 from '../../../assets/banners.webp';
import { easeInOut, motion } from "motion/react";

const Banner = () => {
  return (
    <section className="bg-white py-8 md:py-12">
      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center gap-10 px-4">

        {/* -------- Text Section -------- */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-5">
          <motion.h2
            animate={{ x: [0, 20, 0] }}
            transition={{ duration: 10, ease: easeInOut, repeat: Infinity }}
            className="text-3xl md:text-4xl font-extrabold text-blue-700"
          >
            Empower Your Future <br />
            with <span className="text-indigo-600">EduNest</span>
          </motion.h2>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Master in-demand skills from expert instructors. Learn at your own pace, anytime, anywhere. Start your learning journey today with our curated online courses.
            Gain real-world knowledge through interactive lessons, hands-on projects, and expert mentorship. Whether you're looking to advance your career, explore a new field, or simply sharpen your skills — we’ve got the right course for you.
          </p>


          <button className="btn bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-8 py-2 rounded-lg shadow transition">
            Get Started
          </button>
        </div>

        {/* -------- Image Section -------- */}
        <div className="w-full md:w-1/2 flex justify-center items-center gap-6">
          {/* Mobile only - Show first image with soft animation */}
          <div className="block md:hidden">
            <motion.img
              animate={{ y: [0, 10, 0], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 4, ease: easeInOut, repeat: Infinity }}
              src={bannerImage1}
              alt="Mobile Banner"
              className="w-full max-w-xs rounded-t-3xl rounded-br-3xl border-b-4 border-l-4 border-blue-500 shadow"
            />
          </div>

          {/* Desktop only - Show both images with animation */}
          <div className="hidden md:flex flex-col gap-6">
            <motion.img
              animate={{ y: [50, 100, 50] }}
              transition={{ duration: 10, ease: easeInOut, repeat: Infinity }}
              src={bannerImage1}
              alt="Banner Image 1"
              className="w-72 h-auto object-contain rounded-t-3xl rounded-br-3xl border-b-4 border-l-4 border-blue-500 shadow-md"
            />
            <motion.img
              animate={{ x: [100, 150, 100] }}
              transition={{ duration: 10, delay: 5, ease: easeInOut, repeat: Infinity }}
              src={bannerImage2}
              alt="Banner Image 2"
              className="w-72 h-auto object-contain rounded-t-3xl rounded-br-3xl border-b-4 border-l-4 border-blue-500 shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
