import React from 'react'
import logo from '../../assets/Edu-Nest-Main-Logo-1.png'
import { Link } from 'react-router'
import { GiProgression } from "react-icons/gi";
import { SiCoursera } from "react-icons/si";
import { FaUserCircle } from "react-icons/fa";
import { GrLogout } from "react-icons/gr";

const Dashboard = () => {
    return (
        <div className='flex '>
            {/* sidebar section */}
            <div className="w-68 min-h-lvh bg-white shadow-2xl rounded-xl">

                {/* logo part */}
                <div className="  py-4 px-6 flex justify-center items-center rounded-b-lg">
                    <Link
                        to="/"
                        className="bg-[#ECFCCB] px-6 py-2 rounded-lg shadow hover:shadow-md transition duration-300 flex items-center gap-2"
                    >
                        <img
                            className="w-44 h-10 object-contain"
                            src={logo}
                            alt="Website Logo"
                        />
                    </Link>
                </div>

                {/* Menu Links */}
                <div className="space-y-4 px-4">
                    <Link
                        to="/dashboard/progress"
                        className="flex items-center gap-3 px-4 py-2 rounded-lg bg-[#F3F4F6] hover:bg-[#E5E7EB] transition duration-200 text-base font-medium"
                    >
                        <GiProgression className="text-xl" />
                        My Progress
                    </Link>

                    <Link
                        to="/dashboard/my-courses"
                        className="flex items-center gap-3 px-4 py-2 rounded-lg bg-[#F3F4F6] hover:bg-[#E5E7EB] transition duration-200 text-base font-medium"
                    >
                        <SiCoursera className="text-xl" />
                        My Courses
                    </Link>

                    <Link
                        to="/dashboard/profile"
                        className="flex items-center gap-3 px-4 py-2 rounded-lg bg-[#F3F4F6] hover:bg-[#E5E7EB] transition duration-200 text-base font-medium"
                    >
                        <FaUserCircle className="text-xl" />
                        Profile
                    </Link>
                </div>

                {/* Logout Button */}
                <div className="mt-76 px-4">
                    <button
                        className="flex items-center gap-3 w-full px-4 py-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition duration-200 font-medium"
                    >
                        <GrLogout className="text-xl" />
                        Log Out
                    </button>
                </div>
            </div>

            {/* main section  */}
            <div className='flex-1'>
                <h2>Main Section</h2>
            </div>

        </div>
    )
}

export default Dashboard
