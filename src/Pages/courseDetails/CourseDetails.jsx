
import {
  FaVideo,
  FaUserTie,
  FaMoneyBillWave,
  FaStar,
  FaClock,
} from "react-icons/fa";

const CourseDetails = () => {


  return (
    <div className="max-w-6xl mx-auto p-6 mt-10 bg-white rounded-xl shadow-lg grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left Side: Thumbnail */}
      <div>
        <img
          src='https://i.ibb.co.com/BK6dFJC2/React-Js-Development.jpg'
          alt='courseDetails Image'
          className="w-full h-96 object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Right Side: Details */}
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-gray-800">Modern React for Beginners</h1>
        <p className="text-gray-600">This course covers the fundamentals of React including JSX, components, props, state, and hooks. Perfect for beginners who want to build dynamic web applications.</p>

        <div className="flex items-center gap-2 text-blue-600 font-medium">
          <FaUserTie /> <span>Instructor: John Doe</span>
        </div>

        <div className="flex items-center gap-2 text-green-600 font-medium">
          <FaMoneyBillWave /> <span>Price: ৳1499</span>
        </div>

        <div className="flex items-center gap-2 text-yellow-500 font-medium">
          <FaStar /> <span>Rating: 4.8</span>
        </div>

        <div className="flex items-center gap-2 text-purple-600 font-medium">
          <FaClock /> <span>Duration: 6 weeks</span>
        </div>

        <div className="flex items-center gap-2 text-indigo-600 font-medium">
          <FaVideo /> <span>Total Videos: 12</span>
        </div>

        <button
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg text-lg font-semibold transition-all"
          onClick={() => alert("Enroll Now button clicked!")}
        >
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default CourseDetails;
