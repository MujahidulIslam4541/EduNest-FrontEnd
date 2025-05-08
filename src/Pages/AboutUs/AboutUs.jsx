import React from 'react'
import aboutImage1 from '../../assets/about1.jpg'
import visionImage from '../../assets/our vision.webp'
import { FaLightbulb, FaLaptopCode, FaHandsHelping } from "react-icons/fa";


const AboutUs = () => {
    return (

        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">

            {/* Our Mission */}
            <div>
                <h2 className="text-4xl text-center font-bold mb-8 text-gray-800">Our Mission</h2>

                {/* WHY Section */}
                <div className="rounded-2xl bg-white shadow-lg w-full p-6 grid grid-cols-1 md:grid-cols-3 items-center gap-6">
                    <div className="md:col-span-2 space-y-4">
                        <div className="flex items-center gap-3 text-indigo-600 text-xl font-semibold">
                            <FaLightbulb className="text-3xl text-yellow-500" />
                            <h3 className="text-2xl font-bold">WHY</h3>
                        </div>
                        <p className="text-gray-600 text-lg">
                            We are passionate about empowering individuals to transform their lives through the power of coding.
                            We believe that everyone should have access to high-quality, affordable coding education,
                            regardless of their background or experience.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <img className="w-48 h-36 object-cover rounded-xl" src={aboutImage1} alt="Why Image" />
                    </div>
                </div>

                {/* WHAT & HOW Sections */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                    {/* WHAT */}
                    <div className="rounded-2xl bg-white shadow-lg p-8 space-y-4 flex flex-col justify-center">
                        <div className="flex items-center gap-3 text-indigo-600 text-xl font-semibold">
                            <FaLaptopCode className="text-3xl text-blue-500" />
                            <h3 className="text-2xl font-bold">WHAT</h3>
                        </div>
                        <p className="text-gray-600 text-lg">
                            We provide a comprehensive range of online programming courses, from beginner-level Web Development to advanced CSE Fundamentals.
                            Our courses are engaging, effective, and tailored to today’s learners.
                        </p>
                    </div>

                    {/* HOW */}
                    <div className="rounded-2xl bg-white shadow-lg p-8 space-y-4 flex flex-col justify-center">
                        <div className="flex items-center gap-3 text-indigo-600 text-xl font-semibold">
                            <FaHandsHelping className="text-3xl text-green-500" />
                            <h3 className="text-2xl font-bold">HOW</h3>
                        </div>
                        <p className="text-gray-600 text-lg">
                            We nurture our students in a personalized and supportive environment. Our instructors guide and mentor students to help them achieve their coding goals confidently.
                        </p>
                    </div>
                </div>
            </div>

            {/* Our Vision */}
            <div className="mt-16 px-4 md:px-8">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Our Vision</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    {/* left side */}
                    <div className="flex justify-center">
                        <img src={visionImage} alt="Our Vision" className="w-full h-84 object-cover rounded-lg shadow-lg" />
                    </div>

                    {/* right side */}
                    <div>
                        <div className="mt-6 space-y-4">
                            <ul className="list-disc pl-6 text-lg text-gray-600 space-y-2">
                                <li>🚀 Empower learners globally through accessible and quality tech education.</li>
                                <li>🌍 Build an inclusive community of passionate coders and innovators.</li>
                                <li>💡 Inspire creativity, critical thinking, and problem-solving skills.</li>
                                <li>🔧 Provide hands-on, real-world learning experiences.</li>
                                <li>📈 Drive continuous growth by staying ahead with emerging technologies.</li>
                                <li>🤝 Foster a supportive ecosystem for lifelong learning and career success.</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

        </div>

    )
}

export default AboutUs
