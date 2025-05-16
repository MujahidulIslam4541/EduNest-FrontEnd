
const MyCourses = () => {
  const courses = [
    {
      id: 1,
      title: "React for Beginners",
      instructor: "John Doe",
      progress: 75,
      thumbnail: "https://i.ibb.co/K9skMfj/course-1.jpg",
    },
    {
      id: 2,
      title: "Advanced JavaScript",
      instructor: "Jane Smith",
      progress: 45,
      thumbnail: "https://i.ibb.co/QJdQY9y/course-2.jpg",
    },
    {
      id: 3,
      title: "Tailwind CSS Mastery",
      instructor: "Alice Johnson",
      progress: 90,
      thumbnail: "https://i.ibb.co/F36rhqq/course-3.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-12">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">My Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
          >
            <img src={course.thumbnail} alt={course.title} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
              <p className="text-gray-600 text-sm mb-3">Instructor: {course.instructor}</p>
              <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                <div
                  className="bg-blue-500 h-3 rounded-full"
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-500 mb-4">Progress: {course.progress}%</p>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                Continue Learning
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCourses;
