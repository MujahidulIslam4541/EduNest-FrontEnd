import React from 'react'
import logo from '../../assets/Edu-Nest-Main-Logo-1.png'
import { Link } from 'react-router'
import { GiProgression } from "react-icons/gi";
import { SiCoursera } from "react-icons/si";
import { FaUserCircle, FaChalkboardTeacher, FaUsers } from "react-icons/fa";
import { GrLogout } from "react-icons/gr";
import { MdManageAccounts, MdOutlineAddHome } from "react-icons/md";
import { PiStudent } from "react-icons/pi";
import { RiAdminLine } from "react-icons/ri";

const Dashboard = () => {
    const teacher = true;

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

                {teacher == true ?

                    // instructor/teacher section
                    <div className='space-y-4 px-4'>
                        <Link className='flex items-center gap-3 px-4 py-2 rounded-lg bg-[#F3F4F6] hover:bg-[#E5E7E8] transition duration-200 text-base font-medium' >
                            <RiAdminLine className='text-xl' /> Admin Home
                        </Link>


                        <Link className='flex items-center gap-3 px-4 py-2 rounded-lg bg-[#F3F4F6] hover:bg-[#E5E7E8] transition duration-200 text-base font-medium' >
                            <MdOutlineAddHome className='text-xl' /> Add New Course
                        </Link>

                        <Link className='flex items-center gap-3 px-6 py-2 rounded-xl bg-[#F3F4F6] hover:bg-[#E5E7E8] transition duration-200 text-base font-medium'>
                            <FaChalkboardTeacher className='text-xl' /> My Courses
                        </Link>

                        <Link className='flex items-center gap-3 px-4 py-2 bg-[#F3F4F6] hover:bg-[#E5E7E8] transition duration-200 text-base font-medium'>
                            <PiStudent className='text-xl' /> Enrolled Student
                        </Link>

                        <Link className='flex items-center gap-3 px-4 py-2 bg-[#F3F4F6] hover:bg-[#E5E7E8] transition duration-200 text-base font-medium'>
                            <FaUsers className='text-xl' /> Manage Users
                        </Link>

                        <Link className='flex items-center gap-3 px-4 py-2 bg-[#F3F4F6] hover:bg-[#E5E7E8] transition duration-200 text-base font-medium'>
                            <MdManageAccounts className='text-xl' /> Manage Courses
                        </Link>

                        <Link
                            to="/dashboard/instructor-requests"
                            className="flex items-center gap-3 px-4 py-2 bg-[#F3F4F6] hover:bg-[#E5E7E8] transition duration-200 text-base font-medium"
                        >
                            <FaUsers className="text-xl" />
                            Instructor Requests
                        </Link>



                        <Link className='flex items-center gap-3 px-4 py-2 rounded-lg bg-[#F3F4F6] hover:bg-[#E5E7E8] transition duration-200 text-base font-medium'>
                            <FaUserCircle className='text-xl' /> Admin Profile
                        </Link>

                    </div>
                    :
                    // student/user menu part
                    < div className="space-y-4 px-4">
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
                            to="/dashboard/become-instructor"
                            className="flex items-center gap-3 px-4 py-2 rounded-lg bg-[#F3F4F6] hover:bg-[#E5E7EB] transition duration-200 text-base font-medium"
                        >
                            <FaChalkboardTeacher className="text-xl" />
                            Become an Instructor
                        </Link>

                        <Link
                            to="/dashboard/profile"
                            className="flex items-center gap-3 px-4 py-2 rounded-lg bg-[#F3F4F6] hover:bg-[#E5E7EB] transition duration-200 text-base font-medium"
                        >
                            <FaUserCircle className="text-xl" />
                            Profile
                        </Link>
                    </div>}

                {/* Logout Button */}
                <div className="pt-76 px-4">
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

        </div >
    )
}

export default Dashboard
