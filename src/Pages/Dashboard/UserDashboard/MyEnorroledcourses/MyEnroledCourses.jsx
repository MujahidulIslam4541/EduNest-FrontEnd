import React from "react";

const MyEnrolledCourses = () => {
  const enrolledCourses = [
    {
      id: 1,
      title: "Modern JavaScript from Scratch",
      instructor: "John Doe",
      enrolledDate: "April 10, 2025",
      thumbnail: "https://i.ibb.co/vLFTkWq/js-course.jpg",
    },
    {
      id: 2,
      title: "React for Beginners",
      instructor: "Jane Smith",
      enrolledDate: "April 15, 2025",
      thumbnail: "https://i.ibb.co/SvW9qz7/react-course.jpg",
    },
    {
      id: 3,
      title: "Node.js Masterclass",
      instructor: "Alice Johnson",
      enrolledDate: "April 20, 2025",
      thumbnail: "https://i.ibb.co/YW5hLJ0/node-course.jpg",
    },
  ];

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-10 text-center text-gray-800">
        🎓 My Enrolled Courses
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {enrolledCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
          >
            <img
              src={course.thumbnail}
              alt={course.title}
              className="h-48 w-full object-cover rounded-t-2xl"
            />
            <div className="p-5">
              <h3 className="text-xl font-bold text-gray-800 mb-1">{course.title}</h3>
              <p className="text-sm text-gray-600 mb-1">
                Instructor: <span className="text-gray-800 font-medium">{course.instructor}</span>
              </p>
              <p className="text-sm text-gray-600 mb-4">
                Enrolled on: <span className="text-gray-800 font-medium">{course.enrolledDate}</span>
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Go to Course
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyEnrolledCourses;
