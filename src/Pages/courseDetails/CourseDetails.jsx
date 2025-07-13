
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  FaVideo,
  FaUserTie,
  FaMoneyBillWave,
  FaStar,
  FaClock,
} from "react-icons/fa";
import { useParams } from "react-router";

const CourseDetails = () => {
  const { id } = useParams(); // এখানে id = URL থেকে আসা course id
  const [course, setCourse] = useState(null);

  useEffect(() => {
    fetch('/courses.json')
      .then(res => res.json())
      .then(data => {
        const selectedCourse = data.find(item => item.id === parseInt(id));
        setCourse(selectedCourse);
      })
      .catch(err => console.error(err));
  }, [id]);


  const handleToast=()=>{
    toast.success('* Payment functionality will be added soon.')
  }
  return (
    <div className="max-w-6xl mx-auto p-6 mt-10 bg-white rounded-xl shadow-lg grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left Side: Thumbnail */}
      <div>
        <img
          src={course?.image}
          alt='courseDetails Image'
          className="w-full h-96 object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Right Side: Details */}
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-gray-800">{course?.title}</h1>
        <p className="text-gray-600">{course?.description}</p>

        <div className="flex items-center gap-2 text-blue-600 font-medium">
          <FaUserTie /> <span>Instructor: {course?.instructor}</span>
        </div>

        <div className="flex items-center gap-2 text-green-600 font-medium">
          <FaMoneyBillWave /> <span>Price: ৳{course?.price}</span>
        </div>

        <div className="flex items-center gap-2 text-yellow-500 font-medium">
          <FaStar /> <span>Rating: {course?.rating}</span>
        </div>

        <div className="flex items-center gap-2 text-purple-600 font-medium">
          <FaClock /> <span>Duration: {course?.duration}</span>
        </div>

        <div className="flex items-center gap-2 text-indigo-600 font-medium">
          <FaVideo /> <span>Total Videos: {course?.videos}</span>
        </div>

        <button
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg text-lg font-semibold transition-all"
          onClick={() => handleToast()}
        >
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default CourseDetails;
