import React, { useState } from 'react'
import logo from '../../assets/Edu-Nest-Main-Logo-1.png'
import { Link, Outlet, useNavigate } from 'react-router'
import { GiHamburgerMenu, GiProgression } from "react-icons/gi";
import { SiCoursera } from "react-icons/si";
import { FaUserCircle, FaChalkboardTeacher, FaUsers } from "react-icons/fa";
import { GrLogout } from "react-icons/gr";
import { MdOutlineAddHome } from "react-icons/md";
import { RiAdminLine } from "react-icons/ri";
import useComeAInstructorModal from '../../components/hooks/instructorModal/Instructormodal';
import UseAuth from '../../components/hooks/UseAuth/UseAuth';
import toast from 'react-hot-toast';

const Dashboard = () => {
const navigate=useNavigate()

    // User LogOut function
    const { logOut } = UseAuth()
    const handleLogOut = () => {
        logOut().then(() => {
            toast.success('user LogOut SuccessFull')
            navigate('/')
        }).catch((error) => {
            toast.error(error.massage)
        })
    }


    const teacher = true;
    const [isSideBarOpen, setSideBarOpen] = useState(false)

    const { openModal, InstructorModal } = useComeAInstructorModal()

    return (
        <div className='flex '>
            {/* Top Navbar or Header */}
            <div className="fixed lg:hidden top-0 left-0 w-full  p-4 bg-white z-50 shadow-md">
                <button onClick={() => setSideBarOpen(!isSideBarOpen)}>
                    <GiHamburgerMenu className="text-2xl text-gray-800" />
                </button>
            </div>

            {/* Sidebar Overlay */}
            {
                isSideBarOpen && (
                    <div onClick={() => setSideBarOpen(false)} className="fixed inset-0 bg-black opacity-40 z-40 lg:hidden"></div>
                )
            }


            {/* sidebar section */}
            <div className={`fixed top-0 left-0 h-full bg-white shadow-2xl z-50 transition-transform duration-300 ease-in-out w-64 ${isSideBarOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0 lg:block`}>

                {/* logo part */}
                <div className=" py-4 px-6 flex justify-center items-center rounded-b-lg">
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
                        <Link to='/dashboard/AdminHome' className='flex items-center gap-3 px-4 py-2 rounded-lg bg-[#F3F4F6] hover:bg-[#E5E7E8] transition duration-200 text-base font-medium' >
                            <RiAdminLine className='text-xl' /> Admin Home
                        </Link>


                        <Link to='/dashboard/addCourse' className='flex items-center gap-3 px-4 py-2 rounded-lg bg-[#F3F4F6] hover:bg-[#E5E7E8] transition duration-200 text-base font-medium' >
                            <MdOutlineAddHome className='text-xl' /> Add New Course
                        </Link>


                        <Link to='/dashboard/manageUsers' className='flex items-center gap-3 px-4 py-2 bg-[#F3F4F6] hover:bg-[#E5E7E8] transition duration-200 text-base font-medium'>
                            <FaUsers className='text-xl' /> Manage Users
                        </Link>


                        <Link to='/dashboard/AdminProfile' className='flex items-center gap-3 px-4 py-2 rounded-lg bg-[#F3F4F6] hover:bg-[#E5E7E8] transition duration-200 text-base font-medium'>
                            <FaUserCircle className='text-xl' /> Admin Profile
                        </Link>

                    </div>
                    :
                    // student/user menu part
                    < div className="space-y-4 px-4">
                        <Link
                            to="/dashboard/myProgress"
                            className="flex items-center gap-3 px-4 py-2 rounded-lg bg-[#F3F4F6] hover:bg-[#E5E7EB] transition duration-200 text-base font-medium"
                        >
                            <GiProgression className="text-xl" />
                            My Progress
                        </Link>

                        <Link
                            to="/dashboard/myEnrolledCourses"
                            className="flex items-center gap-3 px-4 py-2 rounded-lg bg-[#F3F4F6] hover:bg-[#E5E7EB] transition duration-200 text-base font-medium"
                        >
                            <SiCoursera className="text-xl" />
                            My Courses
                        </Link>

                        <div>
                            <button onClick={openModal}
                                to="/dashboard/become-instructor"
                                className="flex items-center gap-3 px-4 py-2 rounded-lg bg-[#F3F4F6] hover:bg-[#E5E7EB] transition duration-200 text-base font-medium"
                            >
                                <FaChalkboardTeacher className="text-xl" />
                                Become an Instructor
                            </button>
                            {InstructorModal}
                        </div>
                        <Link
                            to="/dashboard/UserProfile"
                            className="flex items-center gap-3 px-4 py-2 rounded-lg bg-[#F3F4F6] hover:bg-[#E5E7EB] transition duration-200 text-base font-medium"
                        >
                            <FaUserCircle className="text-xl" />
                            Profile
                        </Link>
                    </div>}

                {/* Logout Button */}
                <div className="pt-56 px-4 pb-9">
                    <button onClick={handleLogOut}
                        className="flex items-center gap-3 w-full px-4 py-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition duration-200 font-medium"
                    >
                        <GrLogout className="text-xl" />
                        Log Out
                    </button>
                </div>
            </div>

            {/* main section  */}
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>

        </div >
    )
}

export default Dashboard
